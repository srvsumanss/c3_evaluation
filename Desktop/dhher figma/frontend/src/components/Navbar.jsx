import React, { useState } from 'react';
import '../components/Navbar.css';
import dheerLogo from "../components/Assets/dheerlogo.png"
import { MdOutlineClose } from "react-icons/md";
import DotsAnimation from './Animation';
import Section from './Section';
// import DotsAnimation from './Animation';



export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <>
    <div className="flex-shrink-0 flex  items-center text-white fixed w-full top-0  bg-black  border-gray-400 py-2 justify-between">
      <a href="/" className='flex items-center gap-[50px]'>
        <img className='h-[50px] w-[70px] ml-2' src={dheerLogo} alt="logo" />
        <h1 className='text-right font-bold' >DHEER MARKETING (I) LTD</h1>
      </a>
      
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          {/* <DotsAnimation/> */}
         
          <div className="HAMBURGER-ICON space-y-2" onClick={toggleNav}>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav py-1"}>
            <DotsAnimation/>
            <div className="closeButton h-[9%]w-[9%]" onClick={toggleNav}>
              <MdOutlineClose/>
          
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About Us</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Our Business</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Products</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Industry and Application</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden text-white space-x-8 mr-2 lg:flex">
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/portfolio">Our Business</a>
          </li>
          <li>
            <a href="/contact">Products</a>
          </li>
          <li>
          <a href="/contact">Industry and Application</a>
          </li>

        </ul>
      </nav>

      
    </div>

    {/* <div className="flex flex-col flex-shrink-0 justify-center w-[20.5625rem] h-[5.1875rem] text-white text-center font-['Inter'] text-[4.4375rem] leading-[79.2px] uppercase">Commed</div> */}
    </>
  );
}
