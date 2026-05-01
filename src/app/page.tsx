"use client"

import { useEffect, useState, useRef } from 'react'

type Product = {
    id: string
    title: string
    image: string
    url: string
    category: string
    createdAt: string
    order: number
    customLabel: string
    isPinned: boolean
    aspectRatio: string
}

// Helper to extract YouTube video ID from various URL formats
function extractYouTubeVideoId(urlOrId: string): string {
    if (!urlOrId) return 'jfKfPfyJRdk'; // default fallback

    // If it's already a video ID (no special characters except maybe underscores)
    if (/^[a-zA-Z0-9_-]{11}$/.test(urlOrId)) {
        return urlOrId;
    }

    // Try to extract from various YouTube URL formats
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
        /(?:v=)([a-zA-Z0-9_-]{11})/,
        /^([a-zA-Z0-9_-]{11})$/
    ];

    for (const pattern of patterns) {
        const match = urlOrId.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }

    // If no match, return the input as-is (might be a valid ID)
    return urlOrId;
}

export default function Home() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [activeCategory, setActiveCategory] = useState('all')
    const [settings, setSettings] = useState({ instagram: '', facebook: '', tiktok: '', youtubeMusic: 'jfKfPfyJRdk' })
    const [isPlaying, setIsPlaying] = useState(false)
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
    const [ytPlayer, setYtPlayer] = useState<any>(null)
    const [language, setLanguage] = useState('id') // id = Indonesian, su = Sundanese, jv = Javanese
    const [showWelcomeCard, setShowWelcomeCard] = useState(true)
    const settingsRef = useRef(settings)
    // Translations for welcome card
    const translations = {
        id: {
            title: "Selamat Datang!",
            description: "Nikmati pengalaman berbelanja dengan musik yang menyenangkan. Tekan tombol di bawah untuk memulai musik atau skip untuk langsung melihat produk.",
            musicButton: "🎵 Aktifkan Musik",
            skipButton: "⏭ Lewati"
        },
        su: {
            title: "Wilujeng Sumping!",
            description: "Nikmati pangalaman balanja kalayan musik anu merenah. Pencét tombol di handap pikeun ngaktipkeun musik atawa skip pikeun langsung ningali produk.",
            musicButton: "🎵 Aktipkeun Musik",
            skipButton: "⏭ Lewat"
        },
        jv: {
            title: "Sugeng Rawuh!",
            description: "Nikmati pangalaman blanja kanthi musik sing nyenengake. Pencet tombol ing ngisor kanggo miwiti musik utawa skip kanggo langsung ndeleng produk.",
            musicButton: "🎵 Aktifna Musik",
            skipButton: "⏭ Lewati"
        }
    }

    // Check localStorage for previously skipped welcome
    useEffect(() => {
        const hasSeenWelcome = localStorage.getItem('welcomeCardSkipped');
        if (hasSeenWelcome === 'true') {
            setShowWelcomeCard(false);
        }
    }, []);

    const handleSkip = () => {
        setShowWelcomeCard(false);
        localStorage.setItem('welcomeCardSkipped', 'true');
    };

    useEffect(() => {
        settingsRef.current = settings
    }, [settings])

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('/api/products')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
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

        // Load YouTube IFrame API
        if (!(window as any).YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        }

        (window as any).onYouTubeIframeAPIReady = () => {
            const player = new (window as any).YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: extractYouTubeVideoId(settingsRef.current.youtubeMusic), // Use admin-configured YouTube video
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    loop: 1,
                    playlist: extractYouTubeVideoId(settingsRef.current.youtubeMusic)
                },
                events: {
                    onReady: (event: any) => {
                        setYtPlayer(event.target);
                        event.target.setVolume(40);
                    },
                    onStateChange: (event: any) => {
                        if (event.data === (window as any).YT.PlayerState.PLAYING) setIsPlaying(true);
                        else setIsPlaying(false);
                    }
                }
            });
        };

        const handleFirstInteraction = () => {
            if ((window as any).YT && (window as any).YT.Player) {
                // If player is already ready
                const player = (window as any).YT.get('youtube-player');
                if (player && typeof player.playVideo === 'function') {
                    player.playVideo();
                    setIsPlaying(true);
                }
            }
            document.removeEventListener('click', handleFirstInteraction);
        };

        document.addEventListener('click', handleFirstInteraction);


        fetchProducts()
        fetchSettings()

        const interval = setInterval(fetchProducts, 10000)
        return () => clearInterval(interval)
    }, [])

    // Update YouTube player when music ID changes
    useEffect(() => {
        if (!ytPlayer) return;
        const videoId = extractYouTubeVideoId(settings.youtubeMusic);
        ytPlayer.loadVideoById(videoId);
        // Keep loop enabled
        ytPlayer.setLoop(true);
    }, [settings.youtubeMusic, ytPlayer])

    const categories = Array.from(new Set(products.map(p => p.category.toUpperCase()))).sort()
    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category.toUpperCase() === activeCategory)

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                }
            })
        }, observerOptions)

        const revealElements = document.querySelectorAll('.reveal')
        revealElements.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [filteredProducts])

    return (
        <>
            <div className="main-header">
                <nav className="nav-header">
                    <div className="logo">Nazz98<span>Shoop</span></div>
                </nav>

                <div className="sticky-nav-container">
                    <div className="social-links-sticky" style={{ position: 'relative', width: '100%', maxWidth: '1200px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', width: '100%' }}>
                            {settings.instagram && (
                                <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-mini instagram">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                            )}
                            {settings.facebook && (
                                <a href={settings.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-mini facebook">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                            )}
                            {settings.tiktok && (
                                <a href={settings.tiktok} target="_blank" rel="noopener noreferrer" className="social-icon-mini tiktok">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                                </a>
                            )}
                        </div>

                        {/* Music Player moved to right side of sticky bar */}
                        <div
                            className="music-player-trigger"
                            onClick={() => {
                                if (!ytPlayer) return
                                if (isPlaying) {
                                    ytPlayer.pauseVideo()
                                    setIsPlaying(false)
                                } else {
                                    ytPlayer.playVideo()
                                    setIsPlaying(true)
                                }
                            }}
                            style={{
                                position: 'absolute',
                                right: '15px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '42px',
                                height: '42px',
                                background: isPlaying ? '#ff0050' : 'rgba(255,255,255,0.05)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: isPlaying ? '0 0 15px rgba(255,0,80,0.3)' : 'none',
                                border: '2px solid rgba(255,255,255,0.8)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {isPlaying ? (
                                <div className="music-waves">
                                    <div className="wave"></div>
                                    <div className="wave"></div>
                                    <div className="wave"></div>
                                </div>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <polygon points="5,3 19,12 5,21"></polygon>
                                </svg>
                            )}
                        </div>
                    </div>

                    <div className="dropdown-sticky-wrapper">
                        <select
                            className="modern-dropdown"
                            value={activeCategory}
                            onChange={(e) => setActiveCategory(e.target.value)}
                            style={{
                                backgroundColor: 'rgba(255, 0, 80, 0.15)',
                                border: '2px solid #ff0050',
                                backdropFilter: 'blur(10px)',
                                color: '#fff',
                                padding: '12px 45px 12px 20px',
                                borderRadius: '15px',
                                fontSize: '1rem',
                                fontWeight: '700',
                                width: '100%',
                                maxWidth: '450px',
                                cursor: 'pointer',
                                outline: 'none',
                                appearance: 'none',
                                boxShadow: '0 0 20px rgba(255, 0, 80, 0.2)'
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
                </div>
            </div>

            {showWelcomeCard && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(5px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999,
                    padding: '1rem'
                }}>
                    <div style={{
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '20px',
                        padding: '2.5rem',
                        maxWidth: '500px',
                        width: '100%',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ marginBottom: '1rem', color: '#fff' }}>{translations[language].title}</h2>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            {translations[language].description}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => {
                                    if (!ytPlayer) return;
                                    if (isPlaying) {
                                        ytPlayer.pauseVideo();
                                        setIsPlaying(false);
                                    } else {
                                        ytPlayer.playVideo();
                                        setIsPlaying(true);
                                    }
                                }}
                                style={{
                                    background: 'linear-gradient(135deg, var(--primary), #ff2b6b)',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '1rem 2rem',
                                    borderRadius: '12px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {translations[language].musicButton}
                            </button>
                            <button
                                onClick={handleSkip}
                                style={{
                                    background: 'transparent',
                                    color: 'var(--text-muted)',
                                    border: '1px solid var(--glass-border)',
                                    padding: '1rem 2rem',
                                    borderRadius: '12px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {translations[language].skipButton}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div id="youtube-player" style={{ display: 'none' }}></div>
            <main className="container">
                {loading && (
                    <div className="loader">
                        <div className="spinner"></div>
                        Memuat produk...
                    </div>
                )}

                {error && (
                    <div style={{ textAlign: 'center', color: '#ff4d4d', padding: '3rem' }}>
                        <h2>{error}</h2>
                    </div>
                )}

                {!loading && !error && products.length === 0 && (
                    <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '3rem' }}>
                        <h2>Belum ada produk!</h2>
                        <p>Admin perlu menambahkan produk melalui panel admin.</p>
                    </div>
                )}

                {!loading && filteredProducts.length > 0 && (
                    <div className="masonry-grid">
                        <div className="masonry-column">
                            {filteredProducts.filter((_, i) => i % 2 === 0).map((product) => {
                                const originalIndex = filteredProducts.indexOf(product);
                                return (
                                    <div
                                        key={product.id}
                                        className={`product-card reveal ${product.isPinned ? "pinned" : ""}`}
                                        onClick={() => window.open(product.url, '_blank')}
                                        style={{ transitionDelay: `${(originalIndex % 4) * 0.1}s` }}
                                    >
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            zIndex: 10,
                                            background: '#ff0050',
                                            color: 'white',
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.7rem',
                                            fontWeight: 'bold',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                                        }}>
                                            {product.order + 1}
                                        </div>
                                        {product.customLabel && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                zIndex: 10,
                                                background: 'rgba(255, 255, 255, 0.98)',
                                                height: '24px',
                                                padding: '0 10px 0 2px',
                                                borderRadius: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                                border: '1px solid rgba(0,0,0,0.05)'
                                            }}>
                                                {product.isPinned && (
                                                    <div style={{
                                                        background: '#ff0050',
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <div className="flame-icon">
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                                                <path d="M12 2C12 2 12 7 9 9C6 11 6 14 6 16C6 19.31 8.69 22 12 22C15.31 22 18 19.31 18 16C18 12 15 9 15 9C15 9 15 5 12 2Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                                <span style={{
                                                    color: '#1a1a1a',
                                                    fontSize: '0.6rem',
                                                    fontWeight: '800',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.3px',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    {product.customLabel}
                                                </span>
                                            </div>
                                        )}
                                        {product.isPinned && !product.customLabel && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                zIndex: 10,
                                                background: '#fff',
                                                padding: '5px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                                            }}>
                                                <div className="flame-icon-solo">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff0050">
                                                        <path d="M12 2C12 2 12 7 9 9C6 11 6 14 6 16C6 19.31 8.69 22 12 22C15.31 22 18 19.31 18 16C18 12 15 9 15 9C15 9 15 5 12 2Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                        <div className="card-image-wrapper" style={{ paddingTop: product.aspectRatio === '16:9' ? '56.25%' : '100%' }}>
                                            <img
                                                src={product.image || 'https://via.placeholder.com/300x400?text=No+Image'}
                                                alt={product.title}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="card-content">
                                            <span className="category-badge">{product.category}</span>
                                            <h3 className="card-title">{product.title}</h3>
                                            <button className="btn-buy">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                                Beli
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="masonry-column">
                            {filteredProducts.filter((_, i) => i % 2 !== 0).map((product) => {
                                const originalIndex = filteredProducts.indexOf(product);
                                return (
                                    <div
                                        key={product.id}
                                        className={`product-card reveal ${product.isPinned ? "pinned" : ""}`}
                                        onClick={() => window.open(product.url, '_blank')}
                                        style={{ transitionDelay: `${(originalIndex % 4) * 0.1}s` }}
                                    >
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            zIndex: 10,
                                            background: '#ff0050',
                                            color: 'white',
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.7rem',
                                            fontWeight: 'bold',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                                        }}>
                                            {product.order + 1}
                                        </div>
                                        {product.customLabel && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                zIndex: 10,
                                                background: 'rgba(255, 255, 255, 0.98)',
                                                height: '24px',
                                                padding: '0 10px 0 2px',
                                                borderRadius: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                                border: '1px solid rgba(0,0,0,0.05)'
                                            }}>
                                                {product.isPinned && (
                                                    <div style={{
                                                        background: '#ff0050',
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <div className="flame-icon">
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                                                <path d="M12 2C12 2 12 7 9 9C6 11 6 14 6 16C6 19.31 8.69 22 12 22C15.31 22 18 19.31 18 16C18 12 15 9 15 9C15 9 15 5 12 2Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                                <span style={{
                                                    color: '#1a1a1a',
                                                    fontSize: '0.6rem',
                                                    fontWeight: '800',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.3px',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    {product.customLabel}
                                                </span>
                                            </div>
                                        )}
                                        {product.isPinned && !product.customLabel && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                zIndex: 10,
                                                background: '#fff',
                                                padding: '5px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                                            }}>
                                                <div className="flame-icon-solo">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff0050">
                                                        <path d="M12 2C12 2 12 7 9 9C6 11 6 14 6 16C6 19.31 8.69 22 12 22C15.31 22 18 19.31 18 16C18 12 15 9 15 9C15 9 15 5 12 2Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                        <div className="card-image-wrapper" style={{ paddingTop: product.aspectRatio === '16:9' ? '56.25%' : '100%' }}>
                                            <img
                                                src={product.image || 'https://via.placeholder.com/300x400?text=No+Image'}
                                                alt={product.title}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="card-content">
                                            <span className="category-badge">{product.category}</span>
                                            <h3 className="card-title">{product.title}</h3>
                                            <button className="btn-buy">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                                Beli
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}
