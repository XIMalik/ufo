import React from "react";
import acq from "/images/grfxn.png";

export default function Web() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex w-[100%] max-w-[1024px] flex-col items-center align-center justify-center py-5 ease-in duration-200 border-[0.5px] border-t-0 border-slate-100">
        <span className="text-black text-xs px-5 border-r-[0.5px] border-l-[0.5px] border-dashed border-slate-500">
          Web Dev Projects
        </span>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1024px] p-10">
          <div className="col-span-1 flex flex-col h-content overflow-hidden ease-in-out duration-300 hover:bg-slate-100 bg-white border-[0.5px] border-slate-100  p-5 rounded-lg text-center">
            <a href="https://grfxxni66.netlify.app">
              <img
                src={acq}
                alt=""
                className="w-[100%] mb-5 object-cover ease-out duration-150 hover:scale-110"
              />
            </a>
            <span className="mb-5 text-sm">
              I use memes all the time, so i made a meme library project for
              creating custom memes. Check it out, it's dope
            </span>
            <a
              href="https://grfxni66.netlify.app"
              className="text-sm text-slate-300"
            >
              Check it out
            </a>
          </div>
          <div className="col-span-1 flex flex-col h-content overflow-hidden ease-in-out duration-300 hover:bg-slate-100 bg-white border-[0.5px] border-slate-100  p-5 rounded-lg text-center">
            <a href="https://grfxxni66.netlify.app">
              <img
                src={acq}
                alt=""
                className="w-[100%] mb-5 object-cover ease-out duration-150 hover:scale-110"
              />
            </a>
            <span className="mb-5 text-sm">
              A tourism/city guide website for the state of Abeokuta. With plans
              for reservation and bookings to be implemented
            </span>
            <a
              href="https://vabk.netlify.app"
              className="text-sm text-slate-300"
            >
              Check it out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
