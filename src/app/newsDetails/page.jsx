'use client'

import React from 'react'
import { useSearchParams } from "next/navigation";

const NewsDetail = () => {
    const data = useSearchParams()
    const newsdata= {
        title: data.get('title'),
        author: data.get('author'),
       
        description: data.get('description'),
        urlToImage: data.get('urlToImage'),
        url: data.get('url')
       
    }

    const Description = newsdata.description ? newsdata.description : "";
    return (
        <>
            <article className='border  bg-gray-100'>

                <section className="  flex flex-col w-[80%] pb-24 mx-auto mt-20 relative">

                    <h1 className="pt-5  pb-8 font-serif text-xl tracking-wider capitalize xs:text-4xl sm:text-3xl lg:text-4xl text-dark "> {newsdata.title}</h1>

                    {true && <img src={newsdata.urlToImage}  className="object-cover w-full rounded-lg shadow-md" />

                    }
                   
                    <div className="">
                        <div className="flex flex-wrap justify-between py-5 text-xs sm:divide-x-2  sm:space-x-4">
                            <h2 className="w-full space-x-2 font-bold xs:w-1/2 sm:w-auto">
                                <span className="text-gray-900">  Author:</span>
                                <span className="text-gray-600">
                                    {newsdata.author}
                                </span>
                            </h2>


                        </div>
                        <p className="py-5 text-lg text-left break-words " > {Description}</p>
                        {true && <p className="text-green-800 text-2xl  ">Read Full Article <a href={newsdata.url} className="text-blue-500 hover:underline underline-offset-2" target="_blank">here</a>.</p>}
                    </div>
                </section>
            </article>
        </>
    )
}

export default NewsDetail
