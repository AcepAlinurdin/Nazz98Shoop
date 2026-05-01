const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// The problematic duplicate block pattern
const duplicatePattern = / \s+\{product\.customLabel && \(\s+<span style=\{\{\s+color: '#1a1a1a',\s+fontSize: '0\.65rem'[\s\S]+?<\/span>\s+\)\}\s+<\/div>\s+\)\}/g;

const newContent = content.replace(duplicatePattern, '');

if (newContent !== content) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully cleaned up duplicated code in page.tsx');
} else {
    console.log('Duplicate pattern not found or already cleaned');
}
