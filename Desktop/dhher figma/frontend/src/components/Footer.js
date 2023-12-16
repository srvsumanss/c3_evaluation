import React from 'react'
import footer_dheerlogo from "../components/Assets/footer-logo.png"


export default function Footer() {
  return (
    <div>
       
         <footer className="text-white p-4 text-center">
         <div className='text-2xl from-neutral-600 md:text-4xl mx-5 flex items-center justify-center '>
         <div className='p-4 '>
        <img className='w-[75%]' src={footer_dheerlogo} alt='/'/>
    </div>
            <h1>Dheer Marketing India</h1>
        </div>
        <div >
            <ul className='flex flex-col md:flex-row justify-center items-center space-x-5 my-5'>
                <li className='hover:underline hover:underline-offset-8 cursor-pointer'>Home</li>
                <li className='hover:underline  hover:underline-offset-8  cursor-pointer'>About Us</li>
                <li className='hover:underline  hover:underline-offset-8  cursor-pointer'>Brands</li>
                <li className='hover:underline  hover:underline-offset-8  cursor-pointer'>Our Teams</li>
                <li className='hover:underline  hover:underline-offset-8  cursor-pointer'>News Media</li>
                <li className='hover:underline  hover:underline-offset-8  cursor-pointer'>Contact Us</li>
                <li className='hover:underline hover:underline-offset-8  cursor-pointer'>Chairman Message</li>
            </ul>
        </div>
        <div className='flex flex-row justify-center items-center space-x-5 my-5' > 
            <p>Plot no.-148, First Floor, F.I.E. , Patparganj Industrial Area,

East Delhi-110092</p>
        </div>
      <p>&copy; 2023 Dheer Marketing India. All rights reserved.</p>
    </footer>
    </div>
  )
}
