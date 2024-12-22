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
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="px-5 py-2 border-zinc-500 font-light text-sm capitalize border-[2px] rounded-full flex items-center gap-5">
          start the project
          <div className="border-zinc-500 border-[2px] rounded-full w-10 h-10 flex items-center justify-center">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
