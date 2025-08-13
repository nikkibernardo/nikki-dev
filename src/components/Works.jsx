import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gray-800"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] text-[#915EFF]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className="relative w-full mx-auto">
      <span id="work" className="hash-span">&nbsp;</span>
        <motion.div variants={textVariant()}>
            {/* <p className={styles.sectionSubText}>Introduction</p> */}
          <h2 className={`text-gray-100 font-semibold text-2xl xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.1] md:leading-[1.15] tracking-tight text-center`}>My Projects</h2>
        </motion.div>
    
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="my-4 mb-8 text-[17px] text-center mx-auto w-full md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] max-w-[800px]"
        >
          Following projects showcase my skills and experience through examples of my work.
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
