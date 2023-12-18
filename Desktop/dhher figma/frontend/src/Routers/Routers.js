import React from 'react'
import { Route ,Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import ChairmainMessgage from '../components/ChairmainMessgage';
import ContactUs from '../components/ContactUs';
import OurBusiness from '../components/OurBusiness';

function Routers() {
  return (
    <>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/chairmain-message' element={<ChairmainMessgage/>} />
       <Route path='/contact-us' element={<ContactUs/>} />
       <Route path='/our-business' element={<OurBusiness/>} />
    </Routes>    
    </>
    
    
  )
}

export default Routers