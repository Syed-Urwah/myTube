import React from "react";
import thumbnail from "../assets/thumbnail.jpg";
import { Link } from "react-router-dom";

export default function RecommendedCard() {
  return (
    
      <Link to='/' className="flex justify-center gap-2">
        <img className="w-44 rounded-2xl" src={thumbnail} alt="" />
        <div className="details flex flex-col gap-1">
          <h2 className="video-title text-white">Neo4j in 100 seconds</h2>
          <p className="channel text-[#aaaaaa]">Fireship</p>
          <p className="views text-[#aaaaaa]">245k views . 4 days ago</p>
        </div>
      </Link>
  );
}
