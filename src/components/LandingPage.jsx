import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-52 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map(function (
          item,
          index
        ) {
          return (
            <div className="masker ">
              <h1 className=" uppercase font-['Founders_Grotesk '] leading-[6vw] tracking-tighter font-semibold text-[7.5vw]">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-lg font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="flex gap-3">
          <div className="px-5 py-2 border-zinc-400 font-light text-md uppercase border-[1px] rounded-full  items-center ">
            start the project
          </div>
          <div className="border-zinc-400 border-[1px] rounded-full w-10 h-10 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
