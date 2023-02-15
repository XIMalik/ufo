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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'


export default function About(){
  return (
    <div>
         <Nav/>
        <div className="containe flex gap-10 flex-col justify-center items-center ">
            <div className='w-[100%] max-w-[1024px] grid grid-cols-6 bg-green-100'>
                <div className="profile sticky top-0 flex flex-col items-center p-3 col-span-1 text-center">
                    <FontAwesomeIcon icon={faCircleUser} className="text-green-100 mb-7"/>
                    <div className='w-[100px] h-[100px] mb-2 rounded-full bg-red-300 overflow-hidden'>
                        <img src={head} className="w-[100%] object-contain" alt="" />
                    </div>
                    <h1 className=" logo text-center text-[12px] text-slate-400">Malik Awesu</h1>
                    <span className='text-slate-400 font-light text-sm mb-7'>Lagos, Nigeria</span>
                    <span className='text-slate-300 text-lg mb-7'>Web Developer, UI Designer & UX Researcher</span>
                    <span className='text-slate-400 text-sm font-light'>Junior Frontend Developer</span>
                </div>
                <div className="work col-span-5">
                    <div className="item bg-red-100 w-[250px] h-[150px] rounded-lg overflow-hidden">
                        <img src={phone} alt="" className='w-[100%] object-cover'/>
                    </div>
                    <div className="item bg-red-100 w-[250px] h-[150px] rounded-lg overflow-hidden">
                        <img src={head} alt="" className='w-[100%] object-cover'/>
                    </div>
                    <div className="item bg-red-100 w-[250px] h-[150px] rounded-lg overflow-hidden">
                        <img src={gar} alt="" className='w-[100%] object-cover'/>
                    </div>
                    <div className="item bg-red-100 w-[250px] h-[150px] rounded-lg overflow-hidden">
                        <img src={car} alt="" className='w-[100%] object-cover'/>
                    </div>
                    <div className="item bg-red-100 w-[250px] h-[150px] rounded-lg overflow-hidden">
                        <img src={web} alt="" className='w-[100%] object-cover'/>
                    </div>
                    <div className="item bg-red-100 w-[250px] h-[150px] rounded-lg overflow-hidden">
                        <img src={mercy} alt="" className='w-[100%] object-cover'/>
                    </div>
                    <div className="item bg-red-100 w-[250px] h-[150px] rounded-lg overflow-hidden">
                        <img src={rndm} alt="" className='w-[100%] object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    
  )
}

