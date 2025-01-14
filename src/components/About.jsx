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
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Who am I</p> */}
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a second-year Bachelor of Computing Science student at the University of Alberta, specializing in Artificial Intelligence. 
        I have honed my skills as a Software Engineer and AI Quality Assurance Specialist, building a strong foundation in machine learning, data science, and algorithm design. 
        My diverse projects include developing neural networks for facial recognition and cancer detection, creating a dynamic currency arbitrage engine in C++, and designing mobile apps and real-time mental state detection systems using tools like Python, TensorFlow, PyTorch, and React Native. 
        These experiences have equipped me with a deep understanding of both theoretical concepts and practical applications.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Beyond my technical expertise, I am passionate about continuous learning and collaboration. 
        I have actively participated in hackathons, leading the BrainWave SVM project for real-time mental state detection. 
        Additionally, as a Treasurer for the Undergraduate Artificial Intelligence Society, I oversaw ongoing projects and ensured proper funding to each, making sure they went to completion. 
        In my free time, I enjoy staying active through sports, hiking, and playing chess, while also keeping abreast of the latest advancements in machine learning and data science. 
        As an engineer and developer, I am always eager to explore new technologies, collaborate with like-minded individuals, and contribute to impactful projects.{" "}
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
