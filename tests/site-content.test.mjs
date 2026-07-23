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

test("GHL chat widget is mounted with its approved configuration", () => {
  const layout = read("app/layout.tsx");
  const config = read("next.config.ts");
  assert.match(layout, /https:\/\/widgets\.leadconnectorhq\.com\/loader\.js/);
  assert.match(layout, /6a5eaeabc6e06ac8e8eb7612/);
  assert.match(layout, /data-source="WEB_USER"/);
  assert.match(config, /script-src[^;]*https:\/\/widgets\.leadconnectorhq\.com/);
  assert.match(config, /connect-src[^;]*https:\/\/services\.leadconnectorhq\.com/);
  assert.match(config, /frame-src[^;]*https:\/\/challenges\.cloudflare\.com/);
});

test("footer credits NeuroDesk with a direct link", () => {
  const footer = read("components/Footer.tsx");
  assert.match(footer, /Powered by/);
  assert.match(footer, /href="https:\/\/neurodesk\.io"/);
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
  assert.match(business, /Call to confirm availability/);
  assert.doesNotMatch(source, /dayOfWeek|openingHoursSpecification/);
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
  assert.match(config, /connect-src[^\n]*https:\/\/fonts\.bunny\.net/);
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

test("recent work uses client-owned local assets without unknown project metadata", () => {
  const home = read("app/page.tsx");
  const assetSources = read("ASSET-SOURCES.md");
  const galleryImages = [
    "eavestrough-downspout-detail.webp",
    "vertical-siding-roofline-detail.webp",
    "white-vertical-siding-exterior.webp",
    "soffit-fascia-window-detail.webp",
    "covered-roof-framing-in-progress.webp",
  ];

  assert.match(home, /id="recent-work"/);
  assert.match(assetSources, /Client-owned project photography/);

  for (const image of galleryImages) {
    assert.match(home, new RegExp(image.replaceAll(".", "\\.")));
    const file = fs.readFileSync(path.join(root, "public", "recent-work", image));
    assert.ok(file.length > 50_000, `${image} is unexpectedly small`);
    assert.equal(file.subarray(0, 4).toString("ascii"), "RIFF", `${image} is not a WebP file`);
    assert.equal(file.subarray(8, 12).toString("ascii"), "WEBP", `${image} is not a WebP file`);
  }

  const galleryData = home.slice(home.indexOf("const RECENT_WORK"), home.indexOf("const WHY_US"));
  assert.doesNotMatch(galleryData, /Windsor|Essex|before|after|20\d{2}/i);

  const galleryVideos = [
    ["covered-patio-roofline-walkthrough.mp4", "covered-patio-roofline-walkthrough-poster.webp"],
    ["gutter-guard-installation-closeup.mp4", "gutter-guard-installation-closeup-poster.webp"],
  ];
  for (const [videoName, posterName] of galleryVideos) {
    const video = fs.readFileSync(path.join(root, "public", "recent-work", videoName));
    const poster = fs.readFileSync(path.join(root, "public", "recent-work", posterName));
    assert.ok(video.length > 500_000 && video.length < 2_000_000, `${videoName} is missing or not web-optimized`);
    assert.equal(video.subarray(4, 8).toString("ascii"), "ftyp", `${videoName} is not an MP4 file`);
    assert.ok(poster.length > 20_000, `${posterName} is unexpectedly small`);
    assert.equal(poster.subarray(0, 4).toString("ascii"), "RIFF", `${posterName} is not WebP`);
    assert.match(home, new RegExp(videoName.replaceAll(".", "\\.")));
    assert.match(home, new RegExp(posterName.replaceAll(".", "\\.")));
  }
  assert.match(home, /<video[\s\S]*muted[\s\S]*playsInline[\s\S]*preload="none"/);

  for (const retired of ["dark-exterior-roofline-detail.webp", "siding-windows-eavestrough-detail.webp"]) {
    assert.doesNotMatch(home, new RegExp(retired.replaceAll(".", "\\.")));
    assert.equal(fs.existsSync(path.join(root, "public", "recent-work", retired)), false);
  }

  const eavestroughPage = read("app/services/seamless-eavestrough/page.tsx");
  assert.match(eavestroughPage, /Gutter Guard Installation/);
  assert.match(eavestroughPage, /gutter-guard-installation-closeup\.mp4/);
  assert.match(eavestroughPage, /gutter-guard-installation-closeup-poster\.webp/);
});

test("site no longer publishes the placeholder per-foot price range", () => {
  assert.doesNotMatch(source, /\$8\s+to\s+\$20/);
});

test("approved GHL Free Estimate Form is implemented once through the shared form component", () => {
  const form = read("components/GhlEstimateForm.tsx");
  const leadForm = read("components/LeadForm.tsx");
  const contactForm = read("app/contact/ContactForm.tsx");

  assert.match(form, /https:\/\/neurodesk\.windsorexteriorpros\.com\/widget\/form\/I72UixqHGUzhnhvkQVSh/);
  assert.match(form, /id="inline-I72UixqHGUzhnhvkQVSh"/);
  assert.match(form, /data-layout="\{'id':'INLINE'\}"/);
  assert.match(form, /data-trigger-type="alwaysShow"/);
  assert.match(form, /data-activation-type="alwaysActivated"/);
  assert.match(form, /data-deactivation-type="neverDeactivate"/);
  assert.match(form, /data-form-name="Free Estimate Form"/);
  assert.match(form, /data-height="1227"/);
  assert.match(form, /title="Free Estimate Form"/);
  assert.match(form, /https:\/\/neurodesk\.windsorexteriorpros\.com\/js\/form_embed\.js/);
  assert.match(form, /strategy="afterInteractive"/);
  assert.match(form, /IntersectionObserver/);
  assert.match(form, /querySelector<HTMLElement>\("chat-widget"\)/);
  assert.match(leadForm, /<GhlEstimateForm/);
  assert.match(contactForm, /<GhlEstimateForm/);
  assert.doesNotMatch(contactForm, /<ContactActions/);
});

test("every quote and estimate navigation CTA uses the canonical form destination", () => {
  for (const file of sourceFiles) {
    const contents = fs.readFileSync(file, "utf8");
    assert.doesNotMatch(contents, /href=["']\/contact["']/, `${path.relative(root, file)} still links to the top of /contact`);
  }

  for (const file of [
    "components/HeroSection.tsx",
    "components/Navbar.tsx",
    "components/Footer.tsx",
    "app/services/roofing/page.tsx",
    "app/service-areas/windsor/page.tsx",
  ]) {
    assert.match(read(file), /\/contact#estimate-form/, `${file} does not use the canonical form destination`);
  }
});

test("CSP narrowly permits the approved form and observed chat runtime hosts", () => {
  const config = read("next.config.ts");
  assert.doesNotMatch(config, /\*\.leadconnectorhq\.com/);
  assert.match(config, /script-src[^;]*https:\/\/neurodesk\.windsorexteriorpros\.com/);
  assert.match(config, /frame-src[^;]*https:\/\/neurodesk\.windsorexteriorpros\.com/);
  assert.match(config, /script-src[^;]*https:\/\/widgets\.leadconnectorhq\.com/);
  assert.match(config, /connect-src[^;]*https:\/\/services\.leadconnectorhq\.com/);
  assert.match(config, /frame-src[^;]*https:\/\/challenges\.cloudflare\.com/);
});

test("privacy policy discloses CRM processing for online estimate requests", () => {
  const privacy = read("app/privacy/page.tsx");
  assert.match(privacy, /GoHighLevel|LeadConnector/);
  assert.match(privacy, /online estimate form/i);
  assert.match(privacy, /consent/i);
});
