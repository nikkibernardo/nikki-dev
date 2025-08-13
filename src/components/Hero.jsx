import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
  <span id="home" className="hash-span">&nbsp;</span>
  <div className={`absolute inset-0 top-[8vh] sm:top-[12vh] md:top-[15vh] lg:top-[18vh] xl:top-[18vh] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 md:gap-8`}>
    {/* Text Content */}
    <div className="w-full lg:w-[40%] xl:w-[35%] text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0 z-10">
      <p className={`${styles.heroSubText} text-white-100 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl transition-all duration-300`}>
        HELLO I'M <br className="hidden sm:inline-block" />
      </p>
      <h1 className="text-white font-sans font-bold">
        <span className="text-gray-100 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] md:leading-[1.15] tracking-tight">
          NIKKI BERNARDO
        </span>
      </h1>
      <p className={` text-[#915EFF] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition-all duration-300`}>
        A Web Designner and Developer <br className="hidden sm:inline-block" />
      </p>
      <div className="flex flex-row items-center justify-center lg:justify-start mt-8 gap-6 text-gray-300">
        <a 
          href="https://www.linkedin.com/in/marianne-nikki-bernardo-a36790370/" 
          target="_blank" 
          rel="noopener noreferrer"
          className=" hover:text-[#915EFF] transition-colors"
        >
          <AiOutlineLinkedin size={32} />
        </a>
        <a 
          href="https://github.com/nikkibernardo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-[#915EFF] transition-colors"
        >
          <FaGithub size={30} />
        </a>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className=" hover:text-[#915EFF] transition-colors"
        >
          <MdAttachEmail size={30}/>
        </a>
      </div>
    </div>

    {/* Earth Canvas - Now properly responsive */}
    <div className="w-full lg:w-[60%] xl:w-[65%] order-1 lg:order-2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] relative">
      <motion.div 
        variants={slideIn("left", "tween", 0.2, 1)} 
        className="absolute inset-0 w-full h-full"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default Hero;
