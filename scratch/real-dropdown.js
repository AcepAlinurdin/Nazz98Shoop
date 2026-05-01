const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/admin/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const defaultCategories = ['HP', 'ELEKTRONIK', 'FASHION', 'AKSESORIS', 'RUMAH TANGGA', 'KECANTIKAN', 'KESEHATAN', 'HOBI', 'OTOMOTIF'];

// 1. Update the main form category input to a Select
const mainFormOld = /<div className="form-group">\s+<label>Kategori<\/label>[\s\S]+?<\/datalist>\s+<\/div>/;
const mainFormNew = `<div className="form-group">
                    <label>Kategori</label>
                    <select
                        value={category}
                        onChange={(e) => {
                            if (e.target.value === 'NEW') {
                                const newCat = prompt('Masukkan Nama Kategori Baru:');
                                if (newCat) setCategory(newCat.toUpperCase());
                            } else {
                                setCategory(e.target.value);
                            }
                        }}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'rgba(0, 0, 0, 0.2)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '10px',
                            color: '#fff',
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}
                    >
                        <option value="">-- Pilih Kategori --</option>
                        {Array.from(new Set([...products.map(p => p.category.toUpperCase()), ${defaultCategories.map(c => `'${c}'`).join(', ')}])).sort().map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                        <option value="NEW" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>+ TAMBAH KATEGORI BARU...</option>
                    </select>
                </div>`;

// 2. Update the edit modal category input to a Select (simplified for SWAL)
const editModalOld = /`<label style="text-align:left;display:block;margin-top:15px;margin-bottom:5px">Kategori Produk<\/label>` \+[\s\S]+?`<datalist id="swal-category-list">[\s\S]+?<\/datalist>` \+/;
const editModalNew = `\`<label style="text-align:left;display:block;margin-top:15px;margin-bottom:5px">Kategori Produk</label>\` +
                \`<select id="swal-input7" class="swal2-input" style="margin-bottom:15px;width:80%">
                    \${Array.from(new Set([...products.map(p => p.category.toUpperCase()), ${defaultCategories.map(c => `'${c}'`).join(', ')}])).sort().map(cat => 
                        \\\`<option value="\${cat}" \${product.category.toUpperCase() === cat ? 'selected' : ''}>\${cat}</option>\\\`
                    ).join('')}
                </select>\` +`;

content = content.replace(mainFormOld, mainFormNew);
content = content.replace(editModalOld, editModalNew);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully replaced category input with a real Select dropdown');
