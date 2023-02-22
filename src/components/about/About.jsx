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
        <div className="containe z-0 flex flex-col justify-center items-center mt-5">
            <div className='w-[100%] max-w-[1024px] grid grid-cols-6 place-items-center ease-in duration-200 py-5'>
                <span className='logo col-span-6 text-black text-xs px-5 border-r-[0.5px] border-l-[0.5px] border-dashed border-slate-500'>Some of my work</span>
                <div className="work flex flex-wrap justify-center col-span-6 p-10">
                    <div className="item md:w-[300px] md:h-[200px] w-[250px] h-[200px] rounded-lg overflow-hidden">
                        <img src={phone} alt="" className='w-[100%] object-cover ease-in-out duration-300 hover:-translate-y-72'/>
                    </div>
                    <div className="item md:w-[300px] md:h-[200px] w-[250px] h-[200px] rounded-lg overflow-hidden">
                        <img src={gar} alt="" className='w-[100%] object-cover ease-in duration-150 hover:-translate-y-6'/>
                    </div>
                    <div className="item md:w-[300px] md:h-[200px] w-[250px] h-[200px]  rounded-lg overflow-hidden">
                        <img src={car} alt="" className='w-[100%] object-cover ease-in duration-300 hover:-translate-y-72'/>
                    </div>
                    <div className="item md:w-[300px] md:h-[200px] w-[250px] h-[200px] rounded-lg overflow-hidden">
                        <img src={web} alt="" className='w-[100%] object-cover ease-in duration-150 hover:-translate-y-6'/>
                    </div>
                    <div className="item md:w-[300px] md:h-[200px] w-[250px] h-[200px]  rounded-lg overflow-hidden">
                        <img src={mercy} alt="" className='w-[100%] object-cover ease-in duration-300 hover:-translate-y-8'/>
                    </div>
                    <div className="item md:w-[300px] md:h-[200px] w-[250px] h-[200px]  rounded-lg overflow-hidden">
                        <img src={rndm} alt="" className='w-[100%] object-cover ease-in duration-150 hover:-translate-y-6'/>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center align-center justify-center py-5 ease-in duration-200 bg-blue-100'>
                <span className='logo text-black text-xs px-5 border-r-[0.5px] border-l-[0.5px] border-dashed border-slate-500'>User Interface Designs</span>
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1024px] p-10">
                    <div className='col-span-1 h-[300px] overflow-hidden ease-in-out duration-300 bg-white hover:bg-blue-200 p-5 rounded-lg'>
                        <img src={acq} alt="" className='w-[100%] object-cover ease-in-out duration-700 hover:-translate-y-96' />
                    </div>
                    <div className='col-span-1 h-[300px] overflow-hidden ease-in-out duration-300 bg-white hover:bg-green-200 p-5 rounded-lg'>
                        <img src={bank} alt="" className=' w-[100%] object-cover ease-in-out duration-700 hover:-translate-y-28 md:hover:-translate-y-2 sm:hover:-translate-y-16' />
                    </div>
                    <div className='col-span-1 h-[300px] overflow-hidden ease-in-out duration-700 bg-white hover:bg-slate-400 p-5 rounded-lg'>
                        <img src={carr} alt="" className='w-[100%] object-cover ease-in-out duration-700 hover:-translate-y-28 lg:hover:-translate-y-40 md:hover:-translate-y-72 sm:hover:-translate-y-32' />
                    </div>
                    
                </div>
            </div>
           
        </div>
    </div>
   
    
  )
}

