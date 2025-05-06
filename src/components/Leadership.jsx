import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { leadership } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const LeadershipCard = ({ item }) => (
  <VerticalTimelineElement
    // card background → white; text → primary
    contentStyle={{ background: "#FFFFFF", color: "#0D1A26" }}
    // arrow → white to match card
    contentArrowStyle={{ borderRight: "7px solid #FFFFFF" }}
    date={item.date}
    // date text → secondary
    dateClassName="text-[#5B6B7F]"
    // icon border (you already set) stays; iconBg stays
    iconStyle={{ background: item.iconBg, border: "2px solid #2563FF" }}
    icon={
      <a href={item.company_link} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={item.icon}
            alt={item.company_name}
            className="w-[60%] h-[60%] object-contain cursor-pointer"
          />
        </div>
      </a>
    }
  >
    <div>
      {/* title → primary */}
      <h3 className="text-[#0D1A26] text-[24px] font-bold">
        {item.title}
      </h3>
      {/* company link → accent */}
      <a
        href={item.company_link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2563FF] text-[16px] font-semibold cursor-pointer"
        style={{ margin: 0 }}
      >
        {item.company_name}
      </a>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {item.points.map((p, i) => (
        // points → secondary
        <li
          key={i}
          className="text-[#5B6B7F] text-[14px] pl-1 tracking-wider"
        >
          {p}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Leadership = () => (
  <>
    <motion.div variants={textVariant()}>
      {/* subtitle → secondary */}
      <p className={`${styles.sectionSubText} text-[#5B6B7F]`}>
        Things I do that aren't work, but are just as valuable
      </p>
      {/* heading → primary */}
      <h2 className={`${styles.sectionHeadText} text-[black]`}>
        Leadership Experience
      </h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline lineColor="#2563FF">
        {leadership.map((item, idx) => (
          <LeadershipCard key={idx} item={item} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Leadership, "Leadership");
