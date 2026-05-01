const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Advanced Regex to catch both possible blocks (with and without label)
const dualBlockRegex = /\{product\.customLabel && \([\s\S]+?<\/div>\s+\)\}\s+\{product\.isPinned && !product\.customLabel && \([\s\S]+?<\/div>\s+\)\}/g;

const premiumBadgeCode = `
                                        {(product.customLabel || product.isPinned) && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                zIndex: 10,
                                                background: 'rgba(255, 255, 255, 0.98)',
                                                padding: '3px 10px 3px 4px',
                                                borderRadius: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
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
                                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                                                            <path d="M16 3c-1.1 0-2 .9-2 2v3.17c-2.12.83-3.61 2.82-3.83 5.16H5.17l-.83.83 1.41 1.41.83-.83h5.17c.22 2.34 1.71 4.33 3.83 5.16V22h2v-3.17c2.12-.83 3.61-2.82 3.83-5.16h5.17l.83-.83-1.41-1.41-.83.83H18.17c-.22-2.34-1.71-4.33-3.83-5.16V5c0-1.1-.9-2-2-2z" />
                                                        </svg>
                                                    </div>
                                                )}
                                                {product.customLabel && (
                                                    <span style={{
                                                        color: '#1a1a1a',
                                                        fontSize: '0.65rem',
                                                        fontWeight: '800',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.3px',
                                                        paddingRight: '2px'
                                                    }}>
                                                        {product.customLabel}
                                                    </span>
                                                )}
                                            </div>
                                        )}`;

const newContent = content.replace(dualBlockRegex, premiumBadgeCode.trim());

if (newContent !== content) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully updated to Premium Pill Badge v2');
} else {
    console.log('Regex did not match the latest block structure');
}
