import React, { useState } from "react";
import imethLogo from "/src/assets/logoI1.png";
import section1 from "./Home/aboutme";
import section2 from "../pages/ProjectPage";
import section3 from "./Home/Contact";

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#999D9E] px-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="flex-shrink-0">
          <img
            className="w-24 md:w-[50%] h-auto object-contain"
            src={imethLogo}
            alt="Logo"
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 md:items-center mt-4 md:mt-0">
            <li>
              <button
                className="text-white hover:text-gray-300 text-md font-pontano"
                onClick={() => onNavigate("aboutMe")}
              >
                About me
              </button>
            </li>
            <li>
              <button
                className="text-white hover:text-gray-300 text-md font-pontano"
                onClick={() => onNavigate("projects")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className="text-white hover:text-gray-300 text-md font-pontano"
                onClick={() => onNavigate("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
