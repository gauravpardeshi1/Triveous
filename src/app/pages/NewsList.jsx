import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Artical from './Artical'

const NewsList = () => {
  const [newsdata,setnewsdata]=useState([])
  const getnewsdata=()=>{
    try {
      axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=8bd21832b3fd436b9925220bd12e54d8`)
      .then(res => setnewsdata(res?.data?.articles))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getnewsdata()
  },[])
 
  return (
    <div className='w-[95%] mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
         {
                newsdata.map(el => {
                    return (
                      <Artical  title={el.title} image={el.urlToImage}/>
                    )
                })
            }
     
    </div>
  )
}

export default NewsList
