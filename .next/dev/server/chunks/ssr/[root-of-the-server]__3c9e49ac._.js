module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/next-app/src/app/admin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/sweetalert2/dist/sweetalert2.esm.all.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// Theme custom for SweetAlert2
const swalCustom = __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].mixin({
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
function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [authError, setAuthError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [aspectRatio, setAspectRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('1:1');
    const [loadingText, setLoadingText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        text: '',
        type: ''
    });
    const [previewData, setPreviewData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [socials, setSocials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        instagram: '',
        facebook: '',
        tiktok: '',
        youtubeMusic: ''
    });
    const loadSettings = async ()=>{
        try {
            const res = await fetch('/api/settings');
            const data = await res.json();
            if (res.ok) setSocials({
                instagram: data.instagram,
                facebook: data.facebook,
                tiktok: data.tiktok,
                youtubeMusic: data.youtubeMusic || ''
            });
        } catch (err) {
            console.error('Failed to load settings');
        }
    };
    const saveSettings = async ()=>{
        try {
            const res = await fetch('/api/settings', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(socials)
            });
            if (res.ok) {
                swalCustom.fire('Berhasil!', 'Profil media sosial telah diperbarui.', 'success');
            }
        } catch (err) {
            swalCustom.fire('Error!', 'Gagal menyimpan profil.', 'error');
        }
    };
    const loadProducts = async ()=>{
        try {
            const res = await fetch('/api/products?all=true');
            const data = await res.json();
            if (res.ok) setProducts(data);
        } catch (err) {
            console.error('Failed to load products');
        }
    };
    const moveProduct = async (index, direction)=>{
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= products.length) return;
        const currentProduct = products[index];
        const targetProduct = products[targetIndex];
        try {
            await Promise.all([
                fetch('/api/products', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: currentProduct.id,
                        order: targetProduct.order
                    })
                }),
                fetch('/api/products', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: targetProduct.id,
                        order: currentProduct.order
                    })
                })
            ]);
            loadProducts();
        } catch (err) {
            swalCustom.fire('Error!', 'Gagal memindahkan posisi produk.', 'error');
        }
    };
    const toggleVisibility = async (id, currentStatus)=>{
        try {
            const res = await fetch('/api/products', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id,
                    isVisible: !currentStatus
                })
            });
            if (res.ok) {
                loadProducts();
            }
        } catch (err) {
            swalCustom.fire('Error!', 'Gagal mengubah status visibilitas.', 'error');
        }
    };
    const handleLogin = async ()=>{
        setAuthError('');
        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await res.json();
            if (res.ok) {
                setIsAuthenticated(true);
                loadProducts();
                loadSettings();
            } else {
                setAuthError(data.error || 'Login failed');
            }
        } catch (err) {
            setAuthError('Network error occurred.');
        }
    };
    const fetchMetadata = async ()=>{
        if (!url) {
            setMessage({
                text: 'Please enter a URL.',
                type: 'error'
            });
            return;
        }
        setLoadingText('Fetching...');
        setMessage({
            text: '',
            type: ''
        });
        setPreviewData(null);
        try {
            const res = await fetch('/api/scrape', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url
                })
            });
            const data = await res.json();
            if (res.ok) {
                setPreviewData(data);
            } else {
                setMessage({
                    text: data.error || 'Failed to fetch data.',
                    type: 'error'
                });
            }
        } catch (err) {
            setMessage({
                text: 'Network error.',
                type: 'error'
            });
        } finally{
            setLoadingText('');
        }
    };
    const saveProduct = async ()=>{
        if (!category) {
            setMessage({
                text: 'Category is required before saving.',
                type: 'error'
            });
            return;
        }
        setLoadingText('Publishing...');
        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: previewData?.title,
                    image: previewData?.image,
                    url: previewData?.url,
                    category,
                    aspectRatio
                })
            });
            const data = await res.json();
            if (res.ok) {
                setMessage({
                    text: 'Berhasil ditambahkan ke toko!',
                    type: 'success'
                });
                setUrl('');
                setPreviewData(null);
                loadProducts();
            } else {
                setMessage({
                    text: data.error || 'Failed to save.',
                    type: 'error'
                });
            }
        } catch (err) {
            setMessage({
                text: 'Network error.',
                type: 'error'
            });
        } finally{
            setLoadingText('');
        }
    };
    const deleteProduct = async (id)=>{
        const result = await swalCustom.fire({
            title: 'Hapus Produk?',
            text: "Produk ini akan dihapus dari toko Anda.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal'
        });
        if (result.isConfirmed) {
            try {
                const res = await fetch(`/api/products?id=${id}`, {
                    method: 'DELETE'
                });
                if (res.ok) {
                    loadProducts();
                    swalCustom.fire('Terhapus!', 'Produk telah dihapus.', 'success');
                }
            } catch (err) {
                swalCustom.fire('Gagal!', 'Terjadi kesalahan jaringan.', 'error');
            }
        }
    };
    const editProduct = async (product)=>{
        const { value: formValues } = await swalCustom.fire({
            title: 'Edit Produk',
            html: `<label style="text-align:left;display:block;margin-bottom:5px">Nama Produk</label>` + `<input id="swal-input1" class="swal2-input" value="${product.title}" style="margin-bottom:15px;width:80%">` + `<label style="text-align:left;display:block;margin-bottom:5px">Link Affiliate (Shopee)</label>` + `<input id="swal-input2" class="swal2-input" value="${product.url}" style="margin-bottom:15px;width:80%">` + `<label style="text-align:left;display:block;margin-bottom:5px">Rasio Gambar</label>` + `<select id="swal-input3" class="swal2-input" style="width:80%;margin-bottom:15px">
                    <option value="1:1" ${product.aspectRatio === '1:1' ? 'selected' : ''}>1:1 (Kotak)</option>
                    <option value="16:9" ${product.aspectRatio === '16:9' ? 'selected' : ''}>16:9 (Landscape)</option>
                </select>` + `<div style="display:flex;align-items:center;gap:10px;justify-content:center;margin-top:10px">
                    <input type="checkbox" id="swal-input4" ${product.isVisible ? 'checked' : ''} style="width:20px;height:20px">
                    <label for="swal-input4" style="margin:0">Tampilkan di Toko</label>
                </div>` + `<div style="display:flex;align-items:center;gap:10px;justify-content:center;margin-top:10px">
                    <input type="checkbox" id="swal-input5" ${product.isPinned ? 'checked' : ''} style="width:20px;height:20px">
                    <label for="swal-input5" style="margin:0">Pin Produk 📌</label>
                </div>` + `<label style="text-align:left;display:block;margin-top:15px;margin-bottom:5px">Kategori Produk</label>` + `<select id="swal-input7" class="swal2-input" style="margin-bottom:15px;width:80%;background:#2d2d2d;color:#fff;border:1px solid #444">
                    <option value="">-- Pilih Kategori --</option>
                    ${Array.from(new Set([
                ...products.map((p)=>p.category.toUpperCase()),
                'HP',
                'ELEKTRONIK',
                'FASHION',
                'AKSESORIS',
                'RUMAH TANGGA',
                'KECANTIKAN',
                'KESEHATAN',
                'HOBI',
                'OTOMOTIF'
            ])).sort().map((cat)=>`<option value="${cat}" ${product.category.toUpperCase() === cat ? 'selected' : ''} style="background:#2d2d2d;color:#fff">${cat}</option>`).join('')}
                </select>` + `<label style="text-align:left;display:block;margin-bottom:5px">Label Kustom (Contoh: Stok Menipis)</label>` + `<input id="swal-input6" class="swal2-input" value="${product.customLabel || ''}" placeholder="Kosongkan jika tidak perlu" style="width:80%">`,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Simpan',
            preConfirm: ()=>{
                return {
                    title: document.getElementById('swal-input1').value,
                    url: document.getElementById('swal-input2').value,
                    aspectRatio: document.getElementById('swal-input3').value,
                    isVisible: document.getElementById('swal-input4').checked,
                    isPinned: document.getElementById('swal-input5').checked,
                    category: document.getElementById('swal-input7').value,
                    customLabel: document.getElementById('swal-input6').value
                };
            }
        });
        if (formValues) {
            try {
                const res = await fetch('/api/products', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: product.id,
                        ...formValues
                    })
                });
                if (res.ok) {
                    loadProducts();
                    swalCustom.fire('Berhasil!', 'Data produk telah diperbarui.', 'success');
                } else {
                    swalCustom.fire('Gagal!', 'Gagal memperbarui data.', 'error');
                }
            } catch (err) {
                swalCustom.fire('Error!', 'Kesalahan jaringan.', 'error');
            }
        }
    };
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-body",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "auth-container",
                className: "glass-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Akses Admin"
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/admin/page.tsx",
                        lineNumber: 298,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/app/admin/page.tsx",
                                lineNumber: 300,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                placeholder: "Masukkan email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/app/admin/page.tsx",
                                lineNumber: 301,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/src/app/admin/page.tsx",
                        lineNumber: 299,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Kata Sandi"
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/app/admin/page.tsx",
                                lineNumber: 309,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                placeholder: "Masukkan kata sandi",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                onKeyDown: (e)=>e.key === 'Enter' && handleLogin()
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/app/admin/page.tsx",
                                lineNumber: 310,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/src/app/admin/page.tsx",
                        lineNumber: 308,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        onClick: handleLogin,
                        children: "Masuk"
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/admin/page.tsx",
                        lineNumber: 318,
                        columnNumber: 21
                    }, this),
                    authError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "error message",
                        style: {
                            display: 'block'
                        },
                        children: authError
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/admin/page.tsx",
                        lineNumber: 319,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/src/app/admin/page.tsx",
                lineNumber: 297,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/admin/page.tsx",
            lineNumber: 296,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "admin-body",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "admin-panel",
            className: "glass-panel",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "logo",
                    style: {
                        marginBottom: '10px',
                        textAlign: 'center'
                    },
                    children: [
                        "Nazz98",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: 'var(--primary)'
                            },
                            children: "Shoop"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 329,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                    lineNumber: 328,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: '1rem',
                        textAlign: 'center',
                        marginBottom: '30px',
                        opacity: 0.7
                    },
                    children: "Panel Manajemen Affiliate"
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                    lineNumber: 331,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: "URL Shopee"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 333,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "https://shopee.co.id/...",
                            value: url,
                            onChange: (e)=>setUrl(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 334,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                    lineNumber: 332,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: "Kategori"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 342,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: category,
                            onChange: (e)=>{
                                if (e.target.value === 'NEW') {
                                    const newCat = prompt('Masukkan Nama Kategori Baru:');
                                    if (newCat) setCategory(newCat.toUpperCase());
                                } else {
                                    setCategory(e.target.value);
                                }
                            },
                            style: {
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
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "-- Pilih Kategori --"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 369,
                                    columnNumber: 25
                                }, this),
                                Array.from(new Set([
                                    ...products.map((p)=>p.category.toUpperCase()),
                                    'HP',
                                    'ELEKTRONIK',
                                    'FASHION',
                                    'AKSESORIS',
                                    'RUMAH TANGGA',
                                    'KECANTIKAN',
                                    'KESEHATAN',
                                    'HOBI',
                                    'OTOMOTIF'
                                ])).sort().map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: cat,
                                        children: cat
                                    }, cat, false, {
                                        fileName: "[project]/next-app/src/app/admin/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 29
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "NEW",
                                    style: {
                                        color: 'var(--primary)',
                                        fontWeight: 'bold'
                                    },
                                    children: "+ TAMBAH KATEGORI BARU..."
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 373,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 343,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                    lineNumber: 341,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: '10px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary",
                            onClick: fetchMetadata,
                            disabled: !!loadingText,
                            style: {
                                flex: 2
                            },
                            children: loadingText === 'Fetching...' ? 'Mengambil Data...' : 'Ambil Data Shopee'
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 377,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-secondary",
                            onClick: ()=>setPreviewData({
                                    title: '',
                                    image: '',
                                    url: url || ''
                                }),
                            style: {
                                flex: 1,
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: '12px',
                                cursor: 'pointer'
                            },
                            children: "Input Manual"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 385,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                    lineNumber: 376,
                    columnNumber: 17
                }, this),
                previewData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '30px',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '20px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Edit & Pratinjau"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 396,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Rasio Tampilan Gambar"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 399,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '10px',
                                        marginBottom: '15px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setAspectRatio('1:1'),
                                            style: {
                                                background: aspectRatio === '1:1' ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                                                fontSize: '0.8rem',
                                                padding: '8px'
                                            },
                                            children: "1:1 (Kotak)"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setAspectRatio('16:9'),
                                            style: {
                                                background: aspectRatio === '16:9' ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                                                fontSize: '0.8rem',
                                                padding: '8px'
                                            },
                                            children: "16:9 (Landscape)"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 407,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 400,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 398,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Judul Produk (Bisa diubah)"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 417,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: previewData.title,
                                    onChange: (e)=>setPreviewData({
                                            ...previewData,
                                            title: e.target.value
                                        }),
                                    style: {
                                        marginBottom: '10px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 416,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "URL Gambar (Bisa diubah)"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 427,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: previewData.image,
                                    onChange: (e)=>setPreviewData({
                                            ...previewData,
                                            image: e.target.value
                                        }),
                                    style: {
                                        marginBottom: '20px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 428,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 426,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "product-grid",
                            style: {
                                marginBottom: '20px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "product-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-image-wrapper",
                                        style: {
                                            paddingTop: aspectRatio === '1:1' ? '100%' : '56.25%'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: previewData.image || 'https://via.placeholder.com/300x400?text=No+Image',
                                            alt: "Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/app/admin/page.tsx",
                                        lineNumber: 437,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "category-badge",
                                                children: category || 'Tanpa Kategori'
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                lineNumber: 441,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "card-title",
                                                children: previewData.title
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-buy",
                                                disabled: true,
                                                children: "Beli"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/src/app/admin/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/src/app/admin/page.tsx",
                                lineNumber: 436,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 435,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-success",
                            onClick: saveProduct,
                            disabled: !!loadingText,
                            children: loadingText === 'Publishing...' ? 'Menyimpan...' : 'Tayangkan ke Toko'
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 447,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                    lineNumber: 395,
                    columnNumber: 21
                }, this),
                message.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `${message.type} message`,
                    style: {
                        display: 'block'
                    },
                    children: message.text
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                    lineNumber: 458,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '40px',
                        borderTop: '2px solid rgba(255,255,255,0.1)',
                        paddingTop: '30px',
                        marginBottom: '40px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: '20px',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            },
                            children: "Pengaturan Profil Sosmed"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 462,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gap: '15px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Instagram URL"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "https://instagram.com/username",
                                            value: socials.instagram,
                                            onChange: (e)=>setSocials({
                                                    ...socials,
                                                    instagram: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 464,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Facebook URL"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 474,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "https://facebook.com/username",
                                            value: socials.facebook,
                                            onChange: (e)=>setSocials({
                                                    ...socials,
                                                    facebook: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 475,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 473,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "TikTok URL"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 483,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "https://tiktok.com/@username",
                                            value: socials.tiktok,
                                            onChange: (e)=>setSocials({
                                                    ...socials,
                                                    tiktok: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 482,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "YouTube Music Link (Video ID)"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 492,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Contoh: jfKfPfyJRdk atau https://youtu.be/jfKfPfyJRdk",
                                            value: socials.youtubeMusic,
                                            onChange: (e)=>setSocials({
                                                    ...socials,
                                                    youtubeMusic: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 493,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            style: {
                                                color: 'rgba(255,255,255,0.6)',
                                                fontSize: '0.8rem',
                                                display: 'block',
                                                marginTop: '5px'
                                            },
                                            children: "Masukkan Video ID YouTube (contoh: jfKfPfyJRdk) atau full URL"
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 499,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 491,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-success",
                                    onClick: saveSettings,
                                    children: "Simpan Profil Sosmed"
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 503,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 463,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                    lineNumber: 461,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '40px',
                        borderTop: '2px solid rgba(255,255,255,0.1)',
                        paddingTop: '30px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: '20px',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            },
                            children: "Daftar Produk Terpasang"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 508,
                            columnNumber: 21
                        }, this),
                        products.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: 'rgba(255,255,255,0.5)',
                                textAlign: 'center',
                                padding: '20px'
                            },
                            children: "Belum ada produk yang ditambahkan."
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 510,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gap: '10px'
                            },
                            children: products.map((p, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-item",
                                    style: {
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
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
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
                                            },
                                            children: p.order + 1
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                flex: 1,
                                                minWidth: '150px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '40px',
                                                        height: '40px',
                                                        flexShrink: 0
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: p.image,
                                                        alt: "",
                                                        style: {
                                                            width: '100%',
                                                            height: '100%',
                                                            borderRadius: '6px',
                                                            objectFit: 'cover'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1,
                                                        minWidth: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '0.8rem',
                                                                fontWeight: '600',
                                                                color: '#fff',
                                                                whiteSpace: 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis'
                                                            },
                                                            children: p.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '0.65rem',
                                                                color: 'rgba(255,255,255,0.4)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        background: 'rgba(255,255,255,0.05)',
                                                                        padding: '1px 5px',
                                                                        borderRadius: '4px'
                                                                    },
                                                                    children: p.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                                    lineNumber: 551,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        marginLeft: '5px',
                                                                        background: 'rgba(0, 242, 254, 0.1)',
                                                                        color: '#00f2fe',
                                                                        padding: '1px 5px',
                                                                        borderRadius: '4px'
                                                                    },
                                                                    children: p.aspectRatio
                                                                }, void 0, false, {
                                                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                                    lineNumber: 552,
                                                                    columnNumber: 49
                                                                }, this),
                                                                p.isPinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        marginLeft: '5px',
                                                                        color: '#ff0050',
                                                                        fontWeight: 'bold'
                                                                    },
                                                                    children: "📌 PINNED"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                                    lineNumber: 553,
                                                                    columnNumber: 64
                                                                }, this),
                                                                p.customLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        marginLeft: '5px',
                                                                        background: '#ff0050',
                                                                        color: '#fff',
                                                                        padding: '1px 5px',
                                                                        borderRadius: '4px',
                                                                        fontSize: '0.6rem'
                                                                    },
                                                                    children: p.customLabel
                                                                }, void 0, false, {
                                                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                                    lineNumber: 554,
                                                                    columnNumber: 67
                                                                }, this),
                                                                !p.isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        marginLeft: '5px',
                                                                        color: '#ff9800',
                                                                        fontWeight: 'bold'
                                                                    },
                                                                    children: "[TERSEMBUNYI]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                                    lineNumber: 555,
                                                                    columnNumber: 66
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 544,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '5px',
                                                marginLeft: 'auto'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '2px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>moveProduct(index, 'up'),
                                                            disabled: index === 0,
                                                            style: {
                                                                background: 'rgba(255,255,255,0.05)',
                                                                color: '#fff',
                                                                border: 'none',
                                                                padding: '2px 8px',
                                                                borderRadius: '4px',
                                                                cursor: index === 0 ? 'default' : 'pointer',
                                                                opacity: index === 0 ? 0.3 : 1
                                                            },
                                                            children: "▲"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                            lineNumber: 561,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>moveProduct(index, 'down'),
                                                            disabled: index === products.length - 1,
                                                            style: {
                                                                background: 'rgba(255,255,255,0.05)',
                                                                color: '#fff',
                                                                border: 'none',
                                                                padding: '2px 8px',
                                                                borderRadius: '4px',
                                                                cursor: index === products.length - 1 ? 'default' : 'pointer',
                                                                opacity: index === products.length - 1 ? 0.3 : 1
                                                            },
                                                            children: "▼"
                                                        }, void 0, false, {
                                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                            lineNumber: 576,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleVisibility(p.id, p.isVisible),
                                                    title: p.isVisible ? 'Sembunyikan' : 'Tampilkan',
                                                    style: {
                                                        background: p.isVisible ? 'rgba(255,255,255,0.05)' : 'rgba(255, 152, 0, 0.2)',
                                                        color: p.isVisible ? '#fff' : '#ff9800',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        padding: '4px 8px',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer',
                                                        fontSize: '0.7rem'
                                                    },
                                                    children: p.isVisible ? '👁️' : '🕶️'
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>editProduct(p),
                                                    style: {
                                                        background: 'rgba(255,255,255,0.05)',
                                                        color: '#fff',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        padding: '4px 8px',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer',
                                                        fontSize: '0.7rem'
                                                    },
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>deleteProduct(p.id),
                                                    style: {
                                                        background: 'rgba(255, 77, 77, 0.1)',
                                                        color: '#ff4d4d',
                                                        border: '1px solid rgba(255, 77, 77, 0.2)',
                                                        padding: '4px 8px',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer',
                                                        fontSize: '0.7rem'
                                                    },
                                                    children: "Hapus"
                                                }, void 0, false, {
                                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                                            lineNumber: 559,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, p.id, true, {
                                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                                    lineNumber: 514,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/admin/page.tsx",
                            lineNumber: 512,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/app/admin/page.tsx",
                    lineNumber: 507,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/admin/page.tsx",
            lineNumber: 327,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/next-app/src/app/admin/page.tsx",
        lineNumber: 326,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3c9e49ac._.js.map