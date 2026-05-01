import { NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

export async function POST(req: Request) {
    try {
        const { url } = await req.json()

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 })
        }

        console.log(`Scraping URL: ${url}`);

        // Use a Social Media Crawler User-Agent to bypass most bot detections and get OG tags
        const response = await fetch(url, {
            redirect: 'follow',
            headers: {
                'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            }
        });

        const finalUrl = response.url;
        const html = await response.text();
        const $ = cheerio.load(html)

        // 1. E-Commerce Fast-Path: Tokopedia & TikTok Shop
        try {
            const urlObj = new URL(finalUrl);
            const ogInfoStr = urlObj.searchParams.get('og_info');
            if (ogInfoStr) {
                const ogInfo = JSON.parse(ogInfoStr);
                if (ogInfo.title && ogInfo.image) {
                    return NextResponse.json({ title: ogInfo.title, image: ogInfo.image, url });
                }
            }
        } catch (e) {}

        // 2. Comprehensive Metadata Extraction
        let title = 
            $('meta[property="og:title"]').attr('content') || 
            $('meta[name="twitter:title"]').attr('content') || 
            $('title').text() ||
            $('h1').first().text();

        let image = 
            $('meta[property="og:image"]').attr('content') || 
            $('meta[name="twitter:image"]').attr('content') ||
            $('link[rel="image_src"]').attr('href') ||
            $('img').first().attr('src');

        // Clean up title
        if (title) {
            title = title.split('|')[0].split(' - ')[0].split(' – ')[0].trim();
        }

        // Ensure image URL is absolute
        if (image && !image.startsWith('http')) {
            try {
                const base = new URL(finalUrl);
                image = new URL(image, base.origin).href;
            } catch (e) {}
        }

        if (!title && !image) {
            console.log("Extraction failed. HTML sample:", html.substring(0, 500));
            return NextResponse.json({ error: 'Could not extract data. Shopee might be blocking the request.' }, { status: 404 })
        }

        console.log(`Successfully scraped: ${title}`);
        return NextResponse.json({ title: title || 'Produk Shopee', image, url })
    } catch (err: any) {
        console.error('Failed to scrape:', err.message)
        return NextResponse.json({ error: `Failed to fetch metadata: ${err.message}` }, { status: 500 })
    }
}
