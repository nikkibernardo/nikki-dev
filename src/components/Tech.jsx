import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const renderTechnologies = () => {
  return technologies.map(({ name, icon }) => (
    <div className="w-28 h-28" key={name}>
      <BallCanvas icon={icon} />
    </div>
  ));
};

const Tech = () => (
  <section className="relative w-full mx-auto">
    <span id="skills" className="hash-span">&nbsp;</span>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={`text-gray-100 font-semibold text-2xl xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.1] md:leading-[1.15] tracking-tight text-center`}>Technical Skills</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="my-4 mb-8 text-[17px] text-center mx-auto w-full md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] max-w-[800px]"
      >
        Here are the technologies and tools I use to create web products and applications
      </motion.p>

    <div className="flex flex-row flex-wrap justify-center gap-10">
      {renderTechnologies()}
    </div>
  </section>
);

export default SectionWrapper(Tech, "");
