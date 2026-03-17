import API from "../utils/axios";

// ==================== AUTH ====================
export const registerBuyer = (data) => API.post("/auth/register/buyer", data);
export const registerSeller = (data) => API.post("/auth/register/seller", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const getProfile = () => API.get("/auth/profile");
export const updateProfile = (data) => API.put("/auth/profile", data);
export const changePassword = (data) => API.put("/auth/password", data);
export const forgotPassword = (data) => API.post("/auth/forgotpassword", data);
export const resetPassword = (token, data) => API.put(`/auth/resetpassword/${token}`, data);
export const updateStore = (data) => API.put("/auth/store", data);

// ==================== PRODUCTS ====================
export const addProduct = (data) => API.post("/products", data);
export const getAllProducts = () => API.get("/products");
export const getProductById = (id) => API.get(`/products/${id}`);
export const updateProduct = (id, data) => API.put(`/products/${id}`, data);
export const deleteProduct = (id) => API.delete(`/products/${id}`);
export const searchProduct = (query) => API.get(`/products/search?query=${query}`);
export const filterCategory = (category) => API.get(`/products/filter/category?category=${category}`);
export const filterPrice = (min, max) => API.get(`/products/filter/price?min=${min}&max=${max}`);
export const filterCombined = (category, min, max) =>
  API.get(`/products/filter/combined?category=${category}&min=${min}&max=${max}`);

// ==================== CART ====================
export const addToCart = (data) => API.post("/cart", data);
export const getCart = () => API.get("/cart");
export const updateCart = (data) => API.put("/cart", data);
export const deleteCartItem = (productId) => API.delete(`/cart/${productId}`);

// ==================== WISHLIST ====================
export const addToWishlist = (data) => API.post("/wishlist", data);
export const getWishlist = () => API.get("/wishlist");
export const updateWishlist = (data) => API.put("/wishlist", data);
export const removeWishlistItem = (productId) => API.delete(`/wishlist/${productId}`);

// ==================== ORDERS ====================
export const createOrder = (data) => API.post("/orders", data);
export const getMyOrders = () => API.get("/orders/myorders");
export const getSellerOrders = () => API.get("/orders/seller");

// ==================== REVIEWS ====================
export const addReview = (data) => API.post("/reviews", data);
export const getReviews = (productId) => API.get(`/reviews?productId=${productId}`);
export const updateReview = (id, data) => API.put(`/reviews/${id}`, data);
export const deleteReview = (id) => API.delete(`/reviews/${id}`);

// ==================== PAYMENT ====================
export const createPaymentOrder = (data) => API.post("/payment/create-order", data);
export const verifyPayment = (data) => API.post("/payment/verify", data);
export const getAllPayments = () => API.get("/payment");

// ==================== SELLER ====================
export const getSellerProducts = () => API.get("/seller/products");
export const getSalesReport = () => API.get("/seller/sales");
export const getSellerOrdersAPI = () => API.get("/seller/orders");
export const updateSellerStore = (data) => API.put("/seller/store", data);