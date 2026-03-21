// // // src/pages/seller/EditProduct.jsx
// // import React, { useState, useEffect } from "react";
// // import axios from "../../utils/axios";
// // import { useNavigate, useParams } from "react-router-dom";

// // const EditProduct = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [price, setPrice] = useState("");
// //   const [image, setImage] = useState(null);

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const res = await axios.get(`/seller/products/${id}`, {
// //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //         });
// //         setTitle(res.data.title);
// //         setDescription(res.data.description);
// //         setPrice(res.data.price);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchProduct();
// //   }, [id]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append("title", title);
// //     formData.append("description", description);
// //     formData.append("price", price);
// //     if (image) formData.append("image", image);

// //     try {
// //       await axios.put(`/seller/products/${id}`, formData, {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           "Content-Type": "multipart/form-data",
// //         },
// //       });
// //       alert("Product updated successfully");
// //       navigate("/seller/products");
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to update product");
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <input
// //           type="text"
// //           placeholder="Title"
// //           className="w-full border p-2 rounded"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //           required
// //         />
// //         <textarea
// //           placeholder="Description"
// //           className="w-full border p-2 rounded"
// //           value={description}
// //           onChange={(e) => setDescription(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="number"
// //           placeholder="Price"
// //           className="w-full border p-2 rounded"
// //           value={price}
// //           onChange={(e) => setPrice(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="file"
// //           onChange={(e) => setImage(e.target.files[0])}
// //         />
// //         <button
// //           type="submit"
// //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //         >
// //           Update Product
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default EditProduct;


// // src/pages/seller/EditProduct.jsx
// import React, { useState, useEffect } from "react";
// import axios from "../../utils/axios";
// import { useNavigate, useParams } from "react-router-dom";

// const EditProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");

//   // 🔥 Fetch product
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`/seller/products/${id}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         setTitle(res.data.title);
//         setDescription(res.data.description);
//         setPrice(res.data.price);

//         // ✅ show existing image
//         if (res.data.images?.[0]) {
//           setPreview(
//             `http://localhost:5000/${res.data.images[0].replace(/^\/+/, "")}`
//           );
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   // 🔥 Handle submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("price", Number(price));

//     if (image) {
//       formData.append("image", image);
//     }

//     try {
//       await axios.put(`/seller/products/${id}`, formData, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       alert("Product updated successfully");

//       // 🔥 force refresh
//       navigate("/seller/products", { replace: true });
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update product");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Title"
//           className="w-full border p-2 rounded"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />

//         <textarea
//           placeholder="Description"
//           className="w-full border p-2 rounded"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />

//         <input
//           type="number"
//           placeholder="Price"
//           className="w-full border p-2 rounded"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />

//         {/* ✅ Image preview */}
//         {preview && (
//           <img
//             src={preview}
//             alt="preview"
//             className="w-32 h-32 object-cover rounded"
//           />
//         )}

//         <input
//           type="file"
//           onChange={(e) => {
//             const file = e.target.files[0];
//             setImage(file);

//             // 🔥 preview new image
//             if (file) {
//               setPreview(URL.createObjectURL(file));
//             }
//           }}
//         />

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Update Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProduct;

// src/pages/seller/EditProduct.jsx
import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  // ✅ Fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/seller/products/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setTitle(res.data.title);
        setDescription(res.data.description);
        setPrice(res.data.price);

        if (res.data.images?.[0]) {
          setPreview(
            `${BASE_URL}/${res.data.images[0].replace(/^\/+/, "")}`
          );
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [id, BASE_URL]);

  // ✅ Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", Number(price));

    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(`/products/${id}`, formData, {
      // await axios.put(`/seller/products/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      alert("Product updated successfully");

      navigate("/seller/products");
      // navigate("/seller/products", { replace: true });
    } catch (err) {
      console.error(err);
      alert("Failed to update product");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="number"
          className="w-full border p-2 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        {/* ✅ Image preview */}
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-32 h-32 object-cover rounded"
          />
        )}

        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            setImage(file);

            if (file) {
              setPreview(URL.createObjectURL(file));
            }
          }}
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;