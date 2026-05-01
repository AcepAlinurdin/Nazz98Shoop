const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Regex to find the badge div regardless of indentation
const badgeRegex = /<div style=\{\{\s+position: 'absolute',\s+top: '10px',\s+left: '10px'[\s\S]+?\{product\.order \+ 1\}\s+<\/div>/g;

const badgeAndLabelCode = (match) => {
    return match + `
                                        {product.customLabel && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                zIndex: 10,
                                                background: '#fff',
                                                color: '#ff0050',
                                                padding: '3px 8px',
                                                borderRadius: '6px',
                                                fontSize: '0.6rem',
                                                fontWeight: '800',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                                textTransform: 'uppercase'
                                            }}>
                                                {product.customLabel}
                                            </div>
                                        )}
                                        {product.isPinned && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '40px',
                                                left: '10px',
                                                zIndex: 10,
                                                fontSize: '0.9rem',
                                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                                            }}>
                                                📌
                                            </div>
                                        )}`;
};

const newContent = content.replace(badgeRegex, badgeAndLabelCode);

if (newContent !== content) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully injected Pin and Label features using regex');
} else {
    console.log('Regex did not match anything in page.tsx');
}
