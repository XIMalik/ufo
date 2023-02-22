import React from 'react'
import './home.css'
import Nav from '../../components/navbar/Nav'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Me from '../../components/aboutme/Me'

export default function Home(){
  return (
    <div className="flex flex-col ">
      <Nav/>
      <Hero/> 
      <Me/> 
      <About />
    </div>
  )
}

