import React from "react";
import profilePic from "../assets/profile.jpg";

export default function Comments() {
  return (
    <section className="gap-4 flex flex-col w-full text-sm font-semibold">
      <div className="add-comment flex gap-3">
        <img className="rounded-full w-12" src={profilePic} alt="" />
        <input
          className="w-4/5 bg-inherit outline-none border-b border-[#3f3f3f]"
          placeholder="Add a Comment..."
          type="text"
        />
      </div>

      <section className="comments-card flex flex-col gap-4">
        <div className="comments flex gap-3">
            <img className="rounded-full w-12 h-12" src={profilePic} alt="" />
            <div>
            <div className="flex gap-1">
                <p>Jana v.</p>
                <p className="text-[#aaaaaa]">10 days ago</p>
            </div>
            <p>
                You make good quality videos and I love them, and judging buy the
                number of your subscribers and people watching your videos, there's
                really no need for using sensational titles like "End of React?".
                This trend of sensationalism needs to go away, because it degrades
                every subject it's associated with.
            </p>
            </div>
        </div>

        <div className="comments flex gap-3">
            <img className="rounded-full w-12 h-12" src={profilePic} alt="" />
            <div>
            <div className="flex gap-1">
                <p>Jana v.</p>
                <p className="text-[#aaaaaa]">10 days ago</p>
            </div>
            <p>
                You make good quality videos and I love them, and judging buy the
                number of your subscribers and people watching your videos, there's
                really no need for using sensational titles like "End of React?".
                This trend of sensationalism needs to go away, because it degrades
                every subject it's associated with.
            </p>
            </div>
        </div>
      </section>
    </section>
  );
}
