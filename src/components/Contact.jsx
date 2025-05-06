import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas, ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-white p-8 rounded-2xl"
      >
        {/* <p className={styles.sectionSubText}>Say hello</p> */}
        <h1 className={`${styles.getInTouch} text-[#0D1A26]`}>
          GET IN TOUCH
        </h1>
        <h3 className={`${styles.sectionHeadText} text-[black]`}>
          Contact
        </h3>

        <div className="mt-12 flex flex-col gap-8">
          <p className="text-[#5B6B7F] font-medium mb-4">
            You can reach me via:
          </p>

          <p className="bg-[#2563FF] py-4 px-6 text-white rounded-lg">
            <a
              href="https://github.com/M-Affan-Nazir"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 GitHub
            </a>
          </p>

          <p className="bg-[#2563FF] py-4 px-6 text-white rounded-lg">
            <a href="mailto:dm.affan@outlook.com">🔗 Email</a>
          </p>

          <p className="bg-[#2563FF] py-4 px-6 text-white rounded-lg">
            <a
              href="https://www.linkedin.com/in/affan-nazir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
