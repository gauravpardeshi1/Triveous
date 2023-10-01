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
    <h1 className='text-gray-600 mt-12 text-center text-4xl font-bold'>Welcome The News App</h1>
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
