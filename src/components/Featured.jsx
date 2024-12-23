import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px]  border-zinc-700 pb-20 ">
        <h1 className="text-7xl tracking-tight"> Featured Projects </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="card-container relative w-1/2 h-[75vh]   ">
            <h1 className="text-[#cdea68] absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl leading-none tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                className="w-full h-full bg-cover"
                alt=""
              />
            </div>
          </div>
          <div className="card-container relative w-1/2 h-[75vh]   ">
            <div className="card w-full h-full  rounded-xl overflow-hidden bg-zinc-800">
              <h1 className="text-[#cdea68] absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl leading-none tracking-tighter">
                {"VISE".split("").map((item, index) => (
                  <span>{item}</span>
                ))}
              </h1>
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                className="w-full h-full bg-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
