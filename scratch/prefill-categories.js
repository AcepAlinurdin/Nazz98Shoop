const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/admin/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const defaultCategories = ['HP', 'ELEKTRONIK', 'FASHION', 'AKSESORIS', 'RUMAH TANGGA', 'KECANTIKAN', 'KESEHATAN', 'HOBI', 'OTOMOTIF'];

// 1. Update the main datalist in the JSX
const mainDatalistOld = /<datalist id="category-list">[\s\S]+?<\/datalist>/;
const mainDatalistNew = `<datalist id="category-list">
                        {Array.from(new Set([...products.map(p => p.category.toUpperCase()), ${defaultCategories.map(c => `'${c}'`).join(', ')}])).sort().map(cat => (
                            <option key={cat} value={cat} />
                        ))}
                    </datalist>`;

// 2. Update the edit modal datalist in the SweetAlert
const editModalDatalistOld = /`<datalist id="swal-category-list">\${Array\.from\(new Set\(products\.map\(p => p\.category\)\)\)\.sort\(\)\.map\(cat => `<option value="\${cat}">`\)\.join\(''\)}<\/datalist>`/;
const editModalDatalistNew = `\`<datalist id="swal-category-list">\${Array.from(new Set([...products.map(p => p.category.toUpperCase()), ${defaultCategories.map(c => `'${c}'`).join(', ')}])).sort().map(cat => \\\`<option value="\${cat}">\\\`).join('')}</datalist>\``;

content = content.replace(mainDatalistOld, mainDatalistNew);
content = content.replace(editModalDatalistOld, editModalDatalistNew);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully pre-filled category dropdown with common choices');
