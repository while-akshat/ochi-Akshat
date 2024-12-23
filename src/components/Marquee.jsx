import { motion } from "motion/react";
import React from "react";
import LocomotiveScroll from "locomotive-scroll";
function Marquee() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc flex  overflow-hidden whitespace-nowrap ">
        <motion.h1
          initail={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          className="text-[24vw] leading-none uppercase pt-2 pr-20 gap-10 font-[1000]"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initail={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          className="text-[24vw] leading-none uppercase pt-2 pr-20  gap-10 font-[1000]"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
