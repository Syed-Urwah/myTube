import React,{useState} from 'react'
import googleLogo from '../assets/google.png'
import googleLogo2 from '../assets/google(2).png'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'

export default function SignupCard() {

  const [hover, sethover] = useState(false)

  function handleGoogleLogo(){
    const defaultGoogle = document.getElementById('default-google');
    const hoverGoogle = document.getElementById('hover-google');
    if(!hover){
      defaultGoogle.classList.add('hidden');
      hoverGoogle.classList.remove('hidden');
      sethover(true)
    }else{
      defaultGoogle.classList.remove('hidden');
      hoverGoogle.classList.add('hidden');
      sethover(false)
    }
    
  }

 

  return (

    <>
    <Navbar/>
    <section className='bg-bg-main text-white min-h-[calc(100vh-64px)]'>
        <form className='w-full flex flex-col justify-center items-center gap-3 pt-10'>
            <h2 className='text-4xl font-semibold'>Sign Up</h2>
            <button onMouseLeave={handleGoogleLogo} onMouseEnter={handleGoogleLogo} className='flex items-center border-2 border-solid border-[#30303d] rounded-xl py-2 gap-4 w-80 justify-center hover:bg-white hover:text-black'>
              <img id='hover-google' className='w-4 h-4 hidden' src={googleLogo2} alt="" /><img id='default-google' className='w-4 h-4' src={googleLogo} alt="" /><p>Continue with Google</p>
            </button>
            <hr className='border-y-white border-solid w-72 border-[0.5px]' />
            <div className="inputs flex flex-col gap-3">
              <input className='border-2 border-solid border-[#30303d] rounded-xl w-80 py-2 bg-inherit placeholder-white' type="email" placeholder='    Email' />
              <input className='border-2 border-solid border-[#30303d] rounded-xl w-80 py-2 bg-inherit placeholder-white' placeholder='   Name' type="text" name="name" id="name" />
              <input className='border-2 border-solid border-[#30303d] rounded-xl w-80 py-2 bg-inherit placeholder-white' placeholder='   Password' type="password" name="password" id="password" />
            </div>
            <button className='border-2 border-solid border-[#30303d] rounded-xl py-2 gap-4 w-80 justify-center text-[#30303d] hover:text-white bg-yellow-400 hover:bg-red-600'>SignUp</button>
            <p>or</p>
            <h2 className='text-4xl font-semibold'>Sign In</h2>
            <div className="inputs flex flex-col gap-3">
              <input className='border-2 border-solid border-[#30303d] rounded-xl w-80 py-2 bg-inherit placeholder-white' placeholder='   Name' type="text" name="name" id="name" />
              <input className='border-2 border-solid border-[#30303d] rounded-xl w-80 py-2 bg-inherit placeholder-white' placeholder='   Password' type="password" name="password" id="password" />
            </div>

            <button className='border-2 border-solid border-[#30303d] rounded-xl py-2 gap-4 w-80 justify-center text-[#30303d] hover:text-white bg-yellow-400 hover:bg-red-600'>SignIn</button>
           
        </form>
    </section>
    </>
  )
}
