import React from "react";
import Slider from "./Slider";

export default function About() {
  return (
    <>
      <div className="sm:flex-row-reverse md:fleflex-row relative bg-slate-400   ">
        <div className="w-[60%]">
          <div className="mt-10 break-words">
            <div className="px-6 pt-6 md:flex  break-words">
              <button
                type="button"
                className="flex py-2.5 px-5 me-2 mb-2 text-lg font-semibold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                About Us
              </button>
            </div>

            <h1 className="text-white text-xl px-6">Get to Know Us</h1>
            <p className="text-white p-6   break-words  text-[17px] h-auto">
              {/* Your content here */}
              Dheer Marketing India (DMI) initiated its operations with one
              branch in Delhi as an underdog in 2009, supplying sportswear
              products of Adidas to Army, Navy, Airforce, Coast Guard, and all
              paramilitary forces like B.S.F, CISF, CRPF, NSG, RAF, C.P.C, INCS,
              CSD and SAI. Commencing its operations with a total strength of
              only 2 ASM’s DMI paved its way to being the Country’s budding
              marketing firm for 21 multinational brands like Adidas, Reebok,
              Rayban, Timex Watches, Samsung, Sony, Raymond, Kent RO, etc.
              Growing to the strength of 200 employees pan India and marking its
              presence in 15 locations Dheer Marketing India has been successful
              in carving a niche for itself in the Indian market among the
              leading reputed brands and gaining respect among its peers and
              becoming an ISO certified Company.
            </p>
          </div>
        </div>
        <div className=" m-2">
          <Slider />
        </div>
      </div>
    </>
  );
}
