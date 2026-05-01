const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Update the useEffect that fetches products to include a polling interval
const fetchEffectOld = /useEffect\(\(\) => \{\s+async function fetchProducts\(\) \{[\s\S]+?\}\s+fetchProducts\(\)\s+fetchSettings\(\)\s+\}, \[\]\)/;

const fetchEffectNew = `useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('/api/products')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                // Only update state if data actually changed to prevent unnecessary re-renders
                setProducts(prev => {
                    if (JSON.stringify(prev) !== JSON.stringify(data)) {
                        return data
                    }
                    return prev
                })
            } catch (err) {
                console.error('Failed to load products.')
            } finally {
                setLoading(false)
            }
        }

        async function fetchSettings() {
            try {
                const res = await fetch('/api/settings')
                if (res.ok) {
                    const data = await res.json()
                    setSettings(data)
                }
            } catch (err) {
                console.error('Failed to load settings')
            }
        }

        // Initial fetch
        fetchProducts()
        fetchSettings()

        // Set up polling interval for real-time updates (every 10 seconds)
        const interval = setInterval(fetchProducts, 10000)

        return () => clearInterval(interval)
    }, [])`;

content = content.replace(fetchEffectOld, fetchEffectNew);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully implemented real-time polling in page.tsx');
