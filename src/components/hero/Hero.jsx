import React from 'react'
import './hero.css'
import head from '/images/Group65.png'


export default function Hero(){
    // bg-gradient-to-b from-[#080707] to-slate-800

  return (
   <div className="heroContainer flex gap-3 items-center flex-col justify-center mb-5">
   
   
    <div className="profile flex flex-col items-center p-10 col-span-1 text-center border-[0.5px] border-solid borde-black rounded-md">
                    {/* <FontAwesomeIcon icon={faCircleUser} className="text-green-100 mb-7"/> */}
                    <div className='w-[100px] h-[100px] mb-2 rounded-full bg-red-300 overflow-hidden'>
                        <img src={head} className="w-[100%] object-contain" alt="" />
                    </div>
                    
                    <span className='text-slate-700 font-regular text-xs mb-7'>Lagos, Nigeria</span>
                    <span className='text-slate-700 font-regular text-sm mb-1'>abdulmalikawesu@gmail.com</span>
                    <span className='text-slate-700 font-regular text-sm mb-7'>+234-818-099-1568</span>
                    <span className='text-black text-lg mb-7 w-[150px]'>Web Developer & UI Designer</span>
        </div> 
    
    <div className="heroWrapper w-[100%] max-w-[1024px]">
        <div className="flex justify-center gap-5 text-center mb-2 p-5">
            <h1 className="heroText text-2xl sm:text-3xl  p-0 m-0 text-black ease-out duration-500 hover:underline underline-offset-8">Web developer</h1>
            <h1 className="heroText text-2xl sm:text-3xl p-0 m-0 text-blue-500 ease-out duration-500 hover:underline underline-offset-8 ">User Interface Design</h1>
        </div>
        <div className="description px-10 flex flex-col gap-5 justify-center">
          <span className='about-text text-lg text-slate-700 text-md w-content text-center leading-7 mt-2 mb-2 sm:mt-0 sm:mb-0'>Tech enthusiast born out of an admiration for how the internet and software works
          </span>
          <div className='flex flex-col w-[100%]  gap-3'>
            <span className='about-text text-xs text-slate-500 font-light text-center'>Check out my socials</span>
            <div className='about-text flex flex-col sm:flex-row gap-3 justify-center text-center w-[100%]'>
                <a href="https://www.linkedin.com/in/malik-awesu" target="_blank" rel='noopener noreferrer'><span className=' text-slate-700 text-md ease-out duration-500 hover:underline hover:text-blue-500 underline-offset-8'>malikawesu.linkedin.com</span></a>          
                <a href="https://www.github.com/XIMalik" target="_blank" rel='noopener noreferrer'><span className=' text-slate-700 text-md ease-out duration-500 hover:underline hover:text-slate-900-100 underline-offset-8'>malikawesu.github.com</span></a>          
                <a href="https://www.linkedin.com/in/malik-awesu" target="_blank" rel='noopener noreferrer'><span className=' text-slate-700 text-md ease-out duration-500 hover:underline hover:text-red-300 underline-offset-8'>malikawesu.dribble.com</span></a>              
            </div>
          </div>
          
        </div>
    </div>
      <div className="flex bg-gradient-to-r from-blue-200 to-red-200 justify-evenly align-center items-center w-[100%] mb-5 mt-5">
                <div className='tech bg-white  rounded-xl'>
                    <div className="flex justify-center align-center items-center gap-3 py-5 px-10">

                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="w-6 sm:w-8> ease-out duration-100 hover:scale-105" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 sm:w-8> ease-out duration-100 hover:scale-105" />   
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" className="w-6 sm:w-8 ease-out duration-100 hover:scale-105" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"  className="w-6 sm:w-8 ease-out duration-100 hover:scale-105"/>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="w-6 sm:w-8 ease-out duration-100 hover:scale-105" />
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-6  sm:w-8 ease-out duration-100 hover:scale-105" />
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" className="w-6 sm:w-8 ease-out duration-100 hover:scale-105"/>
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-6 sm:w-8 ease-out duration-100 hover:scale-105"/>
                    </div>
                </div>
                </div>
            </div>
   </div>
  )
}
