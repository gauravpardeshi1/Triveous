import React from 'react'

const NewsDetail = () => {
    return (
        <>
            <article className='border  bg-gray-100'>

                <section className="  flex flex-col w-[80%] pb-24 mx-auto mt-20 relative">

                    <h1 className="pt-5  pb-8 font-serif text-xl tracking-wider capitalize xs:text-4xl sm:text-3xl lg:text-4xl text-dark ">India vs England Live Score, Cricket World Cup 2023 Warm Up Match: Start Of Play Delayed Due To Rain After India Opt To Bat vs England | Cricket News - NDTV Sports</h1>

                    {true && <img src={'https://c.ndtvimg.com/2023-09/gk6f8lqo_rohit-sharma-afp_625x300_12_September_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675'} className="object-cover w-full rounded-lg shadow-md" />

                    }
                    <a href="" className='hover:cursor-pointer justify-end absolute right-5 mt-56  md:mt-48 lg:mt-48 '>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-gray-100 hover:text-red-500 transition-colors duration-300"
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
                    <div className="">
                        <div className="flex flex-wrap justify-between py-5 text-xs sm:divide-x-2  sm:space-x-4">
                            <h2 className="w-full space-x-2 font-bold xs:w-1/2 sm:w-auto">
                                <span className="text-gray-900">  By:</span>
                                <span className="text-gray-600">
                                    Monika Thapa
                                </span>
                            </h2>


                        </div>
                        <p className="py-5 text-lg text-left break-words " > It was a great night for Trick Williams as he defeated Dominik Mysterio to win the North American Championship at NXT No Mercy. But his close friend from the Trick Melo Gang didn’t have a good time on Saturday. Carmelo Hayes lost his NXT Championship to Ilja Dragunov later that night. The two close friends…The post Possible Heel Turn Incoming: Trick Williams’ Title Win Over Dominik Mysterio Gets His Close Friend Licking His Chops appeared first on EssentiallySports.</p>
                        {true && <p className="text-green-800 text-2xl  ">Read Full Article <a href='#' className="text-blue-500 hover:underline underline-offset-2" target="_blank">here</a>.</p>}
                    </div>
                </section>
            </article>
        </>
    )
}

export default NewsDetail
