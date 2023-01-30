import React from "react";
import thumbnail from "../assets/thumbnail.jpg";
import channelPic from '../assets/channel.jpg'

export default function Vidoes() {
  return (
    <section className="w-screen bg-bg-main flex justify-center gap-4 flex-wrap pt-10">

      <a href="/" className="video flex flex-col">
        <img className="w-96 mb-3 rounded-2xl" src={thumbnail} alt="" />
        <div className="video-details flex">
          <img className="rounded-full w-12 h-12" src={channelPic} alt="" />
          <div className="details pl-5">
            <h2 className="video-title text-white">Neo4j in 100 seconds</h2>
            <p className="channel text-[#aaaaaa]">Fireship</p>
            <p className="views text-[#aaaaaa]">245k views . 4 days ago</p>
          </div>
          
        </div>
      </a>

      <div className="video flex flex-col">
        <img className="w-96 mb-3 rounded-2xl" src={thumbnail} alt="" />
        <div className="video-details flex">
          <img className="rounded-full w-12 h-12" src={channelPic} alt="" />
          <div className="details pl-5">
            <h2 className="video-title text-white">Neo4j in 100 seconds</h2>
            <p className="channel text-[#aaaaaa]">Fireship</p>
            <p className="views text-[#aaaaaa]">245k views . 4 days ago</p>
          </div>
          
        </div>
      </div>

      <div className="video flex flex-col">
        <img className="w-96 mb-3 rounded-2xl" src={thumbnail} alt="" />
        <div className="video-details flex">
          <img className="rounded-full w-12 h-12" src={channelPic} alt="" />
          <div className="details pl-5">
            <h2 className="video-title text-white">Neo4j in 100 seconds</h2>
            <p className="channel text-[#aaaaaa]">Fireship</p>
            <p className="views text-[#aaaaaa]">245k views . 4 days ago</p>
          </div>
          
        </div>
      </div>

    </section>
  );
}
