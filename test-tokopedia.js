const axios = require('axios');
const cheerio = require('cheerio');

async function test() {
    try {
        const res = await axios.get('https://vt.tokopedia.com/t/ZS9djDHjmpwQb-GGgdY/', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
            }
        });
        const $ = cheerio.load(res.data);
        console.log('OG T:', $('meta[property="og:title"]').attr('content'));
        console.log('OG I:', $('meta[property="og:image"]').attr('content'));
        console.log('Title:', $('title').text());

        // Sometimes e-commerce sites use twitter cards
        console.log('TW T:', $('meta[name="twitter:title"]').attr('content'));
        console.log('TW I:', $('meta[name="twitter:image"]').attr('content'));
    } catch (e) {
        console.error("Error fetching:", e.message);
    }
}
test();
