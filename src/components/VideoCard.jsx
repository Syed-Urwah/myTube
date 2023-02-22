import React, { useEffect, useState } from "react";
import thumbnail from "../assets/thumbnail.jpg";
import channelPic from '../assets/channel.jpg';
import { Link } from "react-router-dom";
import {format} from 'timeago.js'
import axios from 'axios'

export default function VideoCard({data}) {

  const [channel, setChannel] = useState({})

    
  async function fetchChannel(){
    const res = await axios.get(`http://localhost:8000/api/user/find/${data.userId}`);
    setChannel(res.data)
    console.log(res.data)
  }

  useEffect(()=>{
  
    fetchChannel()
  },[])


  return (
    <Link to={`/video/${data._id}`} className="video flex flex-col">
      <img className="w-96 mb-3 rounded-2xl h-60 hover:opacity-30" src={data.imgUrl} alt="" />
      <div className="video-details flex">
        <img className="rounded-full w-12 h-12" src={channel.img} alt="" />
        <div className="details pl-5">
          <h2 className="video-title text-white">{data.title}</h2>
          <p className="channel text-[#aaaaaa] capitalize">{channel.name}</p>
          <p className="views text-[#aaaaaa]">{data.views} views . {format(data.createdAt)}</p>
        </div>
      </div>
    </Link>
  );
}
