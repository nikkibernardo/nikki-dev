import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {/* <div src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy"></div> */}

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        <p className="text-white text-[15px] text-center">{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={`text-gray-100 font-semibold text-2xl xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.1] md:leading-[1.15] tracking-tight text-center`}>About me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-[17px] text-center mx-auto w-full md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] max-w-[800px]"
      >
        I'm a web developer and designer passionate about crafting visually engaging, user-focused digital experiences. I thrive at the intersection of clean design and functional code, building websites and applications that feel seamless and intuitive.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      




    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
