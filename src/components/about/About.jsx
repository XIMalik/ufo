import React from 'react'
import head from '/images/Group65.png'
import phone from '/images/iPhone 14 - 2.png'
import gar from '/images/garage2.png'
import car from '/images/carslot.png'
import web from '/images/web.png'
import rndm from '/images/rndm.png'
import mercy from '/images/mercy.png'
import Nav from '../navbar/Nav'
import './about.css'

export default function About(){
  return (
    <div>
        <div className="containe z-0 flex gap-10 flex-col justify-center items-center mt-5">
            <div className='w-[100%] max-w-[1024px] grid grid-cols-6'>
                <div className="work flex flex-wrap justify-center col-span-6 p-5">
                    <div className="item w-[300px] h-[200px] rounded-lg overflow-hidden">
                        <img src={phone} alt="" className='w-[100%] object-cover ease-in duration-150 delay-75 hover:-translate-y-6'/>
                    </div>
                    <div className="item bg-red-100 w-[300px] h-[200px] rounded-lg overflow-hidden">
                        <img src={gar} alt="" className='w-[100%] object-cover ease-in duration-150 delay-75 hover:-translate-y-6'/>
                    </div>
                    <div className="item bg-red-100 w-[300px] h-[200px]  rounded-lg overflow-hidden">
                        <img src={car} alt="" className='w-[100%] object-cover ease-in duration-150 delay-75 hover:-translate-y-6'/>
                    </div>
                    <div className="item bg-red-100 w-[300px] h-[200px]  rounded-lg overflow-hidden">
                        <img src={web} alt="" className='w-[100%] object-cover ease-in duration-150 delay-75 hover:-translate-y-6'/>
                    </div>
                    <div className="item bg-red-100 w-[300px] h-[200px]  rounded-lg overflow-hidden">
                        <img src={mercy} alt="" className='w-[100%] object-cover ease-in duration-150 delay-75 hover:-translate-y-6'/>
                    </div>
                    <div className="item bg-red-100 w-[300px] h-[200px]  rounded-lg overflow-hidden">
                        <img src={rndm} alt="" className='w-[100%] object-cover ease-in duration-150 delay-75 hover:-translate-y-6'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    
  )
}

