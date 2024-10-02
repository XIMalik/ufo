import React from "react";
import "./hero.css";
import github from "/images/github.png";
import dribble from "/images/dribbble.png";
import linked from "/images/linkedin.png";

export default function Hero() {
  // bg-gradient-to-b from-[#080707] to-slate-800

  return (
    <div className="heroContainer flex flex-col md:flex-row gap-5 items-center justify-center align-center mb-5 mt-10 py-[50px]">
      <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
        <div className="p-1 rounded-md bg-gradient-to-r from-green-100 to-blue-100">
          <div className="flex py-4 px-10 rounded-3xl bg-white justify-center items-center gap-10 w-[100%]">
            <a
              href="https://www.github.com/XIMalik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/40/github.png"
                alt=""
                className="w-[100%] ease-in-out duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/malik-awesu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linked}
                alt=""
                className="w-[100%] ease-in-out duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-start align-left gap-1">
        <div className="flex flex-wrap justify-center align-center items-center gap-3 py-5 mx-3 sm:mx-0">
          {/* <div className="">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              className="w-10 ease-out duration-100 hover:scale-105"
            />
          </div> */}
          <div className="">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="w-10 ease-out duration-100 hover:scale-105"
            />
          </div>
          <div className="">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              className="w-10 ease-out duration-100 hover:scale-105"
            />
          </div>
          <div className="">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              className="w-10 ease-out duration-100 hover:scale-105"
            />
          </div>
          <div className="">
          <img className="w-10 ease-out duration-100 hover:scale-105" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-color-tal-revivo.png" alt="external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-color-tal-revivo"/>
          </div>
          <div className="">
          <img className="w-10 ease-out duration-100 hover:scale-105" src="https://img.icons8.com/plasticine/100/python.png"/>
          </div>
          <div className="">
          <img className="w-10 ease-out duration-100 hover:scale-105" src="https://img.icons8.com/color/50/postgreesql.png"/>
          </div>
          <div className="">
          <img className="w-10 ease-out duration-100 hover:scale-105" src="https://img.icons8.com/fluency/48/docker.png"/>
          </div>
        </div>
      </div>
    </div>
  );
}
