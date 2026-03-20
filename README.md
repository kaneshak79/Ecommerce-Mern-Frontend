# ✨ LUXORA — Premium E-Commerce Platform (Frontend)

**Luxora** is a modern, scalable, and feature-rich **multi-role e-commerce frontend application** built using the **MERN stack (React + Vite)**. Designed with a focus on performance, user experience, and clean architecture, Luxora supports **buyers and sellers** with seamless workflows—from product discovery to secure checkout.

---

## 🌐 Overview

Luxora delivers a complete e-commerce experience with:

* Secure authentication & role-based access
* Dynamic product catalog & advanced search
* Real-time cart & wishlist management
* Smooth checkout with integrated payment gateway
* Dedicated seller dashboard with analytics

---

## 🚀 Key Capabilities

### 🔐 Authentication & Authorization

* JWT-based authentication
* Buyer & Seller role separation
* Secure login, registration, password reset
* Protected routes using context-based auth

---

## 👤 Buyer Experience

### 🛍️ Product Discovery

* Responsive product grid with categories
* Advanced search & filtering
* Rich product detail pages (images, pricing, description)

### 🛒 Cart Management

* Add / remove products
* Quantity adjustment
* Real-time price calculation

### 💳 Checkout Flow

* Shipping information collection
* Razorpay payment integration
* Order confirmation & success flow

### 📦 Orders

* Order history tracking
* Order status updates

### ⭐ Reviews & Ratings

* Submit product reviews
* Display customer feedback

### ❤️ Wishlist

* Save products for later
* Quick access to favorite items

### 👤 Profile Management

* Edit personal details
* Manage account preferences

---

## 🏪 Seller Experience

### 📊 Dashboard

* Sales overview with charts (Recharts)
* Product & order insights

### 📦 Product Management

* Create, update, delete products
* Manage categories and pricing

### 📬 Order Handling

* View incoming orders
* Update shipping & delivery status

### 🏬 Store Management

* Manage store profile & branding
* Seller-specific settings

---

## 💳 Payment Integration

* Secure payment processing using **Razorpay**
* Handles:

  * Order creation
  * Payment verification
  * Success / failure flows

---

## 🧱 Tech Stack

| Layer            | Technology                 |
| ---------------- | -------------------------- |
| Framework        | React (Vite)               |
| Styling          | TailwindCSS                |
| Routing          | React Router DOM           |
| State Management | Context API                |
| API Handling     | Axios                      |
| Charts           | Recharts                   |
| Icons            | Lucide React / React Icons |

---

## 📁 Project Architecture

```id="9z8c0n"
src/
│
├── api/                      # API configuration layer
│   └── api.js
│
├── assets/                   # Images, icons, static files
│
├── components/               # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── SellerNavbar.jsx
│   ├── BannerSlider.jsx
│   ├── WishlistCard.jsx
│   └── OrderCard.jsx
│
├── context/                  # Global state management
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   └── WishlistContext.jsx
│
├── pages/
│   ├── auth/                 # Authentication pages
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ForgotPassword.jsx
│   │   └── ResetPassword.jsx
│   │
│   ├── buyer/                # Buyer-facing features
│   │   ├── Home.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Wishlist.jsx
│   │   ├── MyOrders.jsx
│   │   ├── OrderConfirmation.jsx
│   │   └── Payment.jsx
│   │
│   ├── seller/               # Seller dashboard & tools
│   │   ├── Dashboard.jsx
│   │   ├── AddProduct.jsx
│   │   ├── EditProduct.jsx
│   │   ├── SellerProducts.jsx
│   │   ├── SellerOrders.jsx
│   │   ├── SalesReport.jsx
│   │   ├── StoreManager.jsx
│   │   └── SellerProfile.jsx
│
├── utils/                    # Utilities & helpers
│   ├── axios.js
│   └── helpers.js
│
├── App.jsx                   # Root component
└── main.jsx                  # Entry point
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash id="m2e7kx"
git clone https://github.com/kaneshak79/Ecommerce-Mern-Frontend.git
cd Ecommerce-Mern-Frontend
```

### 2. Install Dependencies

```bash id="6p0k3q"
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root:

```env id="8u6l1h"
VITE_API_URL=http://localhost:5000/api
VITE_RAZORPAY_KEY=your_razorpay_key
```

### 4. Run the Application

```bash id="x7a9pz"
npm run dev
```

Application will be available at:

```id="1u7d3f"
http://localhost:5173
```

---

## 🔗 Backend Integration

Ensure the backend server is running and connected.

Update Axios configuration:

```js id="c1k9r8"
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
```

---

## 🛡️ Security Practices

* Token-based authentication (JWT)
* Protected routes for role-specific access
* Secure API communication via Axios interceptors
* Input validation & error handling

---

## 📊 Performance & Optimization

* Vite for fast builds and HMR
* Lazy loading for routes
* Component reusability for maintainability
* Optimized state management using Context API

---

## 🔮 Roadmap

* Admin Panel (Full control dashboard)
* Real-time notifications (WebSockets)
* Coupon & discount system
* Multi-vendor scalability improvements
* PWA support for mobile experience

---

## 👩‍💻 Author

**Kanesha K**
Systems Engineer — Tata Consultancy Services
Bachelor of Engineering (CSE) | CGPA: 9.2

---

## 📜 License

This project is intended for academic and demonstration purposes.

---

## ⭐ Acknowledgment

If you find **Luxora** valuable, consider giving it a ⭐ on GitHub and sharing feedback!

---
