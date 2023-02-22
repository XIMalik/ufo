import React from 'react'
import avatar from '/images/avatar.png'
import './me.css'
import { useNavigate } from 'react-router-dom'
import Resume from '../../pages/Resume/Resume'

export default function Me (){
  const navigate = useNavigate()

  const goHome = () => {
      navigate("/myresume")
  }

  return (
    <>
    <div className="flex justify-center items-center">
      <div className='sm:flex justify-center items-center w-[100%] max-w-[1024px] px-10 sm:py-0 pt-5  bg-gradient-to-r from-green-100 to-blue-100'>
        <div className='flex flex-col gap-3 text-center sm:text-left'>
          <h1 className='heroText text-5xl'>Hello world</h1>
          <p>I am a Frontend Developer and UI Designer passionate about building and designing products to enhance businesses and individuals</p>
          <button onClick={goHome} className='bg-white ease-in duration-150 text-xs hover:text-green-100 hover:bg-slate-800 px-5 py-3 rounded-lg sm:w-[60%] sm:text-center'>View my resume</button>
        </div>
        <img src={avatar} alt="" className='w-[50%] mx-auto'/>

      </div>
    </div>
    </>
  )
}
