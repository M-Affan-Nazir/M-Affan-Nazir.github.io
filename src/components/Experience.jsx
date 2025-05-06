import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#FFFFFF",
        color: "#0D1A26",
      }}
      contentArrowStyle={{ borderRight: "7px solid #FFFFFF" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, border: "2px solid #2563FF" }}
      icon={
        <a
          href={experience.company_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain cursor-pointer"
            />
          </div>
        </a>
      }
    >
      <div>
        <h3 className="text-[#0D1A26] text-[24px] font-bold">
          {experience.title}
        </h3>
        <a
          href={experience.company_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2563FF] text-[16px] font-semibold cursor-pointer"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </a>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[#5B6B7F] text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-x-2">
        {experience.technologies.map((technology, index) => (
          <p
            key={index}
            className="rounded-full pl-3 pr-3"
            style={{
              background: technology.backCol,
              color: technology.textCol,
            }}
          >
            {technology.name}
          </p>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#5B6B7F]`}>
          What I've have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-[black]`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#2563FF">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
