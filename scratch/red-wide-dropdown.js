const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Update the select dropdown to be red and wider
const selectStyleOld = /style=\{\{\s+background: 'rgba\(255, 255, 255, 0\.05\)',[\s\S]+?backgroundSize: '1\.2em'\s+\}\}/;
const selectStyleNew = `style={{
                            background: 'rgba(255, 0, 80, 0.1)',
                            border: '2px solid var(--primary)',
                            backdropFilter: 'blur(10px)',
                            color: '#fff',
                            padding: '14px 24px',
                            borderRadius: '15px',
                            fontSize: '1rem',
                            fontWeight: '700',
                            width: '100%',
                            maxWidth: '500px', // Lebar ditingkatkan
                            cursor: 'pointer',
                            outline: 'none',
                            appearance: 'none',
                            backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 24 24\\\' fill=\\\'none\\\' stroke=\\\'white\\\' stroke-width=\\\'3\\\' stroke-linecap=\\\'round\\\' stroke-linejoin=\\\'round\\\'%3e%3cpolyline points=\\\'6 9 12 15 18 9\\\'%3e%3c/polyline%3e%3c/svg%3e")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1.5rem center',
                            backgroundSize: '1.2em',
                            boxShadow: '0 0 20px rgba(255, 0, 80, 0.2)'
                        }}`;

content = content.replace(selectStyleOld, selectStyleNew);

fs.writeFileSync(path, content, 'utf8');
console.log('Updated category dropdown to be red and wider');
