import React from "react";
import anniversary from "../components/Assets/anniversary.png";
import Header from "./Header";

export default function Section() {
  return (
    <>
    <Header/>
      <div className="md:h-screen mt-40  text-white ">
        <div className="flex flex-shrink-0 items-center justify-center  h-[3.125rem] text-white text-center  font-bold text-[2.0rem] leading-[50px] uppercase">
          COM<span className="font-bold text-blue-600">MEET</span>ED
        </div>
        <div className="  flex flex-shrink-0 items-center justify-center   h-[3.125rem] text-white text-center font-everettmedium font-bold text-[2.0rem] leading-[50px] uppercase mt-8">
          <h1 className=" text-xl font-bold flex items-center justify-center md:text-2xl ">
            WE SUPPLY LEADING BRAND PRODUCTS
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <img className=" w-[10%]" src={anniversary} alt="/" />
        </div>
        <div className="flex justify-center items-center p-4 text-white">
          <button
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
        </div>
      </div>
    </>
  );
}
