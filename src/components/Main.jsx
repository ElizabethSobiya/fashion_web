import React, { useState } from "react";
// import axios from 'axios';
import Bg from "../assets/hanger.png";
import Logo from "../assets/logo.png";
import { RiSearchLine } from "react-icons/ri";
import Latest from "./Latest";
// import Search from './Search'
import { useNavigate } from "react-router-dom";

// search bar in the homepage

function Main() {
  const navigate = useNavigate();

  // useState component for latest trends and products navigate
  const [isShown, setIsShown] = useState(false);
  const [isChange, setIsChange] = useState(false);

  // handleclick for latest trends box
  const handleClick = (event) => {
    //  toggle shown state
    setIsShown((current) => !current);
    //  or simply set it to true
    // setIsShown(true);
  };

  const handleChange = (e) => {
    // console.log("hii");
    setIsChange(navigate("/search"));
  };
  return (
    <>
      {/* home page content */}
      <div className="bg-[rgba(215, 224, 255, 0.26)] md:overflow-x-hidden sm:overflow-x-hidden">
        {/* background home page image */}
        <img
          src={Bg}
          alt=""
          className=" opacity-75 md:w-full md:h-full sm:w-full sm:h-full "
        />
        <div className="flex justify-evenly">
          {/* search bar in home page */}
          <input
            type="text"
            placeholder="Search"
            onClick={handleClick}
            className="absolute md:w-[60%] h-[8%] sm:w-[40%]  border-none rounded-xl focus:outline-none left-[20%] pl-10 
     text-xl font-inter  top-[22%]"
          />
          {/* search icon in home page */}
          <RiSearchLine
            size={25}
            color={"#9ca3af"}
            onClick={handleChange}
            className="absolute  md:right-[25%] md:top-[24%] sm:right-[45%] sm:bottom-[72%] "
          />
        </div>
        <div>
          {/* logo in the home page */}
          <img src={Logo} alt="" className="w-20 absolute right-5 top-4" />
        </div>
      </div>
      {/*  show elements on click */}
      {isShown && <Latest />}

      {/* {isChange &&(
    <Search/>
   )

   } */}
    </>
  );
}

export default Main;
