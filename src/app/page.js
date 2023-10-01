"use client"

import Navbar from './components/Navbar'
import Artical from './pages/Artical'
import NewsDetail from './pages/NewsDetail'
import NewsList from './pages/NewsList'
import ReadMoreButton from './pages/ReadMoreButton'
import News from './pages/news/page'
import Signin from './pages/signin/page'
import Signup from './pages/signup/page'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-white overflow-hidden">

      <Navbar />

    {/* <Signup/> */}
 {/* <Signin/> */}
     {/* <News/> */}
   
    {/* <NewsList/> */}
    <NewsDetail/>
    </main>
  )
}
