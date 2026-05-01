const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Update the sticky dropdown to be larger
const dropdownStyleOld = /fontSize: '0\.85rem',[\s\S]+?padding: '10px 40px 10px 15px'/;
const dropdownStyleNew = `fontSize: '1rem',
                            fontWeight: '700',
                            width: '100%',
                            maxWidth: '450px',
                            cursor: 'pointer',
                            outline: 'none',
                            appearance: 'none',
                            backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 24 24\\\' fill=\\\'none\\\' stroke=\\\'white\\\' stroke-width=\\\'3\\\' stroke-linecap=\\\'round\\\' stroke-linejoin=\\\'round\\\'%3e%3cpolyline points=\\\'6 9 12 15 18 9\\\'%3e%3c/polyline%3e%3c/svg%3e")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1.2rem center',
                            backgroundSize: '1.2em',
                            boxShadow: '0 0 15px rgba(255, 0, 80, 0.15)',
                            padding: '12px 45px 12px 20px'`;

content = content.replace(dropdownStyleOld, dropdownStyleNew);

fs.writeFileSync(path, content, 'utf8');
console.log('Enlarged the category dropdown on storefront');
