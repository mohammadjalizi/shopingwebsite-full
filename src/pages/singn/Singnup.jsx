
import Navbar from '../Navbar/Navbar'
import { useNavigate } from "react-router-dom";

import { useState } from 'react';
import { auth } from '../../Firebase/config';
import { createUserWithEmailAndPassword } from "firebase/auth";
const Singnup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className='   '>
      <Navbar/>
<div className=' flex justify-center'>

<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className="max-w-md mx-auto">
        <div>
          <h1 className="text-2xl font-semibold">
          عضویت
          </h1>
          <h2   onClick={()=>{
navigate("/singin")

          }}  >قبلا ثبت نام کرده‌اید؟ وارد شوید</h2>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
 
            <div className="relative">
   
              <input 
              onChange={(eo)=>{
setemail(eo.target.value)

              }}
                autoComplete="off"
                id="email"
                name="email"
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Email address"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
            آدرس ایمیل
              </label>
            </div>
            <div className="relative">
              <input
              onChange={(eo)=>{
                setpassword(eo.target.value)

              }}
                autoComplete="off"
                id="password"
                name="password"
                type="password"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className=" text-left absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
              رمز عبور
              </label>
            </div>
            <div className="relative">
            <button onClick={(eo) => {
            
            eo.preventDefault();
            
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("doneeeeeeeeee")
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
              });
          }}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</div>
      
      
      </div>
  )
}

export default Singnup