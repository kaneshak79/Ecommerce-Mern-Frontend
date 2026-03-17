
// // // src/pages/auth/Register.jsx

// // import React, { useState } from "react";
// // import axios from "../../utils/axios";
// // import { useNavigate } from "react-router-dom";

// // const Register = () => {

// //   const navigate = useNavigate();

// //   const [name,setName] = useState("");
// //   const [email,setEmail] = useState("");
// //   const [password,setPassword] = useState("");
// //   const [role,setRole] = useState("buyer");

// //   const handleSubmit = async (e)=>{
// //     e.preventDefault();

// //     try{

// //       if(role === "seller"){
// //         // await axios.post("/auth/register/seller",{
// //         //   name,
// //         //   email,
// //         //   password
// //         // });
// //         await axios.post("/auth/register/seller", {
// //   name,
// //   email,
// //   password,
// //   storeName,
// //   storeDescription
// // });
// //       }
// //       else{
// //         await axios.post("/auth/register/buyer",{
// //           name,
// //           email,
// //           password
// //         });
// //       }

// //       alert("Registered Successfully");
// //       navigate("/login");

// //     }catch(err){
// //       console.log(err.response?.data);
// //       alert(err.response?.data?.message || "Registration failed");
// //     }
// //   };

// //   return(
// //     <div className="flex justify-center mt-20">
// //       <form onSubmit={handleSubmit} className="w-96 border p-6 rounded">

// //         <h2 className="text-xl font-bold mb-4">Register</h2>

// //         <input
// //         type="text"
// //         placeholder="Name"
// //         className="w-full border p-2 mb-3"
// //         onChange={(e)=>setName(e.target.value)}
// //         />

// //         <input
// //         type="email"
// //         placeholder="Email"
// //         className="w-full border p-2 mb-3"
// //         onChange={(e)=>setEmail(e.target.value)}
// //         />

// //         <input
// //         type="password"
// //         placeholder="Password"
// //         className="w-full border p-2 mb-3"
// //         onChange={(e)=>setPassword(e.target.value)}
// //         />

// //         {/* role selection */}

// //         <select
// //         className="w-full border p-2 mb-3"
// //         onChange={(e)=>setRole(e.target.value)}
// //         >

// //           <option value="buyer">Buyer</option>
// //           <option value="seller">Seller</option>

// //         </select>

// //         <button className="w-full bg-blue-500 text-white p-2">
// //           Register
// //         </button>

// //       </form>
// //     </div>
// //   )

// // };

// // export default Register;



// import React, { useState } from "react";
// import axios from "../../utils/axios";
// import { useNavigate } from "react-router-dom";

// const Register = () => {

//   const navigate = useNavigate();

//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const [role,setRole] = useState("buyer");

//   const [storeName,setStoreName] = useState("");
//   const [storeDescription,setStoreDescription] = useState("");

//   const handleSubmit = async (e)=>{
//     e.preventDefault();

//     try{

//       if(role === "seller"){

//         await axios.post("/auth/register/seller",{
//           name,
//           email,
//           password,
//           storeName,
//           storeDescription
//         });

//       }else{

//         await axios.post("/auth/register/buyer",{
//           name,
//           email,
//           password
//         });

//       }

//       alert("Registered Successfully");
//       navigate("/login");

//     }catch(err){

//       console.log(err.response?.data);
//       alert(err.response?.data?.message || "Registration failed");

//     }
//   };

//   return(

//     <div className="flex justify-center mt-20">

//       <form onSubmit={handleSubmit} className="w-96 border p-6 rounded shadow">

//         <h2 className="text-xl font-bold mb-4">Register</h2>

//         <input
//         type="text"
//         placeholder="Name"
//         className="w-full border p-2 mb-3"
//         value={name}
//         onChange={(e)=>setName(e.target.value)}
//         />

//         <input
//         type="email"
//         placeholder="Email"
//         className="w-full border p-2 mb-3"
//         value={email}
//         onChange={(e)=>setEmail(e.target.value)}
//         />

//         <input
//         type="password"
//         placeholder="Password"
//         className="w-full border p-2 mb-3"
//         value={password}
//         onChange={(e)=>setPassword(e.target.value)}
//         />

//         {/* Role Selection */}

//         <select
//         className="w-full border p-2 mb-3"
//         value={role}
//         onChange={(e)=>setRole(e.target.value)}
//         >

//           <option value="buyer">Register as Buyer</option>
//           <option value="seller">Register as Seller</option>

//         </select>

//         {/* Seller Fields */}

//         {role === "seller" && (

//           <>

//           <input
//           type="text"
//           placeholder="Store Name"
//           className="w-full border p-2 mb-3"
//           value={storeName}
//           onChange={(e)=>setStoreName(e.target.value)}
//           />

//           <textarea
//           placeholder="Store Description"
//           className="w-full border p-2 mb-3"
//           value={storeDescription}
//           onChange={(e)=>setStoreDescription(e.target.value)}
//           />

//           </>

//         )}

//         <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">

//           Register

//         </button>

//       </form>

//     </div>

//   )

// };

// export default Register;


// src/pages/auth/Register.jsx

import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer"); // Default role
  const [storeName, setStoreName] = useState(""); // Only for seller
  const [storeDescription, setStoreDescription] = useState(""); // Only for seller

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare payload based on role
      let payload = { name, email, password };
      let endpoint = "/auth/register";

      if (role === "seller") {
        payload = { ...payload, storeName, storeDescription };
        endpoint = "/auth/register/seller"; // Your backend seller endpoint
      } else {
        endpoint = "/auth/register/buyer"; // Your backend buyer endpoint
      }

      const res = await axios.post(endpoint, payload);

      alert("Registered Successfully!");
      navigate("/login");
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleSubmit} className="w-96 border p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Role selection */}
        <select
          className="w-full border p-2 mb-3"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="buyer">Register as Buyer</option>
          <option value="seller">Register as Seller</option>
        </select>

        {/* Seller-specific fields */}
        {role === "seller" && (
          <>
            <input
              type="text"
              placeholder="Store Name"
              className="w-full border p-2 mb-3"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Store Description"
              className="w-full border p-2 mb-3"
              value={storeDescription}
              onChange={(e) => setStoreDescription(e.target.value)}
              required
            />
          </>
        )}

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Register
        </button>

        <p className="mt-3 text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;