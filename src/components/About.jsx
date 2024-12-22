import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black leading-[4.5vw]">
      <h1 className="font-['Neue_Montreal '] text-[4vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>
      <div className="w-full border-t-[1px] mt-20 border-[#94a74f]">
        <div className="w-1/2">
          <h1 className="text-6xl pt-10">Our Approach</h1>
          <button className="flex gap-10 items-center mt-10 bg-zinc-900 rounded-full text-white px-8 py-0">
            Read More
            <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
