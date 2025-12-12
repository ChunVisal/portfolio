import puppeteer from "puppeteer";

async function exportHD() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // FULL DESKTOP MODE — using your real layout width
  const LAYOUT_WIDTH = 1280; // because max-w-5xl = 1280px

  const client = await page.createCDPSession();

  await client.send("Emulation.setDeviceMetricsOverride", {
    width: LAYOUT_WIDTH,
    height: 2000,            // temporary, we auto-detect later
    deviceScaleFactor: 2,
    mobile: false,
  });

  await page.goto("http://localhost:5173/mycv", {
    waitUntil: "networkidle0",
  });

  // give time for fonts/layout
  await new Promise(res => setTimeout(res, 1000));

  // measure full height
  const fullHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log("Height:", fullHeight);

  // update height to real height
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: LAYOUT_WIDTH,
    height: fullHeight,
    deviceScaleFactor: 2,
    mobile: false,
  });

  // take screenshot
  await page.screenshot({
    path: "cv_hd_desktop.png",
    fullPage: false, // we already set exact height
  });

  await browser.close();
  console.log("🔥 PERFECT DESKTOP HD EXPORT DONE!");
}

exportHD();
