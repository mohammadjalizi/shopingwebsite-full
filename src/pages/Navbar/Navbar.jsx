import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='   md:mx-96 md:my-5 flex justify-between '>
        

<div>  <h1>icons</h1>   </div>
<div  className=' flex list-none  gap-7 '> 
    
     <li> صفحه  اصلی </li> 
     <li>   فروشگاه </li> 
     <li>    در بار ه ی ما </li> 
     
       </div>

{/* icons */}
<div className=' flex gap-6 '>  
    <div>

<FiShoppingCart className='   size-9 '/>

    </div>
    <div>
<FaRegUser/>

    </div>
    
</div>

    </div>
  )
}

export default Navbar