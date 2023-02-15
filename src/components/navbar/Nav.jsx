import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFire, faMeteor } from '@fortawesome/free-solid-svg-icons'
import './nav.css'
import { useNavigate } from 'react-router-dom'


export default function Nav(){

    const navigate = useNavigate()

    const goAbout = () => {
        navigate("/aboutme")
    }
    const goHome = () => {
        navigate("/")
    }

  return (
   <div className="navContainer z-40 flex justify-center bg-[#080707] w-[100%] max-w-[1024] sticky top-0 mb-2 border-gray-700 border-solid">
    <div className="navWrapper p-5 w-[100%] max-w-[1024px]">
        <div className="navbar flex  justify-between align-center items-center">
            <h1  onClick={goHome} className="logo text-white text-xs hover:text-green-100">Malik Awesu</h1>
            <div className="nav-text flex gap-4 text-gray-300">
                <span onClick={goAbout} className="ease-out duration-500 hover:underline hover:text-green-100 underline-offset-8">Work</span>
                <span onClick={goAbout} className="ease-out duration-300 hover:underline hover:text-green-100 underline-offset-8">About</span>
                <span onClick={goAbout} className="ease-out duration-500 hover:underline hover:text-green-100 underline-offset-8">Contact</span>
            </div>
        </div>
    </div>
   </div>
  )
}
