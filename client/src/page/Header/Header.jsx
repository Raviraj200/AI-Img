import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (

         <header className=" w-full flex justify-between items-center bg-white sm:px-8 px-1 bottom-b bottom-b-[#e6ebf4]">
         <div className="container -mx-8 flex flex-wrap  flex-col md:flex-row items-center -mt-2  " >
           <Link className="flex title-font font-medium mr-14 items-center text-gray-900  mb-1 md:mb-0">
              <img src="logo.png" className=' w-10  h-10 mr-32 mr-5' alt="logo" />
             {/* <Link className="ml-3 text-xl mr-7" to="/">AI Image</Link> */}
           </Link>
          
         </div>
              
       <Link className="flex ml-auto mb-4 text-white bg-black  py-1 rounded-full  px-20 focus:outline-none hover:bg-white hover:text-black" to="/create-post">Create
       <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1  my-auto" viewBox="0 0 24 24">
           <path d="M5 12h14M12 5l7 7-7 7" />
         </svg>
       </Link>
    
       </header>
  )
}

export default Header