import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Tooltip', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true
    });
    page = await browser.newPage();
  });

  test('should validate form input', async () => {
    await page.goto(baseUrl);
    await page.click('.btn');

    let tooltipElement = await page.$('.tooltip');
    expect(tooltipElement).not.toBeNull();
  });

  afterAll(async () => {
    await browser.close();
  });
});
