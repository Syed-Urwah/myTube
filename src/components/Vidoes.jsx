import React, { useEffect, useState } from "react";
import thumbnail from "../assets/thumbnail.jpg";
import channelPic from '../assets/channel.jpg'
import VideoCard from "./VideoCard";
import axios from "axios";

export default function Vidoes(props) {

  const [videos, setVideos] = useState([]);



  useEffect(()=>{
    async function getVideos(){
      const response = await axios.get(`http://localhost:8000/api/video/${props.type}`,{
        headers:{
          'access_token': localStorage.getItem('auth-token')
        }
      })
      setVideos(response.data);
      console.log(response)
    }
    getVideos();
  },[props.type])


  return (
    <section className="w-screen bg-bg-main flex justify-center gap-4 flex-wrap pt-10">
      
      {
      videos.map((e)=>{
        return <VideoCard key={e._id} data={e}/>
      })}

    </section>
  );
}
