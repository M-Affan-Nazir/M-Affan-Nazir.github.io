import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { links } from "../constants/index";

import Typewriter from "typewriter-effect";


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import favicon from "../favicon.ico";

const Hero = () => {
  return (
    <section
      className="relative w-full mx-auto"
      style={{ height: window.screen.availHeight * 0.8 }}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* little dot + line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#2563FF]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#2563FF] to-transparent" />
        </div>

        {/* intro text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-[black]`}>
            Hi, I'm <span className="text-[#2563FF]">Affan</span>
          </h1>

          <p className={`${styles.heroSubText} mt-4 mb-10`}>
          👋🏼 I’m a 3rd‑year Computing Science student at the University of Alberta, turning data into insights and crafting solutions that make an impact.
          </p>

          <div className="flex items-center justify-center gap-x-11">
            <Link to={links.linkedin} target="_blank">
              <i className="fa-brands fa-linkedin fa-2x cursor-pointer text-[#0D1A26] hover:text-[#2563FF]"></i>
            </Link>
            <Link to={links.github} target="_blank">
              <i className="fa-brands fa-github fa-2x cursor-pointer text-[#0D1A26] hover:text-[#2563FF]"></i>
            </Link>
            <Link to={`mailto:${links.schoolEmail}`} target="_blank">
              <i className="fa-solid fa-envelope fa-2x cursor-pointer text-[#0D1A26] hover:text-[#2563FF]"></i>
            </Link>
          </div>


          {/* <div className={`${styles.heroTypedText} mt-2`}>
            <Typewriter
              options={{
                strings: ["Data Scientist", "Software Engineer"],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 75,
                deleteSpeed: 30,
                pauseFor: 1100,
                wrapperClassName: "text-[#5B6B7F]",
                cursorClassName: "text-[#2563FF]",
              }}
            />
          </div> */}

          {/* Uncomment when you add your resume */}
          {/* 
          <a href={links.resume} target="_blank">
            <button
              className={`${styles.heroSubText} bg-[#2563FF] rounded-full text-white text-center mt-4 px-5 py-1`}
            >
              <i className="fa-solid fa-file-lines fa-xs pr-3"></i>
              Resume
            </button>
          </a>
          */}
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* scroll indicator */}
      <div className="absolute bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#5B6B7F] flex justify-center items-start p-2 mb-5">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-[#5B6B7F] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
