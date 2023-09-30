"use client"

import Navbar from './components/Navbar'
import Signin from './pages/signin/page'
import Signup from './pages/signup/page'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-white overflow-hidden">

      <Navbar />

    {/* <Signup/> */}
 <Signin/>

    </main>
  )
}
