import React, { useEffect, useRef, useState } from 'react'
import { FcPrevious,FcNext  } from "react-icons/fc";
const featuredProducts = [
           "./images/reebok_bag.jpg",
           "./images/adidas_shoe.jpg",
           "./images/liberty.jpg",
           "./images/samsung_mobile.jpg",
           "./images/rayban_glass.jpg", 
           "./images/watch.jpg",
           
      ]
      let count= 0;
      let slideInterval ;
export default function Slider() {
  const [currentIndex , setCurrentIndex] = useState(0);

const slideRef = useRef();
const removeAnimation = ()=>{
  slideRef.current.classList.remove('fade-anim')
};

  useEffect(()=>{
    slideRef.current.addEventListener('animationend',removeAnimation);
    slideRef.current.addEventListener('mouseenter',pauseSlider);
    slideRef.current.addEventListener('mouseleave',startSlider);

    startSlider();
    return ()=>{
      pauseSlider()
    }

  },[]);

  const startSlider = ()=>{
  slideInterval =  setInterval(()=>{
      handleOnNextClick()
    },3000)
  };
  const pauseSlider = ()=>{
    clearInterval(slideInterval);
  }

  const handleOnNextClick =()=>{
    count = (count +1)% featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim')
  };
  const handleOnPrevClick =()=>{
   const productsLength = featuredProducts.length;
   count = (currentIndex + productsLength-1)% productsLength;
   setCurrentIndex(count)
  }

  return (
    <>
  <div className=' md:mt-28'>
 
<div ref={slideRef} className=" p-1   select-none relative flex justify-center items-center">
       <img className=' md:w-[22rem] m-0' src={featuredProducts[currentIndex]} alt=''/>

   <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
    <button onClick={handleOnPrevClick}><FcPrevious size={20} /></button>
    <button onClick={handleOnNextClick}><FcNext size={20}/></button>
    </div>
  </div>
     </div>
     </>
  
  )
}