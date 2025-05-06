import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";

import { links } from "../constants/index";

const Footer = () => {
  return (
    <div className="text-center">
      <div className="flex items-center gap-x-4 justify-center mb-10">
        <Link to={links.linkedin} target="_blank">
          <i className="fa-brands fa-linkedin fa-xl cursor-pointer text-[#2563FF] hover:opacity-80"></i>
        </Link>
        <Link to={links.github} target="_blank">
          <i className="fa-brands fa-github fa-xl cursor-pointer text-[#2563FF] hover:opacity-80"></i>
        </Link>
        {/* <Link to={links.resume} target="_blank">
          <i className="fa-solid fa-file-lines fa-xl cursor-pointer text-[#2563FF] hover:opacity-80"></i>
        </Link> */}
        <Link to={`mailto:${links.schoolEmail}`} target="_blank">
          <i className="fa-solid fa-envelope fa-xl cursor-pointer text-[#2563FF] hover:opacity-80"></i>
        </Link>
      </div>
      <p className="mb-2 text-[#5B6B7F]">{`</>`} with 🫶🏻 and 🧋</p>
      <p className="mb-2 text-[#5B6B7F]">
        Copyright © {new Date().getFullYear()} Affan Nazir
      </p>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
