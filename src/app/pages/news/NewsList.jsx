"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Artical from './Artical'
import Loading from '../Loading/page'

const NewsList = () => {
  const [newsdata,setnewsdata]=useState([])
  const [loading,setloading]=useState(false)
  const getnewsdata=()=>{
    setloading(true)
    try {
      axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=8bd21832b3fd436b9925220bd12e54d8`)
      .then(res =>{
        setnewsdata(res?.data?.articles)
        setloading(false)
      })
     
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getnewsdata()
  },[])

 
  return (
    <>
    <div className='w-full items-center justify-center'>
    <h1 className='text-gray-600 mt-12 text-center text-2xl md:text-4xl lg:text-4xl font-bold'>Welcome The News App</h1>
    </div>
    <div
         class="w-[90%]  md:w-[50%] lg:w-[50%] mt-10  mx-auto flex border w-z items-center p-4 space-x-6  rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
         <div class="flex w-full bg-gray-100 p-4  space-x-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input id="cityname" name="cityname" class="w-[100%] bg-gray-100 outline-none" type="text"
               placeholder="Search news here ..." />
         </div>

         <div 
            class="bg-indigo-500  text-center hover:bg-blue-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            <span>Search</span>
         </div>
       
        
      </div>
    {loading && <div className='w-full mt-32'><Loading/></div>} 
    <div className='w-[95%] mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
      
      {
               newsdata.map(el => {
                   return (
                     <Artical data={...el}  />
                   )
               })
           }
    
   </div>
    </>
   
  )
}

export default NewsList
