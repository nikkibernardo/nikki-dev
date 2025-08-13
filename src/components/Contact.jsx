import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

import { MdAttachEmail } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {

  return (
    <div className={`overflow-hidden mb-20`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <h3 className="text-[#915EFF] font-semibold text-2xl xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.1] md:leading-[1.15] tracking-tight text-center py-2">Let's work together</h3>
        <p className="text-center">Let’s collaborate and craft something extraordinary—your vision, built to perfection.</p>

        <div>
          <div className="flex justify-center items-center mt-12 flex-col bg-tertiary p-6 rounded-lg border-2 border-gray-600">
            <MdAttachEmail size={30}/>
            <h2 className="font-semibold text-xl">Email</h2>
            <p>bernardonikki12@gmail.com</p>
          </div>

          <div className="flex justify-center items-center mt-4 flex-col bg-tertiary p-6 rounded-lg border-2 border-gray-600">
            <RiContactsBookFill size={30}/>
            <h2 className="font-semibold text-xl">Contact Number</h2>
            <p>09763398048</p>
          </div>

          <div className="flex justify-center items-center mt-8 flex-col">
            <h2 className="font-semibold text-xl">Social Profiles</h2>
            <div className="flex flex-row gap-4 mt-2">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/marianne-nikki-bernardo-a36790370/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600 transition-colors"
              >
                <AiOutlineLinkedin size={32} />
              </a>
              
              {/* GitHub */}
              <a 
                href="https://github.com/nikkibernardo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors"
              >
                <FaGithub size={30} />
              </a>
              
            </div>
          </div>
        </div>
        
      </motion.div>

      {/* <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
