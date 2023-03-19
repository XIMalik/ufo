import React from "react";
import "./hero.css";
import head from "/images/Group65.png";
import github from "/images/github.png";
import dribble from "/images/dribbble.png";
import linked from "/images/linkedin.png";

export default function Hero() {
  // bg-gradient-to-b from-[#080707] to-slate-800

  return (
    <div className="heroContainer flex gap-3 items-center flex-col justify-center mb-5">
      <div className="flex flex-col justify-center gap-5 items-center mb-5 mt-5">
        <div className="p-1 rounded-md bg-gradient-to-r from-green-100 to-blue-100">
          <div className="flex py-5 px-10 rounded-3xl bg-white justify-center items-center gap-10 w-[100%]">
            <a
              href="https://www.github.com/XIMalik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
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
            <a
              href="https://www.linkedin.com/in/malik-awesu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={dribble}
                alt=""
                className="w-[100%] ease-in-out duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
      <span className="text-center text-slate-900 rounded-lg mt-5">
        Technologies I work with
      </span>
      <div className="flex flex-wrap justify-center align-center items-center gap-3 py-5 px-10">
        <div className="">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            className="w-8 ease-out duration-100 hover:scale-105"
          />
        </div>
        <div className="">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            className="w-8 ease-out duration-100 hover:scale-105"
          />
        </div>
        <div className="">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            className="w-8 ease-out duration-100 hover:scale-105"
          />
        </div>
        <div className="">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            className="w-8 ease-out duration-100 hover:scale-105"
          />
        </div>
        <div className="">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            className="w-8 ease-out duration-100 hover:scale-105"
          />
        </div>
        <div className="">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            className="w-8 ease-out duration-100 hover:scale-105"
          />
        </div>
        <div className="">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
            className="w-8 ease-out duration-100 hover:scale-105"
          />
        </div>
        <div className="">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            className="w-8 ease-out duration-100 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
