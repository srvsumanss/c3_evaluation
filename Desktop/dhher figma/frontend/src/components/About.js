import React from "react";
import Slider from "./Slider";
import Header from "./Header";


const About = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap bg-black">
        <div className="w-full lg:w-1/2 p-4 md:mt-28 text-black">
          <h2 className="text-3xl font-bold mb-4 text-sky-400">About Us</h2>
          <p className="text-white">
            Dheer Marketing India (DMI) initiated its operations with one branch
            in Delhi as an underdog in 2009, supplying sportswear products of
            Adidas to Army, Navy, Airforce, Coast Guard, and all paramilitary
            forces like B.S.F, CISF, CRPF, NSG, RAF, C.P.C, INCS, CSD and SAI.
            Commencing its operations with a total strength of only 2 ASM’s DMI
            paved its way to being the Country’s budding marketing firm for 21
            multinational brands like Adidas, Reebok, Rayban, Timex Watches,
            Samsung, Sony, Raymond, Kent RO, etc. Growing to the strength of 200
            employees pan India and marking its presence in 15 locations Dheer
            Marketing India has been successful in carving a niche for itself in
            the Indian market among the leading reputed brands and gaining
            respect among its peers and becoming an ISO certified Company.
          </p>
          <br/>
          <p className="text-slate-100">
            Given the positive growth Dheer Marketing India, has won accolades
            for spreading its workforce across the Country and opening its
            branches in Delhi, Ranchi, Ghaziabad, Patna, Jaipur, Mohali,
            Bangalore, Dehradun, Kolkata, Nagpur, Indore, Belgaum, Ezimala,
            Wellington and Shilong. With a plan of spreading its business across
            the country Dheer Marketing India is ready to open 5 other branches
            in the coming financial year. While bringing about a change in its
            business ideals and work force Dheer Marketing India has been
            thriving in providing various in-vogue accessories to its clients
            and growing in its business with different sectors of the Industry.
            As a marketing firm, Dheer has made its mark by establishing itself
            as a reliable and reputed firm amongst the top brands of the world.
            Also being awarded as the best distributor by Adidas Dheer has shown
            a tremendous growth in its overall working. In 2015 Dheer Marketing
            India had launched its own brand, Topflight which provides
            accessories like backpack, travel bag, boots, uniforms, and security
            and survival equipments for the various military forces of the
            country. Today Dheer Marketing India is ready to move ahead along
            with its partners to a better, bright & profitable future.
          </p>
        </div>

        {/* Image Slider */}
        <div className="w-full lg:w-1/2 p-4">
          <Slider />
        </div>
      </div>

          
      
      
    </>
  );
};

export default About;
