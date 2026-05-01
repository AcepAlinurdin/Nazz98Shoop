const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add conditional 'pinned' class to product cards
const cardClassOld = /className="product-card reveal"/g;
const cardClassNew = 'className={`product-card reveal ${product.isPinned ? "pinned" : ""}`}';

content = content.replace(cardClassOld, cardClassNew);

fs.writeFileSync(path, content, 'utf8');
console.log('Added pinned class to product cards in page.tsx');
