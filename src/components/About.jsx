import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] bg-[#2563FF] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-[#0D1A26] text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <section
      id="about"
    >
      {/*change this for gradient*/}
      <div
      className="
        absolute inset-y-0 left-1/2 w-screen
        -translate-x-1/2
        bg-gradient-to-b from-[#F9FAFF] to-primary
        -z-10
        pointer-events-none
      "
    />
    <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Who am I</p> */}
        <h2 className={`${styles.sectionHeadText} text-[black]`}>
          About Me
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#5B6B7F] text-[17px] max-w-3xl leading-[30px]"
      >
      I'm a 3rd-year Computing Science student at the University of Alberta, passionate about leveraging Data Science techniques to build advanced predictive models and translate data into business value. I am also skilled in developing scalable software solutions.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#5B6B7F] text-[17px] max-w-3xl leading-[30px]"
      >
      My expertise lie in applying statistical methods with tools such as IBM SPSS and R to extract actionable insights, while leveraging Python libraries like Sci-kit Learn, TensorFlow and PyTorch to develop robust models.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-[#5B6B7F] text-[17px] max-w-3xl leading-[30px]"
      >
      Inspired by timeless lessons from books like *Zero to One* - I enjoy working on start-up ideas that blend software engineering and machine learning to tackle problems faced by my circle.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-[#5B6B7F] text-[17px] max-w-3xl leading-[30px]"
      >
        In my down time, you'll find me designing on prototype solutions with like minded friends, hiking, or spending time with loved ones!
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </section>
  );
};

export default SectionWrapper(About, "about");
