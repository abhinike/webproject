import React from 'react'
import Navbar from '../component/Navbar'
import VCard from '../component/VCard'
import Footer from '../component/Footer'
import Carousel from '../component/Carousel'

export default function Home() {
  return (
    <div>
      <Navbar/>

      <Carousel/>
      
       <VCard/>
       
       <Footer/>
      
    </div>
  )
}
