import { motion } from "motion/react";
import React, { useState } from "react";
import { Power4 } from "gsap";

function Featured() {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px]  border-zinc-700 pb-20 ">
        <h1 className="text-7xl tracking-tight"> Featured Projects </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => {
              setIsHovering1(true);
            }}
            onMouseLeave={() => {
              setIsHovering1(false);
            }}
            className="card-container relative w-1/2 h-[75vh]   "
          >
            <h1 className="text-[#cdea68] flex overflow-hidden absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl leading-none tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering1 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.01 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
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
          <div
            onMouseEnter={() => {
              setIsHovering2(true);
            }}
            onMouseLeave={() => {
              setIsHovering2(false);
            }}
            className="card-container relative w-1/2 h-[75vh]   "
          >
            <div className="card w-full h-full  rounded-xl overflow-hidden bg-zinc-800">
              <h1 className="text-[#cdea68] flex overflow-hidden absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl leading-none tracking-tighter">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHovering2 ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.83, 0, 0.17, 1],
                      delay: index * 0.01,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
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
