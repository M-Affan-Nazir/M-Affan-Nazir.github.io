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
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={item.date}
    iconStyle={{ background: item.iconBg }}
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
      <h3 className="text-white text-[24px] font-bold">{item.title}</h3>
      <a
        href={item.company_link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary text-[16px] font-semibold cursor-pointer"
        style={{ margin: 0 }}
      >
        {item.company_name}
      </a>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {item.points.map((p, i) => (
        <li
          key={i}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
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
      <p className={styles.sectionSubText}>Things I do that aren't work, but are just as valuable</p>
      <h2 className={styles.sectionHeadText}>Leadership Experience</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {leadership.map((item, idx) => (
          <LeadershipCard key={idx} item={item} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Leadership, "Leadership");
