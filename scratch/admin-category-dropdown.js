const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/admin/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Update the category logic at the top (ensure we have unique categories)
// No changes needed to state, products is already available.

// 2. Update the main add product form
const addCategoryInputOld = /<label>Kategori<\/label>[\s\S]+?<input[\s\S]+?placeholder="Contoh: Fashion, Elektronik"[\s\S]+?value=\{category\}[\s\S]+?onChange=\{\(e\) => setCategory\(e\.target\.value\)\}\s+\/>/;
const addCategoryInputNew = `<label>Kategori</label>
                    <input
                        type="text"
                        list="category-list"
                        placeholder="Pilih atau ketik kategori"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <datalist id="category-list">
                        {Array.from(new Set(products.map(p => p.category))).sort().map(cat => (
                            <option key={cat} value={cat} />
                        ))}
                    </datalist>`;

// 3. Update the editProduct SweetAlert modal
const editModalOld = /`<label style="text-align:left;display:block;margin-top:15px;margin-bottom:5px">Label Kustom \(Contoh: Stok Menipis\)<\/label>` \+[\s\S]+?`<input id="swal-input6" class="swal2-input" value="\$\{product\.customLabel \|\| ''\}" placeholder="Kosongkan jika tidak perlu" style="width:80%">`/;
const editModalNew = `\`<label style="text-align:left;display:block;margin-top:15px;margin-bottom:5px">Kategori Produk</label>\` +
                \`<input id="swal-input7" class="swal2-input" list="swal-category-list" value="\${product.category}" style="margin-bottom:15px;width:80%">\` +
                \`<datalist id="swal-category-list">\${Array.from(new Set(products.map(p => p.category))).sort().map(cat => \\\`<option value="\${cat}">\\\`).join('')}</datalist>\` +
                \`<label style="text-align:left;display:block;margin-bottom:5px">Label Kustom (Contoh: Stok Menipis)</label>\` +
                \`<input id="swal-input6" class="swal2-input" value="\${product.customLabel || ''}" placeholder="Kosongkan jika tidak perlu" style="width:80%">\``;

// 4. Update the preConfirm in editProduct to include the new input
const preConfirmOld = /customLabel: \(document\.getElementById\('swal-input6'\) as HTMLInputElement\)\.value/;
const preConfirmNew = `category: (document.getElementById('swal-input7') as HTMLInputElement).value,
                    customLabel: (document.getElementById('swal-input6') as HTMLInputElement).value`;

content = content.replace(addCategoryInputOld, addCategoryInputNew);
content = content.replace(editModalOld, editModalNew);
content = content.replace(preConfirmOld, preConfirmNew);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully added category dropdown to admin panel');
