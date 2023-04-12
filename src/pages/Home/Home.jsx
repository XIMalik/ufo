import React from "react";
import "./home.css";
import Nav from "../../components/navbar/Nav";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Me from "../../components/aboutme/Me";
import Web from "../../components/Web/Web";
import GoToTop from "../../components/GoToTop/GoToTop";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Nav />
      <GoToTop />
      <About />
      <Web />
      <Hero />
    </div>
  );
}
