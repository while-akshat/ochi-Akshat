import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", function (e) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="w-full relative h-full bg-[url('bg.jpg')] bg-center bg-cover "
      >
        <div className="absolute gap-10 flex justify-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  ">
          <div className="w-[15vw] flex items-center justify-center rounded-full h-[15vw]  bg-zinc-100">
            <div className="h-2/3 w-2/3 relative  rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="h-10 w-10 bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] flex justify-center items-center rounded-full h-[15vw]  bg-zinc-100">
            <div className="h-2/3 w-2/3 rounded-full relative  bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="h-10 w-10 bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
