import React from "react";
import Nav from "../../components/navbar/Nav";
import resume from "/images/resume.png";
import resumepdf from "/images/resume.pdf";
import "./r.css";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const nav = useNavigate();
  const go = () => {
    nav("/mywork");
  };
  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-100 min-h-screen">
      <Nav />
      <div className="flex flex-col justify-center items-center py-5">
        <a
          href={resumepdf}
          download
          className="text-xs mb-5 sticky top-14 bg-white text-black py-2 px-5 rounded-xl ease-in duration-300 hover:bg-blue-50"
        >
          Download PDF
        </a>
        <img src={resume} alt="" className="mx-auto" />
      </div>
      <div className="flex justify-center py-3">
        <button
          onClick={go}
          className="bg-slate-800 ease-in duration-150 text-xs text-green-100 hover:scale-[102%] px-5 py-3 rounded-lg w-[200px] sm:text-center"
        >
          View my work
        </button>
      </div>
    </div>
  );
}
