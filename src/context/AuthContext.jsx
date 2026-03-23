// // import React, { createContext, useContext, useState } from "react";

// // // Create the context
// // const AuthContext = createContext();

// // // AuthProvider component to wrap your app
// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null); // store logged-in user

// //   // login function
// //   const login = (userData) => {
// //     setUser(userData);
// //     // optionally: save to localStorage
// //     localStorage.setItem("user", JSON.stringify(userData));
// //   };

// //   // logout function
// //   const logout = () => {
// //     setUser(null);
// //     localStorage.removeItem("user");
// //   };

// //   // you can add register, updateProfile etc. here later

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // // Custom hook to use the auth context
// // export const useAuth = () => {
// //   return useContext(AuthContext);
// // };

// import React, { createContext, useContext, useState } from "react";

// // Create context
// const AuthContext = createContext();

// // Provider
// export const AuthProvider = ({ children }) => {
//   // ✅ Persist user on refresh
//   const [user, setUser] = useState(() => {
//     return JSON.parse(localStorage.getItem("user")) || null;
//   });

//   // ✅ Login
//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   // ✅ Logout
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook
// export const useAuth = () => useContext(AuthContext);


// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);