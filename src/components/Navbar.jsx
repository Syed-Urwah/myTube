import React from "react";
import homeLogo from "../assets/home-logo.png";
import MdNavbar from "./MdNavbar";
import picpeople from '../assets/picpeople.svg'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar(props) {

  let location = useLocation()

  return (
    <>
    <section id="nav" className={`xl:${props.display} hidden pt-3 w-72 h-screen bg-bg-main text-white`}>
      <div className="s w-full flex flex-col justify-center">

        <Link to="/" className="home w-[80%] flex h-10 justify-center items-center border-solid hover:bg-[#272727] rounded-xl ">
          <div className="flex justify-center items-end h-1/2">
            <img className="w-6 h-6 mr-4" src={homeLogo} alt="" />
            <p>Home</p>
          </div>
        </Link>

        <Link to="/video" className="home w-[80%] flex h-10 justify-center items-center border-solid hover:bg-[#272727] rounded-xl ">
          <div className="flex justify-center items-end h-1/2">
            <img className="w-6 h-6 mr-4" src={homeLogo} alt="" />
            <p>Video</p>
          </div>
        </Link>

        <a href="/" className="home w-[80%] flex h-10 justify-center items-center border-solid hover:bg-[#272727] rounded-xl ">
          <div className="flex justify-center items-end h-1/2">
            <img className="w-6 h-6 mr-4" src={homeLogo} alt="" />
            <p>Home</p>
          </div>
        </a>

        <div className="line border-t border-[#272727] mt-5"></div>

        <div className="sign-in w-4/5 flex flex-col items-center gap-2">
          <p>Signin to like</p>
          <a className="signin-button flex justify-around border-solid border-2 border-sky-500 py-2 px-2">
            <img className="w-6" src={picpeople} alt="" />
            <h4>SIGN IN</h4>
          </a>
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

    {location.pathname !== '/video' && <MdNavbar/> }
    </>
  );
}
