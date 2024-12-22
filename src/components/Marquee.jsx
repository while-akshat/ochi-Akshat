import React from "react";

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc flex gap-10 overflow-hidden whitespace-nowrap ">
        <h1 className="text-[24vw] leading-none uppercase py-2  gap-10 font-[1000]">
          WE ARE OCHI
        </h1>
        <h1 className="text-[24vw] leading-none uppercase py-2  gap-10 font-[1000]">
          WE ARE OCHI
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
