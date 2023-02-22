import React,{useState} from "react";
import logo from "../assets/Youtube-Logo.wine.svg";
import bar from "../assets/hamburgerDark.png";
import video from '../assets/add-video.png'
import profilePic from '../assets/profile.jpg'
import searchIcon from '../assets/search.svg'
import leftArrow from '../assets/arrow-left.svg'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ModalCreateVideo from "./ModalCreateVideo";
import {useSelector} from 'react-redux'

export default function Header() {

  const currentUser = useSelector(state=>state.user.currentUser)
  const [searchBox, setsearchBox] = useState(false)
  const location = useLocation()

  

  function handleSearchDisplay(){
    if(!searchBox){
      setsearchBox(true)
    }else{
      setsearchBox(false)
    }
  }

  function handleNavBar(){
    let click = false;
    const nav = document.getElementById('nav');
    //toggling display
    nav.classList.toggle('hidden')
    nav.classList.toggle('absolute')
  }

  function handleModalVideo(){
    document.getElementById('modal-video').classList.add('flex')
    document.getElementById('modal-video').classList.remove('hidden')
    document.getElementById('modal-video').classList.remove('modalAnimationUp')
    document.getElementById('modal-video').classList.add('modalAnimationDown')
    document.getElementById('main').classList.add('opacity-70')
    document.getElementById('header').classList.add('opacity-70')
    document.getElementById('body').classList.add('overflow-y-auto')
  }
  

  function hamburgerControll1(path){
    if(path !== "/" && path !== "/sub"){
      return "block"
    }else{
      return "hidden"
    }
  }

  return (
    <>
    <ModalCreateVideo/>
    <header id="header" className="h-16 bg-bg-main pb-4 sticky top-0 z-10">
      <div className="header h-full w-[96vw] m-auto flex justify-between items-center text-white ">
        <div className={`bar ${!searchBox ? 'flex' : 'hidden'} items-center h-full`}>
          <img onClick={handleNavBar} src={bar} alt="" className={`w-6 xl:${hamburgerControll1(location.pathname)} hover:cursor-pointer`} />
          <Link to="/" className="logo h-full">
            <img src={logo} alt="" className="w-32 h-full" />
          </Link>
        </div>

        <div className={`search h-full flex items-center justify-evenly ${searchBox ? 'w-full' : 'w-auto'}`}>
            <img onClick={handleSearchDisplay} className={`w-5 hover:cursor-pointer ${searchBox ? 'block' : 'hidden'}`} src={leftArrow} alt="" />
            <input className={`md:w-96 sm:w-60 sm:block w-4/5 ${searchBox ? 'block' : 'hidden'} h-10 rounded-full pl-2 text-white border-[#1c1c1c] outline-none border-solid border-2 bg-transparent focus:border-white`} autoFocus={searchBox} placeholder="Search" type="text" name="search" id="search-box" />
        </div>

        {Object.keys(currentUser).length === 0 ? "login" : 
        <div className={`profile ${!searchBox ? 'flex' : 'hidden'} gap-5 h-full items-center`}>
            <img onClick={handleSearchDisplay} className="w-5 sm:hidden hover:cursor-pointer" src={searchIcon} alt="" />
            <img onClick={handleModalVideo} className="w-8 h-8 hover:cursor-pointer" src={video} alt="" />
            <img className="w-8 h-8 rounded-full" src={currentUser.img} alt="" />
        </div>
        }
      </div>
    </header>
    </>
  );
}
