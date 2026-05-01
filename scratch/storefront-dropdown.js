const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the filter pills with a modern select dropdown
const filterSectionOld = /<div className="category-scroll-container">[\s\S]+?<\/div>\s+<\/div>/;
const filterSectionNew = `<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', padding: '0 20px' }}>
                    <select
                        className="modern-dropdown"
                        value={activeCategory}
                        onChange={(e) => setActiveCategory(e.target.value)}
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--glass-border)',
                            backdropFilter: 'blur(10px)',
                            color: '#fff',
                            padding: '12px 20px',
                            borderRadius: '12px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            width: '100%',
                            maxWidth: '300px',
                            cursor: 'pointer',
                            outline: 'none',
                            appearance: 'none',
                            backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 24 24\\\' fill=\\\'none\\\' stroke=\\\'white\\\' stroke-width=\\\'2\\\' stroke-linecap=\\\'round\\\' stroke-linejoin=\\\'round\\\'%3e%3cpolyline points=\\\'6 9 12 15 18 9\\\'%3e%3c/polyline%3e%3c/svg%3e")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1.2em'
                        }}
                    >
                        <option value="all" style={{ background: '#1a1a1a' }}>Semua Kategori</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat} style={{ background: '#1a1a1a' }}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>`;

content = content.replace(filterSectionOld, filterSectionNew);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully replaced category buttons with a modern dropdown');
