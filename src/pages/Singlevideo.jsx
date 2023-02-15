import React,{useEffect, useState} from 'react'
import demoVideo from '../assets/demo-video.mp4'
import profilePic from '../assets/profile.jpg'
import likeIcon from '../assets/like.svg'
import dislikeIcon from '../assets/dislike.svg'
import shareIcon from '../assets/share.svg'
import saveIcon from '../assets/layer-plus.svg'
import Comments from '../components/Comments'
import RecommendedCard from '../components/RecommendedCard'
import Navbar from '../components/Navbar'

export default function SingleVideo() {

    const [resComments, setresComments] = useState(false)

    function browserWidth (){
        let width = window.innerWidth;
            // console.log(width)
            if(width < 1024){
                setresComments(true);
            }else{
                setresComments(false)
            }
    }

    useEffect(() => {
        window.onresize = browserWidth
        window.onload = browserWidth
        
    }, [])
    

  return (
    // <main id='main' className='bg-bg-main'>
    <>
        {/* <Navbar display="hidden1"/> */}
    <section className='xl:max-w-screen-2xl mx-auto text-white flex flex-col lg:flex-row gap-4'>
        <section className="video-section xl:max-w-[70%] lg:max-w-[62%] flex flex-col lg:ml-4">
            <video width="100%" height="auto" controls>
                <source src={demoVideo} type='video/mp4'/>
            </video>
            <div className='flex flex-col gap-4'>

            <h2 className='font-semibold text-2xl'>Learn Web Components In 25 Minutes</h2>

            <div className="channel flex lg:flex-nowrap flex-wrap justify-between items-center w-full gap-2">

                <div className="left flex items-center gap-5">
                    <img className='w-12 h-12 rounded-full' src={profilePic} alt="" />
                    <div className='flex flex-col'>
                        <h2 className='text-lg'>Channel Name</h2>
                        <p className='text-[#aaaaaa]'>1.2M subscribers</p>
                    </div>
                    <button className='border-solid bg-white text-black rounded-xl px-3 py-1 text-sm font-semibold'>Subscribe</button>
                </div>

                <div className="right flex gap-5 items-center">
                    <div className="like-dislike flex items-center gap-4 gray-button">
                        <img className='w-5 h-5 hover:cursor-pointer' src={likeIcon} alt="" />
                        <p className='border-r-2 pr-2'>3.5k</p>
                        <img className='w-5 h-5' src={dislikeIcon} alt="" />
                    </div>
                    <div className="share flex gap-2 items-center gray-button">
                        <img className='w-5 h-5' src={shareIcon} alt="" />
                        <p>Share</p>
                    </div>

                    <div className="share flex gap-2 items-center gray-button">
                        <img className='w-5 h-5' src={saveIcon} alt="" />
                        <p>Share</p>
                    </div>
                </div>
            </div>

            <div className="description bg-border-bg px-2 py-2 rounded-2xl w-full">
                <p>95k views 9 days ago</p>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quia! Eligendi ad deserunt inventore nesciunt, odit velit earum quibusdam dolore perferendis natus delectus blanditiis sequi, saepe, laboriosam tempora vitae. Magnam.</p>
            </div>

            {!resComments && <Comments/>}

            </div>
        </section>

        <section className="flex flex-col lg:items-center items-start lg:w-2/5 gap-3 ml-4">
        <RecommendedCard/>
        <RecommendedCard/>
        </section>
        
        {resComments && <Comments/>}
        </section>
        </>
        // </main>
  )
}
