import React from "react";

function Cards() {
  return (
    <div className="flex gap-5 w-full h-screen bg-zinc-900  items-center px-32">
      <div className="cardContainer h-[50vh] w-1/2 flex gap-5">
        <div className="card relative rounded-xl w-full  h-full bg-[#004D43] flex items-center justify-center">
          <img className="w-32" src="logo001.svg" alt="" />
          <button className="px-5 py-1 rounded-full border-2 border-[#CDEA68] absolute left-10 bottom-10 text-[#CDEA68]">
            &copy; 2019-2024
          </button>
        </div>
      </div>
      <div className="cardContainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative rounded-xl w-1/2 flex items-center justify-center h-full bg-[#192826] ">
          <img className="w-32" src="logo002.svg" alt="" />
          <button className="px-5 py-1 rounded-full border-2 border-[#CDEA68] absolute left-10 bottom-10 text-[#CDEA68]">
            &copy; 2019-2024
          </button>
        </div>
        <div className="card rounded-xl relative w-1/2 flex items-center justify-center  h-full bg-[#192826]">
          <img className="w-32" src="logo002.svg" alt="" />
          <button className="px-5 py-1 rounded-full border-2 border-[#CDEA68] absolute left-10 bottom-10 text-[#CDEA68]">
            &copy; 2019-2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
