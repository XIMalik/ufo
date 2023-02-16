import React from 'react'
import './home.css'
import Nav from '../../components/navbar/Nav'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'

export default function Home(){
  return (
    <div className="flex flex-col ">
      <Nav/>
      <Hero/> 
      <About />
    </div>
  )
}

