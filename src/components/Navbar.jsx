import React from "react";
import homeLogo from "../assets/home-logo.png";
import MdNavbar from "./MdNavbar";

export default function Navbar() {
  return (
    <>
    <section className="xl:block hidden pt-3 w-72 h-screen bg-bg-main text-white">
      <div className="s w-full flex flex-col justify-center">

        <a href="/" className="home w-[80%] flex h-10 justify-center items-center border-solid hover:bg-[#272727] rounded-xl ">
          <div className="flex justify-center items-end h-1/2">
            <img className="w-6 h-6 mr-4" src={homeLogo} alt="" />
            <p>Home</p>
          </div>
        </a>

        <a href="/" className="home w-[80%] flex h-10 justify-center items-center border-solid hover:bg-[#272727] rounded-xl ">
          <div className="flex justify-center items-end h-1/2">
            <img className="w-6 h-6 mr-4" src={homeLogo} alt="" />
            <p>Home</p>
          </div>
        </a>

        <a href="/" className="home w-[80%] flex h-10 justify-center items-center border-solid hover:bg-[#272727] rounded-xl ">
          <div className="flex justify-center items-end h-1/2">
            <img className="w-6 h-6 mr-4" src={homeLogo} alt="" />
            <p>Home</p>
          </div>
        </a>

        <div className="line border-t border-[#272727] mt-5"></div>

        <div className="sign-in">
          Signin
        </div>

        <div className="line border-t border-[#272727] mt-5"></div>

        <p className="m-auto w-[50%] my-5">Best of myTube</p>

        <a href="/" className="home w-[80%] flex h-10 justify-center items-center border-solid hover:bg-[#272727] rounded-xl ">
          <div className="flex justify-center items-end h-1/2">
            <img className="w-6 h-6 mr-4" src={homeLogo} alt="" />
            <p>Home</p>
          </div>
        </a>

        <a href="/" className="home w-[80%] flex h-10 justify-center items-center border-solid hover:bg-[#272727] rounded-xl ">
          <div className="flex justify-center items-end h-1/2">
            <img className="w-6 h-6 mr-4" src={homeLogo} alt="" />
            <p>Home</p>
          </div>
        </a>

        <a href="/" className="home w-[80%] flex h-10 justify-center items-center border-solid hover:bg-[#272727] rounded-xl ">
          <div className="flex justify-center items-end h-1/2">
            <img className="w-6 h-6 mr-4" src={homeLogo} alt="" />
            <p>Home</p>
          </div>
        </a>
      </div>
    </section>

    <MdNavbar/>
    </>
  );
}
