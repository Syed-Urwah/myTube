import React from "react";
import logo from "../assets/Youtube-Logo.wine.svg";
import bar from "../assets/hamburgerDark.png";
import video from '../assets/add-video.png'
import profilePic from '../assets/profile.jpg'

export default function Header() {
  return (
    <section className="h-16 bg-bl ">
      <div className="header h-full w-[96vw] m-auto flex justify-between items-center text-white ">
        <div className="bar flex items-center h-full">
          <img src={bar} alt="" className="w-6" />
          <a href="/" className="logo h-full">
            <img src={logo} alt="" className="w-32 h-full" />
          </a>
        </div>

        <div className="search h-full flex items-center">
            <input className="w-96 h-10 rounded-full pl-2 text-black border-[#1c1c1c] border-solid border-2 bg-transparent" placeholder="Search" type="text" name="" id="" />

        </div>

        <div className="profile flex gap-5 h-full items-center">
            <img className="w-8 h-8" src={video} alt="" />
            <img className="w-8 h-8 rounded-full" src={profilePic} alt="" />
        </div>
      </div>
    </section>
  );
}
