// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white mt-10 py-6">
//       <div className="container mx-auto text-center">
//         <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">

      {/* TOP SECTION */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">

        <div>
          <h3 className="text-white font-semibold mb-3">Luxora</h3>
          <ul className="space-y-2 text-sm">
            <li>Who are we?</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Offers</li>
            <li>New Launches</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Top Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Makeup</li>
            <li>Skin</li>
            <li>Hair</li>
            <li>Fragrance</li>
          </ul>
        </div>
      </div>

      {/* PINK BAR */}
      <div className="bg-pink-600 text-center text-white py-3 text-sm">
        © 2026 LUXORA E-RETAIL LIMITED
      </div>

      {/* BOTTOM LINKS */}
      <div className="bg-gray-200 text-gray-700 text-xs px-6 py-4">
        <p className="font-semibold mb-2">Popular Links</p>
        <p>
          Lipstick, Face Wash, Shampoo, Perfume, Sunscreen, Hair Oil,
          Body Lotion, Makeup Kit, Skincare Products...
        </p>
      </div>
    </footer>
  );
};

export default Footer;