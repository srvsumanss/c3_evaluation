import React, { useState, useEffect } from "react";
import anniversary from "../components/Assets/anniversary.png";
import Header from "./Header";

export default function Section() {
  const fullName = "WE SUPPLY LEADING BRAND PRODUCTS";
  const words = fullName.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0); // Corrected initialization

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < words.length - 1) {
          console.log(words[prevIndex]);
          return prevIndex + 1;
        }
        clearInterval(interval);
        return prevIndex;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <>
      <Header />
      <div className="md:h-auto mt-40 text-white">
        <div className="flex flex-shrink-0 items-center justify-center h-[3.0rem] text-white text-center font-semibold text-[2.0rem] leading-[40px] uppercase">
          COM<span className="font-bold text-blue-600">MEET</span>ED
        </div>
        <div className="flex flex-row space-x-4 items-center justify-center h-[3.125rem] text-white text-center font-everettmedium font-medium text-[1.0rem] leading-[25px] uppercase m-5">
          {words.slice(0, currentIndex).map((word, index) => (
            <h1
              className=" text-xl font-bold  items-center mt-10 justify-center md:text-2xl"
              key={index}
            >
              {word}
            </h1>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10 sm:scroll-m-10">
          <img className="w-[10%]" src={anniversary} alt="/" />
        </div>
        <div className="flex justify-center items-center p-4 text-white">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
        </div>
      </div>
    </>
  );
}
