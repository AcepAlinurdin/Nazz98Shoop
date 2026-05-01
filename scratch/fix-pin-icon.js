const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Regex to find the whole label and pin block
const fullBlockRegex = /\{product\.customLabel && \([\s\S]+?<\/div>\s+\)\}\s+\{product\.isPinned && \([\s\S]+?<\/div>\s+\)\}/g;

const newBlockCode = `
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
                                                fontSize: '0.65rem',
                                                fontWeight: '800',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                                textTransform: 'uppercase',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '4px'
                                            }}>
                                                {product.isPinned && (
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                                                        <path d="M16 3c-1.1 0-2 .9-2 2v3.17c-2.12.83-3.61 2.82-3.83 5.16H5.17l-.83.83 1.41 1.41.83-.83h5.17c.22 2.34 1.71 4.33 3.83 5.16V22h2v-3.17c2.12-.83 3.61-2.82 3.83-5.16h5.17l.83-.83-1.41-1.41-.83.83H18.17c-.22-2.34-1.71-4.33-3.83-5.16V5c0-1.1-.9-2-2-2z" />
                                                    </svg>
                                                )}
                                                {product.customLabel}
                                            </div>
                                        )}
                                        {product.isPinned && !product.customLabel && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                zIndex: 10,
                                                background: '#fff',
                                                padding: '5px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                                            }}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff0050">
                                                    <path d="M16 3c-1.1 0-2 .9-2 2v3.17c-2.12.83-3.61 2.82-3.83 5.16H5.17l-.83.83 1.41 1.41.83-.83h5.17c.22 2.34 1.71 4.33 3.83 5.16V22h2v-3.17c2.12-.83 3.61-2.82 3.83-5.16h5.17l.83-.83-1.41-1.41-.83.83H18.17c-.22-2.34-1.71-4.33-3.83-5.16V5c0-1.1-.9-2-2-2z" />
                                                </svg>
                                            </div>
                                        )}`;

const newContent = content.replace(fullBlockRegex, newBlockCode.trim());

if (newContent !== content) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully updated Pin icon to SVG using regex');
} else {
    console.log('Regex did not match the Pin/Label block');
}
