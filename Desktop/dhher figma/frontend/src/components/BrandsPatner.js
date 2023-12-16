import React from "react";
import "../components/Brands.css";
import adidas from "../components/Assets/download.png";
import rebook from "../components/Assets/reboolk.png";
import park from "../components/Assets/park.png";
import raymond from "../components/Assets/raymond.png";
import rupa from "../components/Assets/rupa.png";
import yogue from "../components/Assets/yogue.png";
import timax from "../components/Assets/timax.png";
import sony from "../components/Assets/sony.png";
import samsung from "../components/Assets/samsung.png";
import rayben from "../components/Assets/rayban.png";
import liberty from "../components/Assets/liberty.png";


const BrandsPatner = () => (
  <>
    <div className="text-white p-5 text-2xl">
        <h1>Our Top Brands</h1>
        </div>
    <div className="">
      
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 grid-rows-6 md:grid-rows-2 gap-4 h-auto w-auto p-5">
        <div className="bg-white cursor-pointer hover:scale-105">
          <img src={adidas} alt="/" />
        </div>
        <div className="bg-white cursor-poiner hover:scale-105">
          <img className="w-fit p-10" src={rebook} alt="/" />
        </div>
        <div className="bg-amber-100 cursor-poiner hover:scale-105">
          <img className="w-fit h-auto "  src={yogue} alt="/" />
        </div>
        <div className="bg-violet-100 cursor-poiner hover:scale-105 ">
          <img className="w-fit pt-10 hover:scale-105"  src={park} alt="/" />
        </div>
        <div className="bg-fuchsia-100  cursor-poiner hover:scale-105 ">
          <img src={rupa} alt="/" />
        </div>
        <div className="bg-blue-100  cursor-poiner hover:scale-105 ">
          <img src={raymond} alt="/" />
        </div>
        <div className="bg-blue-100  cursor-poiner hover:scale-105 ">
          <img src={liberty} alt="/" />
        </div>
        <div className="bg-blue-100  cursor-poiner hover:scale-105 ">
          <img src={timax} alt="/" />
        </div>
        <div className="bg-blue-100  cursor-poiner hover:scale-105 ">
          <img src={rayben} alt="/" />
        </div>
        <div className="bg-blue-100  cursor-poiner hover:scale-105 ">
          <img src={sony} alt="/" />
        </div>
        <div className="bg-blue-100  cursor-poiner hover:scale-105 ">
          <img src={samsung} alt="/" />
        </div>
        
      </div>
    </div>
  </>
);

export default BrandsPatner;
