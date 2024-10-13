import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/notFound.png"
const NotFound = () => {
  const navigate = useNavigate();
  const width = window.innerWidth;
  console.log("width",width);
  



  return (
    <div className="min-h-screen flex  justify-center items-center  bg-white">
      <div className={`flex  flex-wrap justify-center  items-center`}>
       
        <div className=" w-[25rem] rounded-full  flex items-center justify-center">
          <img className="w-[18rem] " src={image}></img>
        </div>

        
        <div className=" w-[30rem] max-w-[70%]  md:text-left md:ml-10 mt-6 md:mt-0">
          <h1 className="text-5xl md:text-left font-bold text-black">OOPS! PAGE NOT FOUND.</h1>
          <p className="text-gray-800 md:text-left mt-4">
            You must have picked the wrong door because I haven’t been able to lay my eye on
            the page you’ve been searching for.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-10 py-3 bg-blue-500 text-white font-semibold rounded-full  hover:bg-blue-600 transition-all"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
