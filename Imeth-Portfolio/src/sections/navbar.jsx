// Navbar.jsx
import React from "react";
import imethLogo from "/src/assets/logoI1.png";

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="bg-[#999D9E] px-4 fixed w-screen z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img
            className="md:block md:w-[50%] pt-3 h-auto object-contain"
            src={imethLogo}
            alt=""
          />
        </div>
        <div className="flex items-center"></div>
        <ul className="md:flex md:space-x-10 md:items-center">
          <li>
            <button
              className="text-[#ffffff] hover:text-gray-300 text-sm "
              onClick={() => onNavigate("section1")}
              style={{ fontFamily: "Pontano Sans, sans-serif" }}
            >
              About me
            </button>
          </li>
          <li>
            <button
              className="text-[#ffffff] hover:text-gray-300 text-sm "
              onClick={() => onNavigate("section2")}
              style={{ fontFamily: "Pontano Sans, sans-serif" }}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="text-[#ffffff] hover:text-gray-300 text-sm font-thin"
              onClick={() => onNavigate("section3")}
              style={{ fontFamily: "Pontano Sans, sans-serif" }}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
