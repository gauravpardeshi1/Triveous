"use client"

import React, { useEffect } from 'react'
import { useState } from "react";
import Link from 'next/link';
import { UserAuth } from "../../context/AuthContext";

const Navbar = () => {
    const { user, googleSignIn, logOut,authData } = UserAuth();

const [Toggle,setToggle]=useState(false)
const [loading, setLoading] = useState(true);

const handleToggle=()=>{
    setToggle(!Toggle)
    // console.log('Toggle')
}
const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
useEffect(()=>{
    const checkAuthentication = async () => {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setLoading(false);
      };
      checkAuthentication();
},[user])

//console.log('formuser',authData)

  return (
    <div className="w-full  flex flex-wrap sticky top-0 z-10    left-0 right-0 ">
    <section className="relative mx-auto w-full">
    
        <nav className="flex justify-between bg-gray-700  shadow-md text-white w-full">
            <div className="px-5 xl:px-12 py-6 flex w-full justify-center  items-center">


                <a className="text-white text-2xl  font-semibold" >Triveous</a>
              
               
                <ul className="hidden   md:flex justify-start w-[70%]  px-4 mx-auto font-semibold font-heading space-x-12">
   
                    <li><a  className="text-white font-medium hover:text-blue-300" href="/">Dashboard</a></li>
                   
                    <li><a  className="text-white font-medium hover:text-blue-300"
                            href="/favourite">Favorite</a></li>
 <li><a  className="text-white font-medium hover:text-blue-300" href="">Help</a>
                    </li>
                </ul>
               
                <div className="hidden  xl:flex  space-x-5 items-center">

              {/* {user ? <h1>Welcome {user.displayName}</h1>:
                    <a href="/signup" className="text-white w-6 h-6 flex items-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>}
                {user && <button onClick={handleSignOut }>Logout</button> } */}
                {/* {loading ? null : (!user || !authData)  ? (
        <ul className="flex">
         <Link href='/signin'>  <li  className="p-2 cursor-pointer">
            Login
          </li></Link>
          <Link href='/signup'> <li  className="p-2 cursor-pointer">
            Sign up
          </li></Link>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName} </p>
          <p className="cursor-pointer text-end" onClick={handleSignOut}>
            Sign out
          </p>
        </div>
      )} */}

{loading ? null : (user || authData) ? (
  <div>
    <p>Welcome, {(user && user.displayName) || (authData && authData.displayName)}</p>
    <p className="cursor-pointer text-end" onClick={handleSignOut}>
      Sign out
    </p>
  </div>
) : (
  <ul className="flex">
    <Link href='/signin'>
      <li className="p-2 cursor-pointer">
        Login
      </li>
    </Link>
    <Link href='/signup'>
      <li className="p-2 cursor-pointer">
        Sign up
      </li>
    </Link>
  </ul>
)}
                </div>
            </div>
         <div className=' md:hidden lg:hidden flex justify-end gap-5 items-center w-[100%]'>
         <a href="/signup" className="text-white w-6 h-6 flex items-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>

            <a onClick={handleToggle} data-collapse-toggle="navbar-default" className="navbar-burger self-center mr-12 xl:hidden" href="#"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </a>
         </div>
            
        </nav>
      {Toggle &&  <div  className="w-full bg-gray-500  md:hidden" id="navbar-default">
            <ul
                className="font-medium grid grid-cols  p-4 md:p-0   rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                    <a href='/'
                        className="block py-2  pl-3 pr-4 text-white rounded  md:border-0 md:hover:text-blue-600 md:p-0 ">Dashboard</a>
                </li>

                <li>
                    <a href='/favourite'
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
