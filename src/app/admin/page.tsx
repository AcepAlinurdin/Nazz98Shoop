"use client"

import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

// Theme custom for SweetAlert2
const swalCustom = Swal.mixin({
    customClass: {
        popup: 'glass-panel',
        title: 'swal-title',
        confirmButton: 'btn-primary',
        cancelButton: 'btn-secondary'
    },
    background: '#1a1d21',
    color: '#fff',
    buttonsStyling: true,
    confirmButtonColor: '#ff0050',
    cancelButtonColor: 'rgba(255,255,255,0.1)'
});

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [authError, setAuthError] = useState('')

    const [url, setUrl] = useState('')
    const [category, setCategory] = useState('')
    const [aspectRatio, setAspectRatio] = useState('1:1')
    const [loadingText, setLoadingText] = useState('')
    const [message, setMessage] = useState({ text: '', type: '' })
    const [previewData, setPreviewData] = useState<{ title: string, image: string, url: string } | null>(null)
    const [products, setProducts] = useState<any[]>([])

    const [socials, setSocials] = useState({ instagram: '', facebook: '', tiktok: '', youtubeMusic: '' })
    const [isCheckingAuth, setIsCheckingAuth] = useState(true)

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = async () => {
        try {
            const res = await fetch('/api/admin/check-auth')
            if (res.ok) {
                setIsAuthenticated(true)
                loadProducts()
                loadSettings()
            }
        } catch (err) {
            console.error('Auth check failed')
        } finally {
            setIsCheckingAuth(false)
        }
    }

    const handleLogout = async () => {
        try {
            await fetch('/api/admin/logout', { method: 'POST' })
            setIsAuthenticated(false)
            setProducts([])
        } catch (err) {
            console.error('Logout failed')
        }
    }

    const loadSettings = async () => {
        try {
            const res = await fetch('/api/settings')
            const data = await res.json()
            if (res.ok) setSocials({
                instagram: data.instagram,
                facebook: data.facebook,
                tiktok: data.tiktok,
                youtubeMusic: data.youtubeMusic || ''
            })
        } catch (err) {
            console.error('Failed to load settings')
        }
    }

    const saveSettings = async () => {
        try {
            const res = await fetch('/api/settings', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(socials)
            })
            if (res.ok) {
                swalCustom.fire('Berhasil!', 'Profil media sosial telah diperbarui.', 'success')
            }
        } catch (err) {
            swalCustom.fire('Error!', 'Gagal menyimpan profil.', 'error')
        }
    }

    const loadProducts = async () => {
        try {
            const res = await fetch('/api/products?all=true')
            const data = await res.json()
            if (res.ok) setProducts(data)
        } catch (err) {
            console.error('Failed to load products')
        }
    }

    const moveProduct = async (index: number, direction: 'up' | 'down') => {
        const targetIndex = direction === 'up' ? index - 1 : index + 1
        if (targetIndex < 0 || targetIndex >= products.length) return

        const currentProduct = products[index]
        const targetProduct = products[targetIndex]

        try {
            await Promise.all([
                fetch('/api/products', {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: currentProduct.id, order: targetProduct.order })
                }),
                fetch('/api/products', {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: targetProduct.id, order: currentProduct.order })
                })
            ])
            loadProducts()
        } catch (err) {
            swalCustom.fire('Error!', 'Gagal memindahkan posisi produk.', 'error')
        }
    }

    const toggleVisibility = async (id: string, currentStatus: boolean) => {
        try {
            const res = await fetch('/api/products', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, isVisible: !currentStatus })
            })
            if (res.ok) {
                loadProducts()
            }
        } catch (err) {
            swalCustom.fire('Error!', 'Gagal mengubah status visibilitas.', 'error')
        }
    }

    const handleLogin = async () => {
        setAuthError('')
        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            const data = await res.json()
            if (res.ok) {
                setIsAuthenticated(true)
                loadProducts()
                loadSettings()
            } else {
                setAuthError(data.error || 'Login failed')
            }
        } catch (err) {
            setAuthError('Network error occurred.')
        }
    }

    const fetchMetadata = async () => {
        if (!url) {
            setMessage({ text: 'Please enter a URL.', type: 'error' })
            return
        }

        setLoadingText('Fetching...')
        setMessage({ text: '', type: '' })
        setPreviewData(null)

        try {
            const res = await fetch('/api/scrape', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            })
            const data = await res.json()

            if (res.ok) {
                setPreviewData(data)
            } else {
                setMessage({ text: data.error || 'Failed to fetch data.', type: 'error' })
            }
        } catch (err) {
            setMessage({ text: 'Network error.', type: 'error' })
        } finally {
            setLoadingText('')
        }
    }

    const saveProduct = async () => {
        if (!category) {
            setMessage({ text: 'Category is required before saving.', type: 'error' })
            return
        }

        setLoadingText('Publishing...')

        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: previewData?.title,
                    image: previewData?.image,
                    url: previewData?.url,
                    category,
                    aspectRatio
                })
            })
            const data = await res.json()

            if (res.ok) {
                setMessage({ text: 'Berhasil ditambahkan ke toko!', type: 'success' })
                setUrl('')
                setPreviewData(null)
                loadProducts()
            } else {
                setMessage({ text: data.error || 'Failed to save.', type: 'error' })
            }
        } catch (err) {
            setMessage({ text: 'Network error.', type: 'error' })
        } finally {
            setLoadingText('')
        }
    }

    const deleteProduct = async (id: string) => {
        const result = await swalCustom.fire({
            title: 'Hapus Produk?',
            text: "Produk ini akan dihapus dari toko Anda.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal'
        })

        if (result.isConfirmed) {
            try {
                const res = await fetch(`/api/products?id=${id}`, { method: 'DELETE' })
                if (res.ok) {
                    loadProducts()
                    swalCustom.fire('Terhapus!', 'Produk telah dihapus.', 'success')
                }
            } catch (err) {
                swalCustom.fire('Gagal!', 'Terjadi kesalahan jaringan.', 'error')
            }
        }
    }

    const editProduct = async (product: any) => {
        const { value: formValues } = await swalCustom.fire({
            title: 'Edit Produk',
            html:
                `<label style="text-align:left;display:block;margin-bottom:5px">Nama Produk</label>` +
                `<input id="swal-input1" class="swal2-input" value="${product.title}" style="margin-bottom:15px;width:80%">` +
                `<label style="text-align:left;display:block;margin-bottom:5px">Link Affiliate (Shopee)</label>` +
                `<input id="swal-input2" class="swal2-input" value="${product.url}" style="margin-bottom:15px;width:80%">` +
                `<label style="text-align:left;display:block;margin-bottom:5px">Rasio Gambar</label>` +
                `<select id="swal-input3" class="swal2-input" style="width:80%;margin-bottom:15px">
                    <option value="1:1" ${product.aspectRatio === '1:1' ? 'selected' : ''}>1:1 (Kotak)</option>
                    <option value="16:9" ${product.aspectRatio === '16:9' ? 'selected' : ''}>16:9 (Landscape)</option>
                </select>` +
                `<div style="display:flex;align-items:center;gap:10px;justify-content:center;margin-top:10px">
                    <input type="checkbox" id="swal-input4" ${product.isVisible ? 'checked' : ''} style="width:20px;height:20px">
                    <label for="swal-input4" style="margin:0">Tampilkan di Toko</label>
                </div>` +
                `<div style="display:flex;align-items:center;gap:10px;justify-content:center;margin-top:10px">
                    <input type="checkbox" id="swal-input5" ${product.isPinned ? 'checked' : ''} style="width:20px;height:20px">
                    <label for="swal-input5" style="margin:0">Pin Produk 📌</label>
                </div>` +
                `<label style="text-align:left;display:block;margin-top:15px;margin-bottom:5px">Kategori Produk</label>` +
                `<select id="swal-input7" class="swal2-input" style="margin-bottom:15px;width:80%;background:#2d2d2d;color:#fff;border:1px solid #444">
                    <option value="">-- Pilih Kategori --</option>
                    ${Array.from(new Set([...products.map(p => p.category.toUpperCase()), 'HP', 'ELEKTRONIK', 'FASHION', 'AKSESORIS', 'RUMAH TANGGA', 'KECANTIKAN', 'KESEHATAN', 'HOBI', 'OTOMOTIF'])).sort().map(cat =>
                    `<option value="${cat}" ${product.category.toUpperCase() === cat ? 'selected' : ''} style="background:#2d2d2d;color:#fff">${cat}</option>`
                ).join('')}
                </select>` +
                `<label style="text-align:left;display:block;margin-bottom:5px">Label Kustom (Contoh: Stok Menipis)</label>` +
                `<input id="swal-input6" class="swal2-input" value="${product.customLabel || ''}" placeholder="Kosongkan jika tidak perlu" style="width:80%">`,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Simpan',
            preConfirm: () => {
                return {
                    title: (document.getElementById('swal-input1') as HTMLInputElement).value,
                    url: (document.getElementById('swal-input2') as HTMLInputElement).value,
                    aspectRatio: (document.getElementById('swal-input3') as HTMLSelectElement).value,
                    isVisible: (document.getElementById('swal-input4') as HTMLInputElement).checked,
                    isPinned: (document.getElementById('swal-input5') as HTMLInputElement).checked,
                    category: (document.getElementById('swal-input7') as HTMLInputElement).value,
                    customLabel: (document.getElementById('swal-input6') as HTMLInputElement).value
                }
            }
        })

        if (formValues) {
            try {
                const res = await fetch('/api/products', {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: product.id, ...formValues })
                })
                if (res.ok) {
                    loadProducts()
                    swalCustom.fire('Berhasil!', 'Data produk telah diperbarui.', 'success')
                } else {
                    swalCustom.fire('Gagal!', 'Gagal memperbarui data.', 'error')
                }
            } catch (err) {
                swalCustom.fire('Error!', 'Kesalahan jaringan.', 'error')
            }
        }
    }

    if (isCheckingAuth) {
        return (
            <div className="admin-body">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#fff' }}>
                    <div className="loading-spinner"></div>
                </div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return (
            <div className="admin-body">
                <div id="auth-container" className="glass-panel">
                    <h2>Akses Admin</h2>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Masukkan email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Kata Sandi</label>
                        <input
                            type="password"
                            placeholder="Masukkan kata sandi"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                        />
                    </div>
                    <button className="btn-primary" onClick={handleLogin}>Masuk</button>
                    {authError && <p className="error message" style={{ display: 'block' }}>{authError}</p>}
                </div>
            </div>
        )
    }

    return (
        <div className="admin-body">
            <div id="admin-panel" className="glass-panel">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div className="logo">
                        Nazz98<span style={{ color: 'var(--primary)' }}>Shoop</span>
                    </div>
                    <button 
                        onClick={handleLogout}
                        style={{ 
                            background: 'rgba(255, 77, 77, 0.1)', 
                            color: '#ff4d4d', 
                            border: '1px solid rgba(255, 77, 77, 0.2)', 
                            padding: '5px 12px', 
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            cursor: 'pointer'
                        }}
                    >
                        Keluar
                    </button>
                </div>
                <h2 style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '30px', opacity: 0.7 }}>Panel Manajemen Affiliate</h2>
                <div className="form-group">
                    <label>URL Shopee</label>
                    <input
                        type="text"
                        placeholder="https://shopee.co.id/..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <div className="form-group">
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
                            background: 'rgba(0, 0, 0, 0.4)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            color: '#fff',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            appearance: 'none',
                            backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1em'
                        }}
                    >
                        <option value="">-- Pilih Kategori --</option>
                        {Array.from(new Set([...products.map(p => p.category.toUpperCase()), 'HP', 'ELEKTRONIK', 'FASHION', 'AKSESORIS', 'RUMAH TANGGA', 'KECANTIKAN', 'KESEHATAN', 'HOBI', 'OTOMOTIF'])).sort().map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                        <option value="NEW" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>+ TAMBAH KATEGORI BARU...</option>
                    </select>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        className="btn-primary"
                        onClick={fetchMetadata}
                        disabled={!!loadingText}
                        style={{ flex: 2 }}
                    >
                        {loadingText === 'Fetching...' ? 'Mengambil Data...' : 'Ambil Data Shopee'}
                    </button>
                    <button
                        className="btn-secondary"
                        onClick={() => setPreviewData({ title: '', image: '', url: url || '' })}
                        style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', cursor: 'pointer' }}
                    >
                        Input Manual
                    </button>
                </div>

                {previewData && (
                    <div style={{ marginTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                        <h3>Edit & Pratinjau</h3>

                        <div className="form-group">
                            <label>Rasio Tampilan Gambar</label>
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                                <button
                                    onClick={() => setAspectRatio('1:1')}
                                    style={{ background: aspectRatio === '1:1' ? 'var(--primary)' : 'rgba(255,255,255,0.1)', fontSize: '0.8rem', padding: '8px' }}
                                >
                                    1:1 (Kotak)
                                </button>
                                <button
                                    onClick={() => setAspectRatio('16:9')}
                                    style={{ background: aspectRatio === '16:9' ? 'var(--primary)' : 'rgba(255,255,255,0.1)', fontSize: '0.8rem', padding: '8px' }}
                                >
                                    16:9 (Landscape)
                                </button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Judul Produk (Bisa diubah)</label>
                            <input
                                type="text"
                                value={previewData.title}
                                onChange={(e) => setPreviewData({ ...previewData, title: e.target.value })}
                                style={{ marginBottom: '10px' }}
                            />
                        </div>

                        <div className="form-group">
                            <label>URL Gambar (Bisa diubah)</label>
                            <input
                                type="text"
                                value={previewData.image}
                                onChange={(e) => setPreviewData({ ...previewData, image: e.target.value })}
                                style={{ marginBottom: '20px' }}
                            />
                        </div>
                        <div className="product-grid" style={{ marginBottom: '20px' }}>
                            <div className="product-card">
                                <div className="card-image-wrapper" style={{ paddingTop: aspectRatio === '1:1' ? '100%' : '56.25%' }}>
                                    <img src={previewData.image || 'https://via.placeholder.com/300x400?text=No+Image'} alt="Preview" />
                                </div>
                                <div className="card-content">
                                    <span className="category-badge">{category || 'Tanpa Kategori'}</span>
                                    <h4 className="card-title">{previewData.title}</h4>
                                    <button className="btn-buy" disabled>Beli</button>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn-success"
                            onClick={saveProduct}
                            disabled={!!loadingText}
                        >
                            {loadingText === 'Publishing...' ? 'Menyimpan...' : 'Tayangkan ke Toko'}
                        </button>
                    </div>
                )}

                {message.text && (
                    <p className={`${message.type} message`} style={{ display: 'block' }}>{message.text}</p>
                )}

                <div style={{ marginTop: '40px', borderTop: '2px solid rgba(255,255,255,0.1)', paddingTop: '30px', marginBottom: '40px' }}>
                    <h2 style={{ marginBottom: '20px', fontSize: '1.5rem', fontWeight: 'bold' }}>Pengaturan Profil Sosmed</h2>
                    <div style={{ display: 'grid', gap: '15px' }}>
                        <div className="form-group">
                            <label>Instagram URL</label>
                            <input
                                type="text"
                                placeholder="https://instagram.com/username"
                                value={socials.instagram}
                                onChange={(e) => setSocials({ ...socials, instagram: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Facebook URL</label>
                            <input
                                type="text"
                                placeholder="https://facebook.com/username"
                                value={socials.facebook}
                                onChange={(e) => setSocials({ ...socials, facebook: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>TikTok URL</label>
                            <input
                                type="text"
                                placeholder="https://tiktok.com/@username"
                                value={socials.tiktok}
                                onChange={(e) => setSocials({ ...socials, tiktok: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>YouTube Music Link (Video ID)</label>
                            <input
                                type="text"
                                placeholder="Contoh: jfKfPfyJRdk atau https://youtu.be/jfKfPfyJRdk"
                                value={socials.youtubeMusic}
                                onChange={(e) => setSocials({ ...socials, youtubeMusic: e.target.value })}
                            />
                            <small style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', display: 'block', marginTop: '5px' }}>
                                Masukkan Video ID YouTube (contoh: jfKfPfyJRdk) atau full URL
                            </small>
                        </div>
                        <button className="btn-success" onClick={saveSettings}>Simpan Profil Sosmed</button>
                    </div>
                </div>

                <div style={{ marginTop: '40px', borderTop: '2px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
                    <h2 style={{ marginBottom: '20px', fontSize: '1.5rem', fontWeight: 'bold' }}>Daftar Produk Terpasang</h2>
                    {products.length === 0 ? (
                        <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '20px' }}>Belum ada produk yang ditambahkan.</p>
                    ) : (
                        <div style={{ display: 'grid', gap: '10px' }}>
                            {products.map((p, index) => (
                                <div key={p.id} className="glass-item" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    background: 'rgba(255,255,255,0.03)',
                                    padding: '10px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    marginBottom: '10px',
                                    width: '100%',
                                    maxWidth: '100%',
                                    boxSizing: 'border-box',
                                    overflow: 'hidden',
                                    flexWrap: 'wrap',
                                    opacity: p.isVisible ? 1 : 0.5
                                }}>
                                    <div style={{
                                        width: '28px',
                                        height: '28px',
                                        background: 'var(--primary)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold',
                                        flexShrink: 0
                                    }}>
                                        {p.order + 1}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '150px' }}>
                                        <div style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                                            <img src={p.image} alt="" style={{ width: '100%', height: '100%', borderRadius: '6px', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title}</div>
                                            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>
                                                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '1px 5px', borderRadius: '4px' }}>{p.category}</span>
                                                <span style={{ marginLeft: '5px', background: 'rgba(0, 242, 254, 0.1)', color: '#00f2fe', padding: '1px 5px', borderRadius: '4px' }}>{p.aspectRatio}</span>
                                                {p.isPinned && <span style={{ marginLeft: '5px', color: '#ff0050', fontWeight: 'bold' }}>📌 PINNED</span>}
                                                {p.customLabel && <span style={{ marginLeft: '5px', background: '#ff0050', color: '#fff', padding: '1px 5px', borderRadius: '4px', fontSize: '0.6rem' }}>{p.customLabel}</span>}
                                                {!p.isVisible && <span style={{ marginLeft: '5px', color: '#ff9800', fontWeight: 'bold' }}>[TERSEMBUNYI]</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '5px', marginLeft: 'auto' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                            <button
                                                onClick={() => moveProduct(index, 'up')}
                                                disabled={index === 0}
                                                style={{
                                                    background: 'rgba(255,255,255,0.05)',
                                                    color: '#fff',
                                                    border: 'none',
                                                    padding: '2px 8px',
                                                    borderRadius: '4px',
                                                    cursor: index === 0 ? 'default' : 'pointer',
                                                    opacity: index === 0 ? 0.3 : 1
                                                }}
                                            >
                                                ▲
                                            </button>
                                            <button
                                                onClick={() => moveProduct(index, 'down')}
                                                disabled={index === products.length - 1}
                                                style={{
                                                    background: 'rgba(255,255,255,0.05)',
                                                    color: '#fff',
                                                    border: 'none',
                                                    padding: '2px 8px',
                                                    borderRadius: '4px',
                                                    cursor: index === products.length - 1 ? 'default' : 'pointer',
                                                    opacity: index === products.length - 1 ? 0.3 : 1
                                                }}
                                            >
                                                ▼
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => toggleVisibility(p.id, p.isVisible)}
                                            title={p.isVisible ? 'Sembunyikan' : 'Tampilkan'}
                                            style={{
                                                background: p.isVisible ? 'rgba(255,255,255,0.05)' : 'rgba(255, 152, 0, 0.2)',
                                                color: p.isVisible ? '#fff' : '#ff9800',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                padding: '4px 8px',
                                                borderRadius: '6px',
                                                cursor: 'pointer',
                                                fontSize: '0.7rem'
                                            }}
                                        >
                                            {p.isVisible ? '👁️' : '🕶️'}
                                        </button>
                                        <button
                                            onClick={() => editProduct(p)}
                                            style={{
                                                background: 'rgba(255,255,255,0.05)',
                                                color: '#fff',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                padding: '4px 8px',
                                                borderRadius: '6px',
                                                cursor: 'pointer',
                                                fontSize: '0.7rem'
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteProduct(p.id)}
                                            style={{
                                                background: 'rgba(255, 77, 77, 0.1)',
                                                color: '#ff4d4d',
                                                border: '1px solid rgba(255, 77, 77, 0.2)',
                                                padding: '4px 8px',
                                                borderRadius: '6px',
                                                cursor: 'pointer',
                                                fontSize: '0.7rem'
                                            }}
                                        >
                                            Hapus
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
