import axios from 'axios';
import React, { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'
import PuffLoader from "react-spinners/PuffLoader";


export default function WatchLater() {

    const [videos , setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchVideos = async () =>{
        setLoading(true);
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:8000/api/video/watch-later',
                headers: {
                    'access_token': localStorage.getItem('auth-token')
                }
            });
            setVideos(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
        
    }

    useEffect(()=>{
        fetchVideos()
    },[])

  return (
    <section className="w-screen bg-bg-main flex justify-center gap-4 flex-wrap pt-10 text-white">
        {loading ? <PuffLoader className="m-auto" color={"#FFFFFF"} loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader"/> : 
        Object.keys(videos).length === 0 ? <h2 className='text-white m-auto'>You didn't create any video yet</h2> : 
        videos.map((e)=>{
        return <VideoCard key={e._id} data={e}/>
        })
        }
    </section>
  )
}
