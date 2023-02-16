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
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { format } from 'timeago.js'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../redux/user/CurrentUserSlice'

export default function SingleVideo() {

    const dispatch = useDispatch();

    const [resComments, setresComments] = useState(false)
    const [video , setVideo] = useState({});
    const [user , setUser] = useState({});
    const [subscribe, setSubscribe] = useState(false);
    let {id} = useParams();

    const currentUser = useSelector(state => state.user.currentUser)

    function browserWidth (){
        let width = window.innerWidth;
            // console.log(width)
            if(width < 1024){
                setresComments(true);
            }else{
                setresComments(false)
            }
    }

    //fetching video
    const fetchVideo = async () =>{
        try {
            const response = await axios.get(`http://localhost:8000/api/video/fetchVideo/${id}`)
            let data = await response.data
            setVideo(data);
            console.log(video)
            //getting user of the video
            const res = await axios.get(`http://localhost:8000/api/user/find/${data.userId}`)
            setUser(res.data);
            console.log(res.data._id)

            //checking the subscribtion
            if(currentUser.subscribedUsers.includes(res.data._id)){
                setSubscribe(true)
                console.log("user already subscribed this channel")
            }else{
                setSubscribe(false)
            }
        } catch (error) {
            console.log(error)
        }
      
    }

    //increasing the video views by 1
    const increaseVideViews = async () =>{
        const response = await axios.put(`http://localhost:8000/api/video/views/${id}`)
        
        console.log(response.data);
    }

    //subscribe
    async function handleSubscribe (){
            const response = await axios({
                method: 'put',
                url: `http://localhost:8000/api/user/sub/${user._id}`,
                headers: {
                    'access_token': localStorage.getItem('auth-token')
                }, 
                
              });
            let data = await response.data;
            console.log(response.data);
            dispatch(loginSuccess(response.data));
            setSubscribe(true);
       
        
    }

    //unsubscribe
    async function handleUnSubscribe (){
        const response = await axios({
            method: 'put',
            url: `http://localhost:8000/api/user/unsub/${user._id}`,
            headers: {
                'access_token': localStorage.getItem('auth-token')
            }, 
            
          });
        let data = await response.data;
        console.log(response.data);
        dispatch(loginSuccess(response.data));
        setSubscribe(false);
   
    
}



    

    

    useEffect(() => {
        window.onresize = browserWidth
        window.onload = browserWidth
        
        console.log(localStorage.getItem('auth-token'))
        increaseVideViews();
        fetchVideo();
       
        // console.log(currentUser.subscribedUsers.includes(user._id))
        console.log(user._id)
        
    },[])
    

  return (
    // <main id='main' className='bg-bg-main'>
    <>
        {/* <Navbar display="hidden1" videoId={id}/> */}
    <section className='xl:max-w-screen-2xl mx-auto text-white flex flex-col lg:flex-row gap-4'>
        <section className="video-section xl:max-w-[70%] lg:max-w-[62%] flex flex-col lg:ml-4">
            <video width="100%" height="auto" controls>
                <source src={demoVideo} type='video/mp4'/>
            </video>
            <div className='flex flex-col gap-4'>

            <h2 className='font-semibold text-2xl'>{video.title}</h2>

            <div className="channel flex lg:flex-nowrap flex-wrap justify-between items-center w-full gap-2">

                <div className="left flex items-center gap-5">
                    <img className='w-12 h-12 rounded-full' src={user.img} alt="" />
                    <div className='flex flex-col'>
                        <h2 className='text-lg'>{user.name}</h2>
                        <p className='text-[#aaaaaa]'>{user.subscribers} subscribers</p>
                    </div>
                    {!subscribe?<button onClick={handleSubscribe} className='border-solid bg-white text-black rounded-xl px-3 py-1 text-sm font-semibold'>Subscribe</button>
                    :<button onClick={handleUnSubscribe} className='border-solid bg-[#2d2b2b] text-white rounded-xl px-3 py-1 text-sm font-semibold'>UnSubscribe</button>
                }  
                </div>

                <div className="right flex gap-5 items-center">
                    <div className="like-dislike flex items-center gap-4 gray-button">
                        <img className='w-5 h-5 hover:cursor-pointer' src={likeIcon} alt="" />
                        <p className='border-r-2 pr-2'>{video.likes === undefined ? "0" : video.likes.length}</p>
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
                <p>{video.views} views {format(video.createdAt)}</p>
                <p className='description'>{video.desc}</p>
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
