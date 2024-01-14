import React from "react";
import ssmlr from "/images/screenshot_shelter.png";
import vabk from "/images/favicon.ico";
import clouds from "/images/cloudy-day.png";
import './c.css'

export default function Clients() {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex w-[100%] bg-green-50 flex-col items-center align-center justify-center py-5 rounded-2xl ease-in duration-200">
        <span className="text-black text-xs px-5 border-r-[0.5px] border-l-[0.5px] border-dashed border-slate-500">
          Clients' Projects
        </span>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1024px] md:p-10 p-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 clients_item flex flex-col h-content overflow-hidden ease-in-out duration-300 bg-white rounded-lg">
              <div className="img w-full">
              <img
                src={ssmlr}
                alt=""
                className="h-full w-full object-cover ease-out duration-150 hover:scale-[101%]"
              />
              </div>
              <a href="https://www.sheltersolutions.ng" target="_blank">
                <div className="overlay bg-black/40 backdrop-blur-sm text-white">
                  <div className="divdiv">
                    <h1>Shelter Solutions & Engineering Services Limited</h1>
                    <span className="hidden sm:block">This website serves as the web presence of a construction company based in Lagos, Nigeria</span>
                  </div>
                </div>
              </a>
          </div>  
        </div>
      
      </div>
    </div>
  );
}
