import React from "react";
import "./home.css";
import Nav from "../../components/navbar/Nav";
import Hero from "../../components/hero/Hero";
import Web from "../../components/Web/Web";
import GoToTop from "../../components/GoToTop/GoToTop";
import UIDesigns from "../../components/UI/UIDesigns";
import Clients from "../../components/Clients/Clients";
UIDesigns

export default function Home() {
  return (
    <div className="flex bgon flex-col">
      <Nav />
      <GoToTop />
      <UIDesigns />
      <Web />
      <Clients />
      <Hero/>
    </div>
  );
}
