const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// The replacement logic for Column 1 and Column 2 item rendering
const badgeAndLabelCode = `
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            zIndex: 10,
                                            background: 'var(--primary)',
                                            color: 'white',
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.7rem',
                                            fontWeight: 'bold',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                                        }}>
                                            {product.order + 1}
                                        </div>
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

// Find the target div and replace it (needs to be done for both columns)
// This is a bit tricky with simple string replace if they are identical.
// We'll replace all occurrences of the rank badge div.

const targetDiv = `<div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            zIndex: 10,
                                            background: 'var(--primary)',
                                            color: 'white',
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.7rem',
                                            fontWeight: 'bold',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                                        }}>
                                            {product.order + 1}
                                        </div>`;

// Use split and join to replace all occurrences
const parts = content.split(targetDiv);
if (parts.length > 1) {
    const newContent = parts.join(badgeAndLabelCode.trim());
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully added Pin and Custom Label features to page.tsx');
} else {
    console.log('Target badge div not found in page.tsx');
}
