"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Artical from '../pages/news/Artical'

const Favourite = () => {
  const [newsdata,setnewsdata]=useState([])
  const [loading,setloading]=useState(false)
  const getnewsdata=()=>{
    setloading(true)
    try {
      axios.get(`http://localhost:8080/favourite`)
      .then(res =>{
        setnewsdata(res.data)
        setloading(false)
      })
     
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getnewsdata()
  },[])
  console.log('fav',newsdata)
  return (
    <div>
      <Artical data={newsdata && newsdata}/>
    </div>
  )
}

export default Favourite
