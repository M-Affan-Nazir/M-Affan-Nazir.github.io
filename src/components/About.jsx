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
      className="w-full h-screen"
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
        I am a second-year Bachelor of Computing Science student at the University of Alberta, specializing in Artificial Intelligence. 
        I have honed my skills as a Software Engineer and AI Quality Assurance Specialist, building a strong foundation in machine learning, data science, and algorithm design. 
        My diverse projects include developing neural networks for facial recognition and cancer detection, creating a dynamic currency arbitrage engine in C++, and designing mobile apps and real-time mental state detection systems using tools like Python, TensorFlow, PyTorch, and React Native. 
        These experiences have equipped me with a deep understanding of both theoretical concepts and practical applications.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-[#5B6B7F] text-[17px] max-w-3xl leading-[30px]"
      >
        Beyond my technical expertise, I am passionate about continuous learning and collaboration. 
        I have actively participated in hackathons, leading the BrainWave SVM project for real-time mental state detection. 
        Additionally, as a Treasurer for the Undergraduate Artificial Intelligence Society, I oversaw ongoing projects and ensured proper funding to each, making sure they went to completion. 
        In my free time, I enjoy staying active through sports, hiking, and playing chess, while also keeping abreast of the latest advancements in machine learning and data science. 
        As an engineer and developer, I am always eager to explore new technologies, collaborate with like-minded individuals, and contribute to impactful projects.
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
