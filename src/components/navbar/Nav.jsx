import React from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  const goAbout = () => {
    navigate("/aboutme");
  };
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="navContainer z-40 flex justify-center  w-[100%] max-w-[1024] sticky top-0 mb-2 border-b-gray-100 border-[0.5px] bg-white/75 border-solid backdrop-blur-3xl ">
      <div className="navWrapper p-5 w-[100%] max-w-[1024px]">
        <div className="navbar flex  justify-center align-center text-center items-center">
          <h1
            onClick={goHome}
            className="logo text-black text-xs hover:text-green-100"
          >
            Malik Awesu
          </h1>
        </div>
      </div>
    </div>
  );
}
