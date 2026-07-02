

//       <style>
//         {`
//           @keyframes fadeIn {
//             to { opacity: 1; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import ProductCard from "../../components/ProductCard";
import BannerSlider from "../../components/BannerSlider";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [categories] = useState(["Electronics", "Fashion", "Books"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  // Redirect seller
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.role === "seller") navigate("/seller/dashboard");
  }, [navigate]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const query = new URLSearchParams(location.search).get("search");
        const url = query
          ? `${BASE_URL}/api/products?search=${query}`
          : `${BASE_URL}/api/products`;

        const res = await axios.get(url);

        let data = [];
        if (res.data?.products) data = res.data.products;
        else if (Array.isArray(res.data)) data = res.data;

        // Handle both Base64 frontend images and backend uploads
        const updatedProducts = data.map((p) => {
          const imgPath = p.images?.[0];
          let imageUrl = "/placeholder.png"; // fallback

          if (imgPath) {
            if (imgPath.startsWith("data:")) {
              imageUrl = imgPath; // Base64 from frontend
            } else {
              // backend upload
              imageUrl = `${BASE_URL}/${imgPath.replace(/^\/+/, "")}`;
            }
          }

          return { ...p, images: [imageUrl] }; // keep images array consistent
        });

        setProducts(updatedProducts);
        setError(null);
      } catch (err) {
        console.error("Fetch products error:", err);
        setError(
          "Failed to load products. Check your backend URL or server status."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search, BASE_URL]);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <BannerSlider />

      {/* Categories */}
      {/* <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
        <div className="flex gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 bg-white border rounded-full shadow hover:bg-pink-500 hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </div> */}

      {/* Products */}
      <div className="container mx-auto px-4 pb-10 mt-20">
        <h2 className="text-xl font-bold mb-6">Trending Products</h2>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product._id}
                className="cursor-pointer hover:scale-105 transition transform"
                style={{
                  animation: `fadeIn 0.5s ease ${(index + 1) * 0.1}s forwards`,
                  opacity: 0,
                }}
                // onClick={() => navigate(`/product/${product._id}`)}
              >
                {/* ProductCard uses images[0] for display */}
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Banner */}
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-xl font-bold mb-4 text-center">Experience Luxora</h2>
        <div className="w-full rounded-3xl overflow-hidden shadow-xl">
          <video
            className="w-full h-[350px] md:h-[450px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/dress.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Feature Strip */}
      <div className="bg-white py-6 border-t grid grid-cols-2 md:grid-cols-4 text-center">
        <div>
          <p className="font-semibold">🚚 FREE SHIPPING</p>
          <small>Above ₹299</small>
        </div>
        <div>
          <p className="font-semibold">🔄 EASY RETURNS</p>
          <small>15 Days Policy</small>
        </div>
        <div>
          <p className="font-semibold">✔ AUTHENTIC</p>
          <small>100% Genuine</small>
        </div>
        <div>
          <p className="font-semibold">🏷 BRANDS</p>
          <small>1000+ Brands</small>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
