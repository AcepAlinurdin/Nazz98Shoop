const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// The specific broken fragment that is causing the error again
const brokenFragment = /\s+<span style=\{\{\s+color: '#1a1a1a',\s+fontSize: '0\.6rem'[\s\S]+?<\/span>\s+<\/div>\s+\)\}/g;

const newContent = content.replace(brokenFragment, '');

if (newContent !== content) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully removed the broken code fragments again');
} else {
    console.log('Broken fragment not found');
}
