import React from "react";
import { bgimg, bgimg2 } from "../assets";
import "./style.css";

function HeroSection() {
  return (
    <div
      className=" h-[482px] flex justify-center items-center"
      style={{ backgroundImage: `url(${bgimg2})` }}
    >
      <div className="  text-5xl xs:text-6xl lg:text-8xl font-bold text-center italic">
        <h1
          className="bgcolorvalue opacity-100"
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          Gallery Book
          <span className="text-2xl block mt-10">
            © 2024 NITISH RAJ . All Right Reserved
          </span>
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
