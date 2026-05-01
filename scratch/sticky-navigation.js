const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove the H1 title
content = content.replace(/<h1>Rekomendasi Produk Pilihan<\/h1>/, '');

// 2. Wrap social links and dropdown in a sticky container
const heroOldRegex = /<header className="hero">([\s\S]+?)<\/header>/;
const stickySection = `<div className="sticky-nav-container">
                <div className="social-links-sticky">
                    {settings.instagram && (
                        <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-mini instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    )}
                    {settings.facebook && (
                        <a href={settings.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-mini facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                    )}
                    {settings.tiktok && (
                        <a href={settings.tiktok} target="_blank" rel="noopener noreferrer" className="social-icon-mini tiktok">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                        </a>
                    )}
                </div>

                <div className="dropdown-sticky-wrapper">
                    <select
                        className="modern-dropdown"
                        value={activeCategory}
                        onChange={(e) => setActiveCategory(e.target.value)}
                        style={{
                            backgroundColor: 'rgba(255, 0, 80, 0.1)',
                            border: '2px solid var(--primary)',
                            backdropFilter: 'blur(10px)',
                            color: '#fff',
                            padding: '10px 40px 10px 15px',
                            borderRadius: '12px',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            width: '100%',
                            maxWidth: '400px',
                            cursor: 'pointer',
                            outline: 'none',
                            appearance: 'none',
                            backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 24 24\\\' fill=\\\'none\\\' stroke=\\\'white\\\' stroke-width=\\\'3\\\' stroke-linecap=\\\'round\\\' stroke-linejoin=\\\'round\\\'%3e%3cpolyline points=\\\'6 9 12 15 18 9\\\'%3e%3c/polyline%3e%3c/svg%3e")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1em',
                            boxShadow: '0 0 15px rgba(255, 0, 80, 0.15)'
                        }}
                    >
                        <option value="all" style={{ background: '#1a1a1a' }}>Semua Kategori</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat} style={{ background: '#1a1a1a' }}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
            </div>`;

// Replace the whole hero/header with the new sticky container
content = content.replace(heroOldRegex, stickySection);

fs.writeFileSync(path, content, 'utf8');
console.log('Removed title and implemented sticky navigation');
