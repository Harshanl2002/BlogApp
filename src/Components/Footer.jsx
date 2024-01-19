import React from 'react'
import { TbMessageCircle2Filled } from "react-icons/tb";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#445144] flex flex-col shadow-xl select-none px-10 font-poppins bottom-0 pt-5">
      <div className="lg:flex lg:w-2/3 lg:justify-between max-lg:w-full max-lg:flex-col max-lg:items-center">
        <div className="flex-col lg:w-[15%]">
          <div className="text-white text-[40px] font-logo font-bold flex max-lg:justify-center">.bl<span className="text-blue-400 flex items-center"><TbMessageCircle2Filled/></span>g</div>
          <p className="text-[12px] text-white font-poppins font-extralight max-lg:text-center">Follow us on</p>
          <div className="flex justify-between w-full text-white mt-5 text-3xl max-lg:w-full max-lg:justify-evenly">
            <a href="#" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="#" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
            <a href="#" target="_blank" rel="noreferrer"><VscGithubInverted/></a>
          </div>
        </div>
        <div className="flex-col w-[20%] max-lg:w-full">
          <p className="text-white lg:text-sm py-2 max-lg:text-center">category</p>
        </div>
        <div className="flex-col w-[20%] max-lg:w-full max-lg:items-center">
          <p className="text-white lg:text-sm py-2 max-lg:text-center">Links</p>
          <ul className="lg:mx-2 h-[20vh] border-2 justify-evenly text-white text-[12px] font-poppins font-extralight">
          <li><Link to={"/"}>{"Home"}</Link></li>
          <li><Link to={"/Dashboard"}>{"Feeds"}</Link></li>
          <li><Link to={"/Authors"}>{"Authors"}</Link></li>
          </ul>
        </div>
      </div>
        <p className="font-poppins text-white font-thin text-[8px] self-end my-5 max-lg:self-center">@ 2024 .Blog All rights reserved</p>
    </div>
  )
}

export default Footer;