import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { links } from "../constants/index";
import favicon from "../favicon.ico";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
      setToggle(false);
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20
        ${scrolled ? "bg-primary" : "bg-transparent"}
        transition duration-500
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-x-3">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="flex gap-x-3">
              <img src={favicon} className="h-[30px] cursor-pointer" />
              <p className="text-[#0D1A26] text-[18px] lg:text-[22px] font-bold cursor-pointer sm:flex hidden">
                Affan Nazir
              </p>
            </div>
          </Link>
          <p className="text-[#5B6B7F] text-[26px] font-bold">|</p>
          <Link to={links.linkedin} target="_blank">
            <i className="fa-brands fa-linkedin fa-xl cursor-pointer text-[#0D1A26] hover:text-[#2563FF]"></i>
          </Link>
          <Link to={links.github} target="_blank">
            <i className="fa-brands fa-github fa-xl cursor-pointer text-[#0D1A26] hover:text-[#2563FF]"></i>
          </Link>
          {/* <Link to={links.resume} target="_blank">
            <i className="fa-solid fa-file-lines fa-xl cursor-pointer text-[#0D1A26] hover:text-[#2563FF]"></i>
          </Link> */}
          <Link to={`mailto:${links.schoolEmail}`} target="_blank">
            <i className="fa-solid fa-envelope fa-xl cursor-pointer text-[#0D1A26] hover:text-[#2563FF]"></i>
          </Link>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                ${active === nav.id ? "text-[#2563FF]" : "text-[#5B6B7F]"}
                hover:text-[#2563FF] text-[18px] font-medium cursor-pointer
              `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <i
            className={`
              ${toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"} fa-xl
              cursor-pointer text-[#0D1A26]
            `}
            onClick={() => setToggle(!toggle)}
          ></i>
          <div
            className={`
              transition-all duration-500
              ${toggle ? "opacity-100" : "opacity-0"}
              p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
              z-10 rounded-xl
            `}
            style={{ animation: "fadeIn 5s" }}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`
                    text-[16px] font-medium cursor-pointer
                    ${active === nav.id ? "text-[#2563FF]" : "text-[#5B6B7F]"}
                  `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
