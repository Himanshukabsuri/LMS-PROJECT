import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MiddleCover from '../components/MiddleCover'
import Footer from '../components/Footer'
import BookCard from '../components/BookCard'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <BookCard/>
    <MiddleCover/>
    <Footer/>
    </>
    
  )
}

export default Home
