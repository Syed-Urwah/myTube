import React,{useState, useEffect} from "react";
import homeLogo from "../assets/home-logo.png";
import MdNavbar from "./MdNavbar";
import picpeople from '../assets/picpeople.svg'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(props) {

  const currentUser = useSelector(state=> state.user.currentUser)

  let location = useLocation()
  const [nav, setnav] = useState(false)

  useEffect(() => {
    if(props.display === "block"){
      setnav(true)
    }
  }, [])
  

  return (
    <>
    <section id="nav" className={`${nav && 'xl:block'} hidden pt-3 w-72 min-h-[calc(100vh-64px)] bg-bg-main text-white`}>
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

        <Link to="/" className="home w-[80%] flex h-10 justify-center items-center border-solid hover:bg-[#272727] rounded-xl ">
          <div className="flex justify-center items-end h-1/2">
            <img className="w-6 h-6 mr-4" src={homeLogo} alt="" />
            <p>Home</p>
          </div>
        </Link>

        <div className="line border-t border-[#272727] mt-5"></div>
        {Object.keys(currentUser).length > 0 ? 
        <Link to="/sub" className="home w-[80%] flex h-10 justify-center items-center border-solid hover:bg-[#272727] rounded-xl ">
          <div className="flex justify-center items-end h-1/2">
            <img className="w-6 h-6 mr-4" src={homeLogo} alt="" />
            <p>Subscribed Videos</p>
          </div>
        </Link> : 
          <div className="sign-in w-4/5 flex flex-col items-center gap-2">
            <p>Signin to like</p>
            <Link to="signup" className="signin-button flex justify-around border-solid border-2 border-sky-500 py-2 px-2">
              <img className="w-6" src={picpeople} alt="" />
              <h4>SIGN IN</h4>
            </Link>
          </div>
        }
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

    {location.pathname === '/' && <MdNavbar/> }
    </>
  );
}
