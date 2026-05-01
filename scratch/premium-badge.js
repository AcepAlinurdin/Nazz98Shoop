const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Regex to find the whole label and pin block we just added
const fullBlockRegex = /\{product\.customLabel && \([\s\S]+?<\/div>\s+\)\}\s+\{product\.isPinned && \([\s\S]+?<\/div>\s+\)\}/g;

const premiumBadgeCode = `
                                        {(product.customLabel || product.isPinned) && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                zIndex: 10,
                                                background: 'rgba(255, 255, 255, 0.95)',
                                                padding: '2px 10px 2px 4px',
                                                borderRadius: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                                backdropFilter: 'blur(5px)'
                                            }}>
                                                {product.isPinned && (
                                                    <div style={{
                                                        background: '#ff0050',
                                                        width: '22px',
                                                        height: '22px',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        boxShadow: '0 2px 5px rgba(255, 0, 80, 0.3)'
                                                    }}>
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                                            <path d="M16 3c-1.1 0-2 .9-2 2v3.17c-2.12.83-3.61 2.82-3.83 5.16H5.17l-.83.83 1.41 1.41.83-.83h5.17c.22 2.34 1.71 4.33 3.83 5.16V22h2v-3.17c2.12-.83 3.61-2.82 3.83-5.16h5.17l.83-.83-1.41-1.41-.83.83H18.17c-.22-2.34-1.71-4.33-3.83-5.16V5c0-1.1-.9-2-2-2z" />
                                                        </svg>
                                                    </div>
                                                )}
                                                {product.customLabel && (
                                                    <span style={{
                                                        color: '#333',
                                                        fontSize: '0.65rem',
                                                        fontWeight: '800',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.5px'
                                                    }}>
                                                        {product.customLabel}
                                                    </span>
                                                )}
                                            </div>
                                        )}`;

const newContent = content.replace(fullBlockRegex, premiumBadgeCode.trim());

if (newContent !== content) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully updated to Premium Pill Badge using regex');
} else {
    console.log('Regex did not match the Pin/Label block');
}
