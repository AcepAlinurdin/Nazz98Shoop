const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Regex to find the whole badge block we just added
const premiumBadgeRegex = /\{\(product\.customLabel \|\| product\.isPinned\) && \([\s\S]+?<\/div>\s+\)\}/g;

const alignedBadgeCode = `
                                        {(product.customLabel || product.isPinned) && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                left: '38px', /* Geser ke kanan setelah nomor (10px + 24px + 4px gap) */
                                                zIndex: 10,
                                                background: 'rgba(255, 255, 255, 0.95)',
                                                height: '24px', /* Samakan tinggi dengan lingkaran nomor */
                                                padding: '0 10px 0 2px',
                                                borderRadius: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                                border: '1px solid rgba(0,0,0,0.05)'
                                            }}>
                                                {product.isPinned && (
                                                    <div style={{
                                                        background: '#ff0050',
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                                                            <path d="M16 3c-1.1 0-2 .9-2 2v3.17c-2.12.83-3.61 2.82-3.83 5.16H5.17l-.83.83 1.41 1.41.83-.83h5.17c.22 2.34 1.71 4.33 3.83 5.16V22h2v-3.17c2.12-.83 3.61-2.82 3.83-5.16h5.17l.83-.83-1.41-1.41-.83.83H18.17c-.22-2.34-1.71-4.33-3.83-5.16V5c0-1.1-.9-2-2-2z" />
                                                        </svg>
                                                    </div>
                                                )}
                                                {product.customLabel && (
                                                    <span style={{
                                                        color: '#1a1a1a',
                                                        fontSize: '0.6rem',
                                                        fontWeight: '800',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.3px',
                                                        whiteSpace: 'nowrap'
                                                    }}>
                                                        {product.customLabel}
                                                    </span>
                                                )}
                                            </div>
                                        )}`;

const newContent = content.replace(premiumBadgeRegex, alignedBadgeCode.trim());

if (newContent !== content) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully aligned status badge with rank number');
} else {
    console.log('Regex did not match the premium badge block');
}
