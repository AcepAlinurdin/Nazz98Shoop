const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Move filters from nav to hero and deduplicate categories logic
const navRegex = /<nav className="nav-header">[\s\S]+?<\/nav>/;
const newNav = `<nav className="nav-header">
                <div className="logo">Nazz98<span>Shoop</span></div>
            </nav>`;

const heroRegex = /<\/header>/;
const filterSection = `
                <div className="category-scroll-container">
                    <div className="filters-modern">
                        <button
                            className={\`filter-pill \${activeCategory === 'all' ? 'active' : ''}\`}
                            onClick={() => setActiveCategory('all')}
                        >
                            Semua
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={\`filter-pill \${activeCategory === cat ? 'active' : ''}\`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </header>`;

// 2. Fix the category deduplication logic at the top
const categoryLogicOld = /const categories = Array\.from\(new Set\(products\.map\(p => p\.category\)\)\)/;
const categoryLogicNew = `const categories = Array.from(new Set(products.map(p => p.category.toUpperCase()))).sort()`;

// 3. Fix the filter matching to be case-insensitive
const filterMatchOld = /products\.filter\(p => p\.category === activeCategory\)/;
const filterMatchNew = `products.filter(p => p.category.toUpperCase() === activeCategory)`;

content = content.replace(navRegex, newNav);
content = content.replace(heroRegex, filterSection);
content = content.replace(categoryLogicOld, categoryLogicNew);
content = content.replace(filterMatchOld, filterMatchNew);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully moved filters to hero and deduplicated categories');
