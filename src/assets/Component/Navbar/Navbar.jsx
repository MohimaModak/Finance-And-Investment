import React, { useState } from "react";
import logo from "../../../Gallery/logo.png";
import { Link } from "react-scroll";
import "./Navbar.css"

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-amber-700 font-medium top-0 z-50">

      <div className="md:hidden sm:block text-sm ml-2 mt-2.5" onClick={toggleButton}>
        <div className="w-8 h-1 bg-amber-700 mt-1"></div>
        <div className="w-8 h-1 bg-amber-700 mt-1"></div>
        <div className="w-8 h-1 bg-amber-700 mt-1"></div>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="flex justify-center items-center gap-3">
          <img src={logo} className="w-10" />
          <h1 className=" text-xl uppercase font-extrabold">InvestWise</h1>
        </div>
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


      <div className="flex justify-between items-center bg bg-orange-200 text-amber-700">
        <div className="hidden md:block w-full">
          <nav className="navbar flex justify-between items-center">
            <div className="flex justify-center items-center gap-3">
              <img src={logo} className="w-14" />
              <h1 className=" font-medium text-3xl uppercase">InvestWise</h1>
            </div>
            <div className=" lg:flex justify-center items-center gap-10">
              <div>
                <Link to="/" smooth={true} duration={1000} className="text-xl">
                  Home
                </Link>
              </div>
              <div>
                <Link to="/Reason" smooth={true} duration={1000} className="text-xl">
                  Why Us
                </Link>
              </div>
              <div>
                <Link to="/Opportunities" smooth={true} duration={1000} className="text-xl">
                  Opportunities
                </Link>
              </div>
              <div>
                <Link to="/Security" smooth={true} duration={1000} className="text-xl">
                  Security
                </Link>
              </div>
              <div>
                <Link to="/Price" smooth={true} duration={1000} className="text-xl">
                  Price
                </Link>
              </div>
              <div>
                <Link to="/Testimonial" smooth={true} duration={1000} className="text-xl">
                  Testimonial
                </Link>
              </div>
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
