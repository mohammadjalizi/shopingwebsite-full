import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='    md:my-5 py-4  md:bg-gradient-to-r from-sky-500 to-indigo-500  '>
  <div className=' md:mx-96 flex justify-between  '>
    
   
<div className=' md:hidden '>  menu </div>
<div>  <h1> shoping</h1>   </div>
<div  className='   hidden md:flex list-none  gap-7 '> 
    
     <li className=' cursor-pointer hover:text-pink-400'> صفحه  اصلی </li> 
     <li className=' cursor-pointer hover:text-pink-400'>   فروشگاه </li> 
     <li className=' cursor-pointer hover:text-pink-400'>    در بار ه ی ما </li> 
     
       </div>

{/* icons */}
<div className=' flex gap-6 '>  
    <div>

<FiShoppingCart className='   size-7 '/>

    </div>
    <div>
<FaRegUser className='  size-7'/>

    </div>
    
</div>
</div>    
    </div>
  )
}

export default Navbar