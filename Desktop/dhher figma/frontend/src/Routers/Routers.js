import React from 'react'
import { Route ,Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';

function Routers() {
  return (
    <>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/' element={<Home/>} />
       <Route path='/' element={<Home/>} />
    </Routes>    
    </>
    
    
  )
}

export default Routers