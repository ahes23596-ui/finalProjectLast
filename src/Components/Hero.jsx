import React from "react";
import herosec from "../assets/herosec.png";

function Hero() {
  return (
    <div
      className=" relative flex flex-col items-center justify-center p-10 text-white bg-no-repeat bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${herosec})` }}
    >
        <div className="absolute inset-0 bg-black opacity-60">
        </div>
        <div className="relative z-10 text-center">

            
        <h2 className="text-[#1e2939] font-extrabold text-6xl mb-3">Welcome to Our Website</h2>
        <p className="text-2xl">  We provide the best services and products to meet your needs. Discover more now.</p>
        <button type="button" className="fancy-hover-button">
        <span className="bg-circle"></span>
        <span className="svg-left">
   
        </span>
        <span className="svg-right">
  
        </span>
        <span className="overlay-gradient"></span>
        <span className="button-text">Discover Now</span>
</button>
        </div>





    </div>

  );
}

export default Hero;
