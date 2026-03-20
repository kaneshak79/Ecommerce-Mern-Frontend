
// // // // src/pages/auth/Register.jsx

// // // import React, { useState } from "react";
// // // import axios from "../../utils/axios";
// // // import { useNavigate } from "react-router-dom";

// // // const Register = () => {

// // //   const navigate = useNavigate();

// // //   const [name,setName] = useState("");
// // //   const [email,setEmail] = useState("");
// // //   const [password,setPassword] = useState("");
// // //   const [role,setRole] = useState("buyer");

// // //   const handleSubmit = async (e)=>{
// // //     e.preventDefault();

// // //     try{

// // //       if(role === "seller"){
// // //         // await axios.post("/auth/register/seller",{
// // //         //   name,
// // //         //   email,
// // //         //   password
// // //         // });
// // //         await axios.post("/auth/register/seller", {
// // //   name,
// // //   email,
// // //   password,
// // //   storeName,
// // //   storeDescription
// // // });
// // //       }
// // //       else{
// // //         await axios.post("/auth/register/buyer",{
// // //           name,
// // //           email,
// // //           password
// // //         });
// // //       }

// // //       alert("Registered Successfully");
// // //       navigate("/login");

// // //     }catch(err){
// // //       console.log(err.response?.data);
// // //       alert(err.response?.data?.message || "Registration failed");
// // //     }
// // //   };

// // //   return(
// // //     <div className="flex justify-center mt-20">
// // //       <form onSubmit={handleSubmit} className="w-96 border p-6 rounded">

// // //         <h2 className="text-xl font-bold mb-4">Register</h2>

// // //         <input
// // //         type="text"
// // //         placeholder="Name"
// // //         className="w-full border p-2 mb-3"
// // //         onChange={(e)=>setName(e.target.value)}
// // //         />

// // //         <input
// // //         type="email"
// // //         placeholder="Email"
// // //         className="w-full border p-2 mb-3"
// // //         onChange={(e)=>setEmail(e.target.value)}
// // //         />

// // //         <input
// // //         type="password"
// // //         placeholder="Password"
// // //         className="w-full border p-2 mb-3"
// // //         onChange={(e)=>setPassword(e.target.value)}
// // //         />

// // //         {/* role selection */}

// // //         <select
// // //         className="w-full border p-2 mb-3"
// // //         onChange={(e)=>setRole(e.target.value)}
// // //         >

// // //           <option value="buyer">Buyer</option>
// // //           <option value="seller">Seller</option>

// // //         </select>

// // //         <button className="w-full bg-blue-500 text-white p-2">
// // //           Register
// // //         </button>

// // //       </form>
// // //     </div>
// // //   )

// // // };

// // // export default Register;



// // import React, { useState } from "react";
// // import axios from "../../utils/axios";
// // import { useNavigate } from "react-router-dom";

// // const Register = () => {

// //   const navigate = useNavigate();

// //   const [name,setName] = useState("");
// //   const [email,setEmail] = useState("");
// //   const [password,setPassword] = useState("");
// //   const [role,setRole] = useState("buyer");

// //   const [storeName,setStoreName] = useState("");
// //   const [storeDescription,setStoreDescription] = useState("");

// //   const handleSubmit = async (e)=>{
// //     e.preventDefault();

// //     try{

// //       if(role === "seller"){

// //         await axios.post("/auth/register/seller",{
// //           name,
// //           email,
// //           password,
// //           storeName,
// //           storeDescription
// //         });

// //       }else{

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

// //       <form onSubmit={handleSubmit} className="w-96 border p-6 rounded shadow">

// //         <h2 className="text-xl font-bold mb-4">Register</h2>

// //         <input
// //         type="text"
// //         placeholder="Name"
// //         className="w-full border p-2 mb-3"
// //         value={name}
// //         onChange={(e)=>setName(e.target.value)}
// //         />

// //         <input
// //         type="email"
// //         placeholder="Email"
// //         className="w-full border p-2 mb-3"
// //         value={email}
// //         onChange={(e)=>setEmail(e.target.value)}
// //         />

// //         <input
// //         type="password"
// //         placeholder="Password"
// //         className="w-full border p-2 mb-3"
// //         value={password}
// //         onChange={(e)=>setPassword(e.target.value)}
// //         />

// //         {/* Role Selection */}

// //         <select
// //         className="w-full border p-2 mb-3"
// //         value={role}
// //         onChange={(e)=>setRole(e.target.value)}
// //         >

// //           <option value="buyer">Register as Buyer</option>
// //           <option value="seller">Register as Seller</option>

// //         </select>

// //         {/* Seller Fields */}

// //         {role === "seller" && (

// //           <>

// //           <input
// //           type="text"
// //           placeholder="Store Name"
// //           className="w-full border p-2 mb-3"
// //           value={storeName}
// //           onChange={(e)=>setStoreName(e.target.value)}
// //           />

// //           <textarea
// //           placeholder="Store Description"
// //           className="w-full border p-2 mb-3"
// //           value={storeDescription}
// //           onChange={(e)=>setStoreDescription(e.target.value)}
// //           />

// //           </>

// //         )}

// //         <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">

// //           Register

// //         </button>

// //       </form>

// //     </div>

// //   )

// // };

// // export default Register;


// // src/pages/auth/Register.jsx

// import React, { useState } from "react";
// import axios from "../../utils/axios";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("buyer"); // Default role
//   const [storeName, setStoreName] = useState(""); // Only for seller
//   const [storeDescription, setStoreDescription] = useState(""); // Only for seller

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Prepare payload based on role
//       let payload = { name, email, password };
//       let endpoint = "/auth/register";

//       if (role === "seller") {
//         payload = { ...payload, storeName, storeDescription };
//         endpoint = "/auth/register/seller"; // Your backend seller endpoint
//       } else {
//         endpoint = "/auth/register/buyer"; // Your backend buyer endpoint
//       }

//       const res = await axios.post(endpoint, payload);

//       alert("Registered Successfully!");
//       navigate("/login");
//     } catch (err) {
//       console.log(err.response?.data);
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="flex justify-center mt-20">
//       <form onSubmit={handleSubmit} className="w-96 border p-6 rounded shadow">
//         <h2 className="text-xl font-bold mb-4">Register</h2>

//         <input
//           type="text"
//           placeholder="Name"
//           className="w-full border p-2 mb-3"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-2 mb-3"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border p-2 mb-3"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         {/* Role selection */}
//         <select
//           className="w-full border p-2 mb-3"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="buyer">Register as Buyer</option>
//           <option value="seller">Register as Seller</option>
//         </select>

//         {/* Seller-specific fields */}
//         {role === "seller" && (
//           <>
//             <input
//               type="text"
//               placeholder="Store Name"
//               className="w-full border p-2 mb-3"
//               value={storeName}
//               onChange={(e) => setStoreName(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Store Description"
//               className="w-full border p-2 mb-3"
//               value={storeDescription}
//               onChange={(e) => setStoreDescription(e.target.value)}
//               required
//             />
//           </>
//         )}

//         <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//           Register
//         </button>

//         <p className="mt-3 text-sm">
//           Already have an account?{" "}
//           <span
//             className="text-blue-500 cursor-pointer"
//             onClick={() => navigate("/login")}
//           >
//             Login here
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;



//new ui


import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [storeName, setStoreName] = useState("");
  const [storeDescription, setStoreDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let payload = { name, email, password };
      let endpoint = "/auth/register";

      if (role === "seller") {
        payload = { ...payload, storeName, storeDescription };
        endpoint = "/auth/register/seller";
      } else {
        endpoint = "/auth/register/buyer";
      }

      await axios.post(endpoint, payload);

      alert("Registered Successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f5f5f5]">

      {/* LEFT */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-12">
        <div className="w-full max-w-md">

          <div className="mb-10">
            {/* <div className="text-2xl font-bold">A</div> */}
            <div className="text-3xl font-semibold text-pink-700">Luxora</div>
          </div>

          <h2 className="text-3xl font-semibold mb-6">Create Account</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded-lg px-3 py-2 mb-4 bg-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-3 py-2 mb-4 bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-3 py-2 mb-4 bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <select
              className="w-full border rounded-lg px-3 py-2 mb-4 bg-white"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="buyer">Register as Buyer</option>
              <option value="seller">Register as Seller</option>
            </select>

            {role === "seller" && (
              <>
                <input
                  type="text"
                  placeholder="Store Name"
                  className="w-full border rounded-lg px-3 py-2 mb-4 bg-white"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Store Description"
                  className="w-full border rounded-lg px-3 py-2 mb-4 bg-white"
                  value={storeDescription}
                  onChange={(e) => setStoreDescription(e.target.value)}
                  required
                />
              </>
            )}

            <button className="w-full bg-gray-700 text-white py-3 rounded-lg">
              Register
            </button>

            <p className="mt-4 text-sm text-gray-500">
              Already have an account?{" "}
              <span
                className="cursor-pointer underline"
                onClick={() => navigate("/login")}
              >
                Login here
              </span>
            </p>

          </form>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex w-1/2 bg-pink-800 text-white p-12 flex-col justify-between rounded-l-[50px]">
        <div>
          {/* LOGO IMAGE */}
          <div className="mb-6 flex justify-center">
            <img
              src="/images/luxoraicon.png"  /* 👉 place your image in public folder */
              alt="Luxora Logo"
              className="w-48 h-48 object-contain rounded-xl"
            />
          </div>

          <div className="text-3xl text-white font-semibold mb-2 ">Luxora</div>
          <h2 className="text-3xl font-semibold mb-4 ">Join Luxora</h2>
          {/* <div className="flex"> */}
          <p className="text-gray-300 max-w-sm text-sm ">
            Create your account to shop smarter and faster.
            Luxora is your go-to destination for trendy, high-quality products at unbeatable prices.

         </p>
         {/* <p className="text-gray-300 max-w-sm text-sm flex justify-center">
          Luxora is your go-to destination for trendy, high-quality products at unbeatable prices.

</p> */}
</div>
        {/* </div> */}

        <div className="bg-gray-800 p-6 rounded-2xl max-w-sm ml-70">
          <h3 className="text-lg font-semibold mb-2">
            Start your journey today
          </h3>
          <p className="text-gray-400 text-sm">
            Join thousands of shoppers discovering amazing deals every day
          </p>
        </div>
      </div>

    </div>
  );
};

export default Register;
