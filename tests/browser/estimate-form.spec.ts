import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs";
import path from "node:path";

const FORM_URL = "https://neurodesk.windsorexteriorpros.com/widget/form/I72UixqHGUzhnhvkQVSh";
const FORM_SCRIPT = "https://neurodesk.windsorexteriorpros.com/js/form_embed.js";
const FORM_DESTINATION = "/contact#estimate-form";

function collectBrowserErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error" && !/requestStorageAccess: Permission denied/.test(message.text())) {
      errors.push(`console: ${message.text()}`);
    }
  });
  return errors;
}

function sitemapRoutes() {
  const xml = fs.readFileSync(path.join(process.cwd(), "public", "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>https:\/\/www\.windsorexteriorpros\.com([^<]*)<\/loc>/g)]
    .map((match) => match[1] || "/");
}

test("approved form loads, resizes, and exposes the intended fields", async ({ page }) => {
  const errors = collectBrowserErrors(page);
  await page.goto("/contact#estimate-form", { waitUntil: "domcontentloaded" });

  const frame = page.locator('iframe[title="Free Estimate Form"]');
  await expect(frame).toHaveCount(1);
  await expect(frame).toHaveAttribute("src", FORM_URL);
  await expect(page.locator(`script[src="${FORM_SCRIPT}"]`)).toHaveCount(1);

  const form = page.frameLocator('iframe[title="Free Estimate Form"]');
  await expect(form.getByLabel("First Name")).toBeVisible({ timeout: 20_000 });
  await expect(form.getByLabel("Last Name")).toBeVisible();
  await expect(form.getByLabel("Phone *")).toBeVisible();
  await expect(form.getByLabel("Email *")).toBeVisible();
  await expect(form.getByLabel("City *")).toBeVisible();
  await expect(form.getByRole("button", { name: "Submit" })).toBeVisible();

  const box = await frame.boundingBox();
  expect(box).not.toBeNull();
  expect(box!.height).toBeGreaterThan(1_000);
  expect(errors).toEqual([]);
});

test("all published quote and estimate CTAs use the canonical form destination", async ({ page }) => {
  for (const route of sitemapRoutes()) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const ctas = await page.locator('a[href]:not([href^="tel:"]):not([href^="mailto:"])').evaluateAll((links) =>
      links
        .map((link) => ({ text: link.textContent?.replace(/\s+/g, " ").trim() || "", href: link.getAttribute("href") || "" }))
        .filter((link) => /^(?:get|request|book|schedule)\b.*\b(?:quote|estimate|consultation|service)\b|^contact us$/i.test(link.text)),
    );
    for (const cta of ctas) {
      expect(cta.href, `${route}: ${cta.text}`).toBe(FORM_DESTINATION);
    }
    await expect(page.locator('a[href="/contact"]')).toHaveCount(0);
  }
});

test("hero CTA lands on the same visible form experience", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.getByRole("link", { name: "Get a Free Quote" }).first().click();
  await expect(page).toHaveURL(/\/contact#estimate-form$/);
  const section = page.locator("#estimate-form");
  await expect(section).toBeVisible();
  await expect(section.locator('iframe[title="Free Estimate Form"]')).toBeVisible();
  const top = await section.evaluate((element) => element.getBoundingClientRect().top);
  expect(top).toBeLessThanOrEqual(100);
});

test("mobile form is contained, readable, and free of page overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const errors = collectBrowserErrors(page);
  await page.goto("/contact#estimate-form", { waitUntil: "domcontentloaded" });
  const frame = page.locator('iframe[title="Free Estimate Form"]');
  await expect(frame).toBeVisible({ timeout: 20_000 });
  await expect(page.frameLocator('iframe[title="Free Estimate Form"]').getByLabel("Phone *")).toBeVisible();
  await expect.poll(async () => {
    const box = await frame.boundingBox();
    return box ? box.x : -10_000;
  }, { timeout: 10_000 }).toBeGreaterThanOrEqual(0);

  const geometry = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    iframe: (() => {
      const frame = document.querySelector('iframe[title="Free Estimate Form"]') as HTMLIFrameElement;
      const rect = frame.getBoundingClientRect();
      return { left: rect.left, right: rect.right, width: rect.width, height: rect.height };
    })(),
  }));
  expect(geometry.scrollWidth).toBe(geometry.clientWidth);
  expect(geometry.iframe.left).toBeGreaterThanOrEqual(0);
  expect(geometry.iframe.right).toBeLessThanOrEqual(390);
  expect(geometry.iframe.width).toBeGreaterThan(300);
  expect(geometry.iframe.height).toBeGreaterThan(1_000);
  expect(errors).toEqual([]);
});

test("contact page has no serious accessibility violations and suppresses chat overlap at the form", async ({ page }) => {
  const errors = collectBrowserErrors(page);
  await page.goto("/contact#estimate-form", { waitUntil: "domcontentloaded" });
  await expect(page.locator('iframe[title="Free Estimate Form"]')).toBeVisible({ timeout: 20_000 });
  const chatWidget = page.locator("chat-widget");
  await expect(chatWidget).toHaveCount(1, { timeout: 20_000 });
  await expect(chatWidget).toBeHidden();
  await page.waitForFunction(() =>
    [...document.querySelectorAll('#estimate-form [style*="opacity"]')]
      .every((element) => getComputedStyle(element).opacity === "1"),
  );

  const results = await new AxeBuilder({ page }).exclude('iframe[title="Free Estimate Form"]').analyze();
  const blocking = results.violations.filter((violation) => ["serious", "critical"].includes(violation.impact || ""));
  expect(blocking).toEqual([]);

  await page.goto("/", { waitUntil: "domcontentloaded" });
  const homepageChatWidget = page.locator("chat-widget");
  await expect(homepageChatWidget).toHaveCount(1, { timeout: 20_000 });
  await expect.poll(() => homepageChatWidget.evaluate((element) => getComputedStyle(element).display)).not.toBe("none");
  expect(errors).toEqual([]);
});
