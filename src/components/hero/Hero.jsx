import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFire, faMeteor, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import './hero.css'
import { useNavigate } from 'react-router-dom'


export default function Hero(){

  const navigate = useNavigate()

  const handleClicktoyt = () =>{
        navigate("www.youtube.com")
  }

  return (
   <div className="heroContainer flex gap-10 items-center flex-col justify-center mb-[1000px]">
    <div className="heroWrapper w-[100%] max-w-[1024px]">
        <div className="flex-col text-center">
            <h1 className="heroText md:text-[150px] lg:text-[200px] p-0 m-0 text-slate-300">Web developer</h1>
        </div>
        <div className="description px-10 flex gap-5 justify-between">
          <span className='font-extralight text-slate-400 text-md w-[800px]'>Tech enthusiast born out of an admiration for how the internet and software works
          </span>
          <div className='flex flex-col gap-3'>
            <span className='about-text text-xs text-slate-500 font-light flex gap-2 align-center items-center'>Check out my socials <FontAwesomeIcon icon={faArrowRightLong} className="text-white"/></span>
            <div className='about-text flex gap-3'>
            <a href="https://www.linkedin.com/in/malik-awesu" target="_blank" rel='noopener noreferrer'><span className=' text-slate-400 text-md ease-out duration-500 hover:underline hover:text-green-100 underline-offset-8'>malikawesu.linkedin.com</span></a>          
            <a href="https://www.github.com/XIMalik" target="_blank" rel='noopener noreferrer'><span className=' text-slate-400 text-md ease-out duration-500 hover:underline hover:text-green-100 underline-offset-8'>malikawesu.github.com</span></a>          
            <a href="https://www.linkedin.com/in/malik-awesu" target="_blank" rel='noopener noreferrer'><span className=' text-slate-400 text-md ease-out duration-500 hover:underline hover:text-green-100 underline-offset-8'>malikawesu.dribble.com</span></a>          
            
          </div>
          </div>
          
        </div>
    </div>
      <div className="flex  bg-green-100 justify-evenly align-center items-center w-[100%]">
                <div className='bg-[#080707] rounded-xl'>
                    <div className="flex justify-center align-center gap-3 py-5 px-10">

                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="w-8 sm:w-8> ease-out duration-100 hover:scale-105" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 sm:w-8> ease-out duration-100 hover:scale-105" />   
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" className="w-8 sm:w-8 ease-out duration-100 hover:scale-105" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"  className="w-18 sm:w-8 ease-out duration-100 hover:scale-105"/>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="w-8 sm:w-8 ease-out duration-100 hover:scale-105" />
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8  sm:w-8 ease-out duration-100 hover:scale-105" />
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" className="w-8 sm:w-8 ease-out duration-100 hover:scale-105"/>
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 sm:w-8 ease-out duration-100 hover:scale-105"/>
                    </div>
                </div>
                </div>
            </div>
   </div>
  )
}
