import React from 'react'
import head from '/images/Group65.png'
import phone from '/images/iPhone 14 - 2.png'
import gar from '/images/garage2.png'
import car from '/images/carslot.png'
import web from '/images/web.png'
import rndm from '/images/rndm.png'
import acq from '/images/Acquire.com.png'
import bank from '/images/bankingg.png'
import carr from '/images/carslottt.png'
import mercy from '/images/mercy.png'
import Nav from '../navbar/Nav'
import './about.css'

export default function About(){
  return (
    <div>
        <div className="containe z-0 flex gap-10 flex-col justify-center items-center mt-5 mb-5">
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
                        <img src={rndm} alt="" className='w-[100%] object-cover ease-in duration-150 hover:-translate-y-6'/>
                    </div>
                </div>
            </div>

            <span className='logo text-slate-400 text-right text-sm '>UI DESIGNS</span>
            <div className="mx-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1024px] ">
                <div className='col-span-1 h-[300px] overflow-hidden ease-in-out duration-300 bg-white hover:bg-blue-200 p-5 rounded-lg'>
                    <img src={acq} alt="" className='w-[100%] object-cover ease-in-out duration-700 hover:-translate-y-96' />
                </div>
                <div className='col-span-1 h-[300px] overflow-hidden ease-in-out duration-300 bg-white hover:bg-green-200 p-5 rounded-lg'>
                    <img src={bank} alt="" className=' w-[100%] object-cover ease-in-out duration-700 hover:-translate-y-28 md:hover:-translate-y-2 sm:hover:-translate-y-16' />
                </div>
                <div className='col-span-1 h-[300px] overflow-hidden ease-in-out duration-700 bg-white hover:bg-slate-400 p-5 rounded-lg'>
                    <img src={carr} alt="" className='w-[100%] object-cover ease-in-out duration-700 hover:-translate-y-80 lg:hover:-translate-y-40 md:hover:-translate-y-72 sm:hover:-translate-y-32' />
                </div>
                
            </div>
        </div>
    </div>
   
    
  )
}

