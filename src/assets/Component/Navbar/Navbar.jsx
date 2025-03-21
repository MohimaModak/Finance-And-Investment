import React, { useState } from "react";
import menu from "../../../Gallery/menu.png";
import { Link } from "react-scroll";
import "./Navbar.css"

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-amber-700 font-medium top-0 z-50">
      {/* Mobile Navbar */}
      <div className="md:hidden sm:block text-sm" onClick={toggleButton}>
        <span className="cursor-pointer p-5"><img src={menu} className="w-10" alt="menu" /></span>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="navbar-links">
          <Link to="/" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Home
          </Link>
          <Link to="/Reason" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Why Us
          </Link>
          <Link to="/Opportunities" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Opportunities
          </Link>
          <Link to="/Security" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Security
          </Link>
          <Link to="/Price" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Price
          </Link>
          <Link to="/Testimonial" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Testimonial
          </Link>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="flex justify-center items-center ">
        <div className="hidden md:block border-b-2 border-amber-700 w-max mt-3">
          <nav className="navbar flex justify-center items-center">
            <div className="navbar-links lg:flex justify-center items-center">
              <Link to="/" smooth={true} duration={1000} className="text-xl mr-5 text">
                Home
              </Link>
              <Link to="/Reason" smooth={true} duration={1000} className="text-xl mr-5 text">
                Why Us
              </Link>
              <Link to="/Opportunities" smooth={true} duration={1000} className="text-xl mr-5 text">
                Opportunities
              </Link>
              <Link to="/Security" smooth={true} duration={1000} className="text-xl mr-5 text">
                Security
              </Link>
              <Link to="/Price" smooth={true} duration={1000} className="text-xl mr-5 text">
                Price
              </Link>
              <Link to="/Testimonial" smooth={true} duration={1000} className="text-xl mr-5 text">
                Testimonial
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}


























// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import menuIcon from "../../../Gallery/menu.png"; // Ensure correct path
// import "./Navbar.css";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="fixed w-full bg-white shadow-md top-0 z-50">
//       <div className="container mx-auto px-4 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div>
//           <Link to="/" className="text-2xl font-bold text-amber-700">
//             MyBrand
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 text-lg font-medium">
//           <Link to="/" className="hover:text-amber-600">Home</Link>
//           <Link to="/Reason" className="hover:text-amber-600">Why Us</Link>
//           <Link to="/Opportunities" className="hover:text-amber-600">Opportunities</Link>
//           <Link to="/Security" className="hover:text-amber-600">Security</Link>
//           <Link to="/Testimonial" className="hover:text-amber-600">Testimonial</Link>
//           <Link to="/Price" className="hover:text-amber-600">Price</Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             <img src={menuIcon} className="w-8" alt="menu" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
//         <div className="flex flex-col items-center space-y-6 mt-10 text-xl">
//           <Link to="/" className="hover:text-amber-600" onClick={toggleMenu}>Home</Link>
//           <Link to="/Reason" className="hover:text-amber-600" onClick={toggleMenu}>Why Us</Link>
//           <Link to="/Opportunities" className="hover:text-amber-600" onClick={toggleMenu}>Opportunities</Link>
//           <Link to="/Security" className="hover:text-amber-600" onClick={toggleMenu}>Security</Link>
//           <Link to="/Testimonial" className="hover:text-amber-600" onClick={toggleMenu}>Testimonial</Link>
//           <Link to="/Price" className="hover:text-amber-600" onClick={toggleMenu}>Price</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
