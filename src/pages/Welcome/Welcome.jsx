import React from "react";
import head from "/images/headshot.png";
import Nav from "../../components/navbar/Nav";
import { useNavigate } from "react-router-dom";
import "./w.css";
import GoToTop from "../../components/GoToTop/GoToTop";

export default function Welcome() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/myresume");
  };
  const go = () => {
    navigate("/mywork");
  };
  return (
    <div className="min-h-screen">
      <Nav />
      <GoToTop />
      <div className="flex py-5 flex-col gap-5 justify-center items-center align-center">
        <div className="flex flex-wrap gap-3 justify-center items-center mt-auto">
          <div className="profile flex flex-col items-center p-10 col-span-1 text-center bg-gradient-to-br from-green-100 to-blue-100 rounded-md">
            {/* <FontAwesomeIcon icon={faCircleUser} className="text-green-100 mb-7"/> */}
            <div className="w-[100px] h-[100px] mb-2 rounded-full bg-red-300 overflow-hidden">
              <img src={head} className="w-[100%] object-contain" alt="" />
            </div>

            <span className="text-slate-700 font-regular text-xs mb-7">
              Lagos, Nigeria
            </span>
            <span className="text-slate-700 font-regular text-sm mb-1 hover:text-green-100 ease-in-out duration-200">
              <a href="mailto:abdulmalikawesu@gmail.com">
                abdulmalikawesu@gmail.com
              </a>
            </span>
            <span className="text-slate-700 font-regular text-sm mb-7 hover:text-green-100 ease-in-out duration-200">
              <a href="tel:+234-818-099-1568">+234 818 099 1568</a>
            </span>
            <span className="text-black text-md mb-7 w-[150px]">
              Frontend Developer & UI Designer
            </span>
          </div>
        </div>
        <button
          onClick={go}
          className="bg-slate-800 ease-in duration-150 text-xs text-green-100 hover:scale-[102%] px-5 py-3 rounded-lg w-[200px] sm:text-center"
        >
          View my work
        </button>
        <button
          onClick={goHome}
          className="bg-slate-800 ease-in duration-150 text-xs text-green-100 hover:scale-[102%] px-5 py-3 rounded-lg w-[200px] sm:text-center"
        >
          View my resume
        </button>
      </div>
    </div>
  );
}
