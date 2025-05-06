import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-white p-5 rounded-2xl sm:w-[300px] w-full h-full relative shadow-lg"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2563FF] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <i className="fa-brands fa-github fa-xl text-white"></i>
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[#0D1A26] font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-[#5B6B7F] text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 pt-1 pb-1">
          <div className="absolute bottom-3 flex gap-x-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Some things I've worked on</p> */}
        <h2 className={`${styles.sectionHeadText} text-[black]`}>
          Projects
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
