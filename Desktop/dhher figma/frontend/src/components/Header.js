import React, { useState } from 'react';
import dheerLogo from "../components/Assets/dheerlogo.png";
import { NavLink } from 'react-router-dom';

function Header() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="fixed top-0 w-full h-auto flex items-center font-semibold justify-between flex-wrap p-4 bg-black z-10">
     <div className="flex items-center flex-shrink-0 text-white sm:mr-0 lg:mr-72">
       <img src={dheerLogo} className="w-100 h-10 rounded-xl mr-2" alt="Logo" />
       <NavLink to="/" className="block mt-0 lg:inline-block lg:mt-0 text-white-200 ml-6">
           DHEER MARKETING (I) PVT LTD
         </NavLink>
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-white hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm  text-white lg:flex-grow">
        
         <NavLink to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           About Us
         </NavLink>
         <NavLink to="/our-business" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           OUR BUSINESS
         </NavLink>
         <NavLink to="/product" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           PRODUCTS
         </NavLink>
         <NavLink to="/industry-application" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           INDUSTRY AND APPLICATION
         </NavLink>
       </div>
       <div>
         <button className="inline-flex items-center bg-gray-400 border-0 py-2 px-4 text-white">
           Click Me
         </button>
       </div>
     </div>
   </nav>
 );
}
export default Header;

