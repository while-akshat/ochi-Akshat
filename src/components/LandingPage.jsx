import React from "react";

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
      <div className="border-t-[1px] border-zinc-800 mt-32"></div>
    </div>
  );
}

export default LandingPage;
