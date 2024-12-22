import React from "react";

function Marquee() {
  return (
    <div className="w-full py-20 rounded-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc flex gap-10 overflow-x-hidden whitespace-nowrap ">
        <h1 className="text-[17vw] leading-none uppercase py-10  gap-10 font-bold">
          WE ARE OCHI
        </h1>
        <h1 className="text-[17vw] leading-none uppercase py-10  gap-10 font-bold">
          WE ARE OCHI
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
