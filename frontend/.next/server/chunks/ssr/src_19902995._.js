module.exports = {

"[project]/src/utils/getTokenHeader.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>getTokenHeader)
});
function getTokenHeader() {
    const token = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : null;
    return ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : {};
}
}}),
"[project]/src/services/category.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createCategory": (()=>createCategory),
    "deleteCategory": (()=>deleteCategory),
    "fetchAllCategories": (()=>fetchAllCategories),
    "fetchCategoryById": (()=>fetchCategoryById),
    "updateCategory": (()=>updateCategory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/handleApiError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getTokenHeader.ts [app-ssr] (ecmascript)");
;
;
;
const fetchAllCategories = async ()=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/api/v1/category", {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data.data; // ambil langsung array dari response
    } catch (error) {
        console.error("Gagal mengambil kategori:", error);
        return []; // fallback aman
    }
};
const fetchCategoryById = async (id)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/category/${id}`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "failed to fetch category id");
    }
};
const createCategory = async (data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/category', data, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "failed to create categories");
    }
};
const updateCategory = async (id, data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/category/${id}`, data, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "failed to fetch categories");
    }
};
const deleteCategory = async (id)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/category/${id}`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "failed to fetch categories");
    }
};
}}),
"[project]/src/utils/convertNumberRupiah.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>formatRupiah)
});
function formatRupiah(value) {
    const number = parseInt(value.replace(/\ D/g, ""));
    return isNaN(number) ? "" : new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(number);
}
}}),
"[project]/src/pages/TransactionForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$category$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/category.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$convertNumberRupiah$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/convertNumberRupiah.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TransactionForm = ({ initialData, onSubmit })=>{
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        type: "expense",
        amount: "",
        date: new Date().toISOString().slice(0, 10),
        note: "",
        categoryId: ""
    });
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const loadCategories = async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$category$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAllCategories"])();
            setCategories(res);
        } catch (error) {
            if (error instanceof Error) {
                console.error({
                    message: error.message,
                    type: "danger"
                });
            } else {
                console.error({
                    message: "terjadi kesalahan",
                    type: "danger"
                });
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadCategories();
    }, []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        if (name === "amount") {
            const clean = value.replace(/\D/g, "");
            const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$convertNumberRupiah$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(clean);
            setForm((prev)=>({
                    ...prev,
                    amount: formatted
                }));
            return;
        }
        setForm((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const cleanAmount = form.amount.replace(/\D/g, "");
        const payload = {
            ...form,
            amount: cleanAmount,
            categoryId: parseInt(String(form.categoryId))
        };
        onSubmit(payload);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-4 max-w-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "tipe",
                    className: "block text-sm mb-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "type",
                        value: form.type,
                        onChange: handleChange,
                        className: "w-full border px-3 py-2 rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "income",
                                children: " pemasukan"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/TransactionForm.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "expense",
                                children: " pengeluaran"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/TransactionForm.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/TransactionForm.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/TransactionForm.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "jumlah",
                        className: "block text-sm mb-1",
                        children: "jumlah"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "amount",
                        value: form.amount,
                        onChange: handleChange,
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "contoh Rp10.000",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/TransactionForm.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "tanggal",
                        className: "block text-sm mb-1",
                        children: "tanggal"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        name: "date",
                        value: form.date,
                        onChange: handleChange,
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "contoh Rp10.000",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/TransactionForm.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "catatan",
                        className: "block text-sm mb-1",
                        children: "catatan"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "note",
                        name: "note",
                        value: form.note,
                        onChange: handleChange,
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "contoh Rp10.000",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/TransactionForm.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "catatan",
                        className: "block mb-1 text-sm",
                        children: "Kategori"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "categoryId",
                        value: form.categoryId,
                        onChange: handleChange,
                        className: "w-full border px-3 py-2 rounded",
                        required: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "-- Pilih Kategori --"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/TransactionForm.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: category.id,
                                    children: category.name
                                }, category.id, false, {
                                    fileName: "[project]/src/pages/TransactionForm.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/TransactionForm.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700",
                children: "simpan"
            }, void 0, false, {
                fileName: "[project]/src/pages/TransactionForm.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/TransactionForm.tsx",
        lineNumber: 63,
        columnNumber: 7
    }, this);
};
const __TURBOPACK__default__export__ = TransactionForm;
}}),
"[project]/src/ui/Modal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Modal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
;
;
;
const iconMap = {
    information: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineInfoCircle"], {
        className: "text-blue-500 w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/ui/Modal.tsx",
        lineNumber: 12,
        columnNumber: 16
    }, this),
    success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineCheckCircle"], {
        className: "text-green-500 w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/ui/Modal.tsx",
        lineNumber: 13,
        columnNumber: 12
    }, this),
    warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineWarning"], {
        className: "text-yellow-500 w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/ui/Modal.tsx",
        lineNumber: 14,
        columnNumber: 12
    }, this),
    danger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineCloseCircle"], {
        className: "text-red-500 w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/ui/Modal.tsx",
        lineNumber: 15,
        columnNumber: 11
    }, this)
};
function Modal({ message, type = "information", onOk, onCancel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-sm mx-auto rounded-lg shadow-lg p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: iconMap[type]
                        }, void 0, false, {
                            fileName: "[project]/src/ui/Modal.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-800 font-medium",
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/src/ui/Modal.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/ui/Modal.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/ui/Modal.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex justify-end gap-3",
                    children: [
                        onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            className: "px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/ui/Modal.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onOk || (()=>{}),
                            className: "px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700",
                            children: "OK"
                        }, void 0, false, {
                            fileName: "[project]/src/ui/Modal.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/ui/Modal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/Modal.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/ui/Modal.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this), document.body);
}
}}),
"[project]/src/ui/LoadingSpinnerScreen.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoadingSpinnerScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LoadingSpinnerScreen() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/ui/LoadingSpinnerScreen.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/ui/LoadingSpinnerScreen.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/services/transaction.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createTransaction": (()=>createTransaction),
    "deleteTransaction": (()=>deleteTransaction),
    "editTransaction": (()=>editTransaction),
    "fetchMonthlyChart": (()=>fetchMonthlyChart),
    "fetchMonthlySummary": (()=>fetchMonthlySummary),
    "fetchTodayTransaction": (()=>fetchTodayTransaction),
    "fetchTotalExpenseStat": (()=>fetchTotalExpenseStat),
    "fetchTransaction": (()=>fetchTransaction),
    "fetchTransactionById": (()=>fetchTransactionById)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/handleApiError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getTokenHeader.ts [app-ssr] (ecmascript)");
;
;
;
const fetchTransaction = async (page = 1, limit = 10, search = "")=>{
    try {
        const params = new URLSearchParams({
            page: String(page),
            limit: String(limit)
        });
        if (search) params.append("search", search);
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/transaction? ${params.toString()}`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "transaksi error");
    }
};
const fetchTransactionById = async (id)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/transaction${id}`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "transaksi error");
    }
};
const createTransaction = async (data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/transaction', data, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "transaksi error");
    }
};
const editTransaction = async (id, data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`transaction/${id}`, data, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "transaksi error");
    }
};
const deleteTransaction = async (id)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/transaction/${id}`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "transaksi error");
    }
};
const fetchMonthlySummary = async ()=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/transaction/monthly-summary', {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "transaksi error");
    }
};
const fetchMonthlyChart = async ()=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/transaction/monthly-chart', {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "transaksi error");
    }
};
const fetchTodayTransaction = async ()=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/transaction/today', {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "transaksi error");
    }
};
const fetchTotalExpenseStat = async ()=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/transaction/today-expense-stats', {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "transaksi error");
    }
};
}}),
"[project]/src/app/dashboard/transaction/create/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateTransactionPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$TransactionForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/TransactionForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/Modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$LoadingSpinnerScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/LoadingSpinnerScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/transaction.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function CreateTransactionPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isSubmitting, setIsSubmittng] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (form)=>{
        setIsSubmittng(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTransaction"])({
                ...form,
                category_id: form.categoryId
            });
            setModal({
                type: "success",
                message: "trasaksi berhasil ditambahkan"
            });
        } catch (error) {
            if (error instanceof Error) {
                setModal({
                    message: error.message,
                    type: "danger"
                });
            } else {
                setModal({
                    message: "terjadi kesalahan",
                    type: "danger"
                });
            }
        } finally{
            setIsSubmittng(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: " buat trasaksi baru"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/transaction/create/page.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$LoadingSpinnerScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/transaction/create/page.tsx",
                lineNumber: 40,
                columnNumber: 26
            }, this),
            modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                type: modal.type,
                message: modal.message,
                onOk: ()=>{
                    setModal(null);
                    if (modal.type === "success") {
                        router.push("/dashboard/transaction");
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/transaction/create/page.tsx",
                lineNumber: 42,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$TransactionForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                initialData: {
                    type: "income",
                    amount: "40000",
                    date: "23-23-2025",
                    note: "test",
                    categoryId: 1
                },
                onSubmit: handleSubmit
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/transaction/create/page.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/transaction/create/page.tsx",
        lineNumber: 38,
        columnNumber: 7
    }, this);
}
}}),

};

//# sourceMappingURL=src_19902995._.js.map