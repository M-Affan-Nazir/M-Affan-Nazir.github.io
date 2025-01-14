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
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      } transition duration-500`}
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
              <p className="text-white text-[18px] lg:text-[22px] font-bold cursor-pointer sm:flex hidden">
                Affan Nazir
              </p>
            </div>
          </Link>
          <p className="text-white text-[26px] font-bold flex">|</p>
          <Link to={links.linkedin} target="_blank">
            <i className="fa-brands fa-linkedin fa-xl cursor-pointer"></i>
          </Link>
          <Link to={links.github} target="_blank">
            <i className="fa-brands fa-github fa-xl cursor-pointer"></i>
          </Link>
          {/* <Link to={links.resume} target="_blank">
            <i className="fa-solid fa-file-lines fa-xl cursor-pointer"></i>
          </Link> */}
          <Link to={`mailto:${links.schoolEmail}`} target="_blank">
            <i className="fa-solid fa-envelope fa-xl cursor-pointer"></i>
          </Link>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center align-middle">
          <i
            className={
              toggle ? "fa-solid fa-xmark fa-2xl" : "fa-solid fa-bars fa-xl"
            }
            onClick={() => setToggle(!toggle)}
          ></i>
          <div
            className={`transition-all duration-500 ${
              toggle ? "opacity-100" : "opacity-0"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            style={{ animation: "fadeIn 5s" }}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
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
