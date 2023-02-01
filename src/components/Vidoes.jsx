import React from "react";
import thumbnail from "../assets/thumbnail.jpg";
import channelPic from '../assets/channel.jpg'
import VideoCard from "./VideoCard";

export default function Vidoes() {
  return (
    <section className="w-screen bg-bg-main flex justify-center gap-4 flex-wrap pt-10">

      <VideoCard/>
      
      <VideoCard/>

      <VideoCard/>

    </section>
  );
}
