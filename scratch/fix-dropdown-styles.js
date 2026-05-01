const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/admin/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const defaultCategories = ['HP', 'ELEKTRONIK', 'FASHION', 'AKSESORIS', 'RUMAH TANGGA', 'KECANTIKAN', 'KESEHATAN', 'HOBI', 'OTOMOTIF'];

// 1. Fix Styling for the Main Select (force black text for options if needed, or consistent background)
const mainSelectStyleOld = /style=\{\{\s+width: '100%',\s+padding: '1rem',[\s\S]+?cursor: 'pointer'\s+\}\}/;
const mainSelectStyleNew = `style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'rgba(0, 0, 0, 0.4)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            color: '#fff',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            appearance: 'none',
                            backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 24 24\\\' fill=\\\'none\\\' stroke=\\\'white\\\' stroke-width=\\\'2\\\' stroke-linecap=\\\'round\\\' stroke-linejoin=\\\'round\\\'%3e%3cpolyline points=\\\'6 9 12 15 18 9\\\'%3e%3c/polyline%3e%3c/svg%3e")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1em'
                        }}`;

// 2. Fix the Edit Modal Dropdown logic and styling
const editModalOld = /`<label style="text-align:left;display:block;margin-top:15px;margin-bottom:5px">Kategori Produk<\/label>` \+[\s\S]+?<\/select>` \+/;
const editModalNew = `\`<label style="text-align:left;display:block;margin-top:15px;margin-bottom:5px">Kategori Produk</label>\` +
                \`<select id="swal-input7" class="swal2-input" style="margin-bottom:15px;width:80%;background:#2d2d2d;color:#fff;border:1px solid #444">
                    <option value="">-- Pilih Kategori --</option>
                    \${Array.from(new Set([...products.map(p => p.category.toUpperCase()), ${defaultCategories.map(c => `'${c}'`).join(', ')}])).sort().map(cat => 
                        \\\`<option value="\${cat}" \${product.category.toUpperCase() === cat ? 'selected' : ''} style="background:#2d2d2d;color:#fff">\${cat}</option>\\\`
                    ).join('')}
                </select>\` +`;

content = content.replace(mainSelectStyleOld, mainSelectStyleNew);
content = content.replace(editModalOld, editModalNew);

// Add a global CSS fix for select options background in globals.css via a script
fs.writeFileSync(path, content, 'utf8');
console.log('Successfully fixed dropdown styling and edit modal logic');
