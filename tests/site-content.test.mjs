import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const full = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(full) : [full];
});

const sourceFiles = [...walk(path.join(root, "app")), ...walk(path.join(root, "components")), ...walk(path.join(root, "lib"))]
  .filter((file) => /\.(ts|tsx)$/.test(file));
const source = sourceFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");

test("published source contains no placeholder testimonials or contact placeholders", () => {
  for (const forbidden of ["Sarah M.", "Mike T.", "Jennifer R.", "Real customers, real results", "[PLACEHOLDER]", "[Phone TBD]"]) {
    assert.equal(source.includes(forbidden), false, `found forbidden content: ${forbidden}`);
  }
});

test("published source does not claim unverified credentials or performance figures", () => {
  for (const forbidden of [
    /licensed\s*(?:&|and|,)\s*insured/i,
    /WSIB/i,
    /no[- ]subcontractors?/i,
    /satisfaction guarantee/i,
    /500\+\s*homes/i,
    /6\+\s*years/i,
  ]) {
    assert.doesNotMatch(source, forbidden);
  }
});

test("quote endpoint fails honestly and does not log customer data", () => {
  const route = read("app/api/contact/route.ts");
  assert.match(route, /status:\s*503/);
  assert.doesNotMatch(route, /console\.(log|info|debug)/);
  assert.doesNotMatch(route, /success:\s*true/);
  assert.match(route, /Cache-Control/);
});

test("unconnected popup form is not mounted", () => {
  const layout = read("app/layout.tsx");
  assert.doesNotMatch(layout, /PopupForm/);
});

test("canonical sitemap and robots use the www .com host", () => {
  const sitemap = read("public/sitemap.xml");
  const robots = read("public/robots.txt");
  assert.match(robots, /https:\/\/www\.windsorexteriorpros\.com\/sitemap\.xml/);
  assert.doesNotMatch(sitemap, /https:\/\/windsorexteriorpros\.com/);
  assert.doesNotMatch(sitemap, /windsorexteriorpros\.ca/);
});

test("business contact details are centralized and verified", () => {
  const business = read("lib/business.ts");
  assert.match(business, /226-605-6894/);
  assert.match(business, /9:00 AM-6:00 PM/);
  assert.match(business, /https:\/\/www\.windsorexteriorpros\.com/);
});

test("service-area pages use Service schema instead of fake local addresses", () => {
  const areaRoot = path.join(root, "app", "service-areas");
  const pages = walk(areaRoot).filter((file) => file.endsWith("page.tsx") && path.dirname(file) !== areaRoot);
  assert.equal(pages.length, 14);
  for (const page of pages) {
    const contents = fs.readFileSync(page, "utf8");
    assert.match(contents, /const serviceAreaSchema/);
    assert.match(contents, /"@type": "Service"/);
    assert.doesNotMatch(contents, /addressLocality|GeoCoordinates/);
  }
});

test("security headers and .ca host redirects are configured", () => {
  const config = read("next.config.ts");
  for (const header of ["Content-Security-Policy", "X-Content-Type-Options", "Referrer-Policy", "Permissions-Policy"]) {
    assert.match(config, new RegExp(header));
  }
  assert.match(config, /windsorexteriorpros\.ca/);
  assert.match(config, /www\.windsorexteriorpros\.com/);
});

test("service images are valid non-placeholder JPEGs", () => {
  const images = [
    "asphalt-shingle-roofing-windsor-ontario.jpg",
    "landscaping-hardscaping-interlocking-windsor-ontario.jpg",
    "seamless-eavestrough-installation-windsor-ontario.jpg",
    "soffit-fascia-installation-windsor-ontario.jpg",
    "vinyl-siding-installation-windsor-ontario.jpg",
    "windows-doors-installation-windsor-ontario.jpg",
  ];
  for (const image of images) {
    const file = fs.readFileSync(path.join(root, "public", image));
    assert.ok(file.length > 100_000, `${image} is unexpectedly small`);
    assert.deepEqual([...file.subarray(0, 3)], [0xff, 0xd8, 0xff], `${image} is not a JPEG`);
  }
});

test("site no longer publishes the placeholder per-foot price range", () => {
  assert.doesNotMatch(source, /\$8\s+to\s+\$20/);
});
