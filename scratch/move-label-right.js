const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Regex to find the customLabel block which is currently on the left (left: 38px)
const leftLabelRegex = /\{product\.customLabel && \([\s\S]+?left: '38px'[\s\S]+?<\/div>\s+\)\}/g;

const rightLabelCode = `
                                        {product.customLabel && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                zIndex: 10,
                                                background: 'rgba(255, 255, 255, 0.98)',
                                                height: '24px',
                                                padding: '0 10px 0 2px',
                                                borderRadius: '12px',
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
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                                                            <path d="M16 12V4l1 1V2H7v2l1-1v8c0 2.21-1.79 4-4 4v2h7v5l1 1 1-1v-5h7v-2c-2.21 0-4-1.79-4-4z" />
                                                        </svg>
                                                    </div>
                                                )}
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
                                            </div>
                                        )}`;

const newContent = content.replace(leftLabelRegex, rightLabelCode.trim());

if (newContent !== content) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully moved custom label to the right side');
} else {
    console.log('Left-aligned label block not found');
}
