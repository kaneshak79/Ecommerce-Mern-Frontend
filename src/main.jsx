// // // // // import { StrictMode } from 'react'
// // // // // import { createRoot } from 'react-dom/client'
// // // // // import './index.css'
// // // // // import App from './App.jsx'

// // // // // createRoot(document.getElementById('root')).render(
// // // // //   <StrictMode>
// // // // //     <App />
// // // // //   </StrictMode>,
// // // // // )



// // // // import React from "react";
// // // // import ReactDOM from "react-dom/client";
// // // // import App from "./App";
// // // // import { AuthProvider } from "./context/AuthContext";
// // // // import { BrowserRouter } from "react-router-dom";

// // // // ReactDOM.createRoot(document.getElementById("root")).render(
// // // //   <React.StrictMode>
// // // //     <BrowserRouter>
// // // //       <AuthProvider>
// // // //         <App />
// // // //       </AuthProvider>
// // // //     </BrowserRouter>
// // // //   </React.StrictMode>
// // // // );



// // // // main.jsx
// // // import React from "react";
// // // import ReactDOM from "react-dom/client";
// // // import App from "./App";
// // // import { AuthProvider } from "./context/AuthContext";
// // // import { BrowserRouter } from "react-router-dom";

// // // ReactDOM.createRoot(document.getElementById("root")).render(
// // //   <React.StrictMode>
// // //     <BrowserRouter>            {/* <-- only here */}
// // //       <AuthProvider>
// // //         <App />
// // //       </AuthProvider>
// // //     </BrowserRouter>
// // //   </React.StrictMode>
// // // );



// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import App from "./App";
// // import { BrowserRouter } from "react-router-dom";
// // import { CartProvider } from "./context/CartContext";
// // import { WishlistProvider } from "./context/WishlistContext";

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       <CartProvider>
// //         <WishlistProvider>
// //           <App />
// //         </WishlistProvider>
// //       </CartProvider>
// //     </BrowserRouter>
// //   </React.StrictMode>
// // );


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { CartProvider } from "./context/CartContext";
// import { WishlistProvider } from "./context/WishlistContext";
// import { AuthProvider } from "./context/AuthContext";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       {/* Providers must wrap App, so state persists */}
//       <AuthProvider>
//       <CartProvider>
//         <WishlistProvider>
//           <App />
//         </WishlistProvider>
//       </CartProvider>
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);