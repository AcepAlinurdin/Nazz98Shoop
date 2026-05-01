const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Regex to find the duplicate/fallback pin block that is positioned on the right
const fallbackPinRegex = /\{product\.isPinned && !product\.customLabel && \([\s\S]+?right: '10px'[\s\S]+?<\/div>\s+\)\}/g;

// Remove the fallback block
const newContent = content.replace(fallbackPinRegex, '');

if (newContent !== content) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully removed the right-aligned fallback pin');
} else {
    console.log('Right-aligned fallback pin not found or already removed');
}
