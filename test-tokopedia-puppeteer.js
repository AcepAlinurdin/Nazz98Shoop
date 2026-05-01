const puppeteer = require('puppeteer');

async function testScrape() {
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();

    // Disguise as a standard browser
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1280, height: 800 });

    try {
        console.log("Navigating to Tokopedia...");
        await page.goto('https://vt.tokopedia.com/t/ZS9djDHjmpwQb-GGgdY/', { waitUntil: 'networkidle2', timeout: 30000 });

        // Wait a moment for any client-side hydration or redirects
        await new Promise(r => setTimeout(r, 3000));

        console.log("Extracting data...");
        const result = await page.evaluate(() => {
            const ogTitle = document.querySelector('meta[property="og:title"]')?.content;
            const ogImage = document.querySelector('meta[property="og:image"]')?.content;
            const title = document.querySelector('title')?.innerText;
            const twTitle = document.querySelector('meta[name="twitter:title"]')?.content;
            const twImage = document.querySelector('meta[name="twitter:image"]')?.content;

            // Try product specific tags if meta fails
            const h1 = document.querySelector('h1')?.innerText;
            const mainImg = document.querySelector('img[alt]')?.src;

            return { ogTitle, ogImage, title, twTitle, twImage, h1, mainImg };
        });

        console.log("Result:", result);
    } catch (e) {
        console.error("Error scraping:", e.message);
    } finally {
        await browser.close();
    }
}

testScrape();
