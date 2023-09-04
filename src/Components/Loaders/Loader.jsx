import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import { isMobile } from "../../utils/devices";
import { setIsLoading } from "../../features/general";

const Loader = () => {
  const { isLoading } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.25,
        when: "afterChildren",
      },
    },
  };

  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full h-screen bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      //   onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        // document.body.classList.remove("overflow-hidden")
        dispatch(setIsLoading(false))
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
        </pattern>
        <text
          className="text-3xl font-bold"
          textAnchor="middle"
          x={isMobile() ? "50%" : "45%"}
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          Tapdig Abdullayev
        </text>
      </motion.svg>
    </motion.div>
  );
};

export default Loader;
