// portfolio/frontend/test.js
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({
    headless: false // show browser
  });

  for (let i = 1; i <= 5; i++) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:5173'); // or any test page
    console.log(`Opened tab ${i}`);
  }
})();
