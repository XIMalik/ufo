import React from 'react'
import Nav from '../../components/navbar/Nav'
import resume from '/images/resume.png'
import resumepdf from '/images/resume.pdf'
import './r.css'


export default function Resume(){

  return (
    <div className='bg-gradient-to-br from-green-100 to-blue-100'>
        <Nav />
        <div className='flex flex-col justify-center items-center py-5'>
            <a href={resumepdf} download className='text-xs mb-5 sticky top-14 bg-white text-black py-2 px-5 rounded-xl ease-in duration-300 hover:bg-blue-50'>Download PDF</a>
            <img src={resume} alt="" className='mx-auto'/>
        </div>
       
    </div>
  )
}

