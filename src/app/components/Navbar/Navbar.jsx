"use client"

import React from 'react'
import { useState } from "react";
import Link from 'next/link';

const Navbar = () => {
const [Toggle,setToggle]=useState(false)

const handleToggle=()=>{
    setToggle(!Toggle)
    // console.log('Toggle')
}



  return (
    <div className="w-full  flex flex-wrap sticky top-0 z-10    left-0 right-0 ">
    <section className="relative mx-auto w-full">
    
        <nav className="flex justify-between bg-gray-700  shadow-md text-white w-full">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">


                <a className="text-white text-2xl font-semibold" >Triveous</a>
              
               
                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
   
                    <li><a  className="text-white font-medium hover:text-blue-300" href="/">Dashboard</a></li>
                   
                    <li><a  className="text-white font-medium hover:text-blue-300"
                            href="/favourite">Favorite</a></li>
 <li><a  className="text-white font-medium hover:text-blue-300" href="">Help</a>
                    </li>
                </ul>
               
                <div className="hidden xl:flex  space-x-5 items-center">

              
                    <a href="/signup" className="text-white w-6 h-6 flex items-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                    <a  className='hover:cursor-pointer items-center'  href="/favourite" >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-100  transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 21.35l-1.45-1.32C5.4 16.13 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.63-8.55 11.54L12 21.35z"
                            fill="currentColor"
                        ></path>
                    </svg>


                </a>

                </div>
            </div>

            <a   className=" xl:hidden flex   mr-6 items-center" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <line x1="12" y1="16" x2="12" y2="12" strokeWidth="2" />
                    <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2" />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500">
                    </span>
                </span>
            </a>

            <a onClick={handleToggle} data-collapse-toggle="navbar-default" className="navbar-burger self-center mr-12 xl:hidden" href="#"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </a>
        </nav>
      {Toggle &&  <div  className="w-full bg-gray-500  md:hidden" id="navbar-default">
            <ul
                className="font-medium grid grid-cols  p-4 md:p-0   rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                    <a 
                        className="block py-2  pl-3 pr-4 text-white rounded  md:border-0 md:hover:text-blue-600 md:p-0 ">Dashboard</a>
                </li>

                <li>
                    <a 
                        className="block py-2  pl-3 pr-4   text-white rounded   md:border-0 md:hover:text-blue-700 md:p-0 ">Favorite</a>
                </li>
                <li>
                    <a 
                        className="block py-2  pl-3 pr-4 text-white rounded  md:border-0 md:hover:text-blue-600 md:p-0 ">Help</a>
                </li>

               
            </ul>
        </div> }   
    </section>
</div>
  )
}

export default Navbar
