import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "/src/assets/me.svg";
import HandShake from "/src/assets/HandShake.svg";
import Call from "/src/assets/call.png";
import Gmail from "/src/assets/gmail2.png";
import Download from "/src/assets/download.svg";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative w-full pt-15 md:min-w-[945px] flex flex-col items-center text-white pt-[3%]" id="Contact">
      {/* Row 1: Heading */}
      <div
        className="w-full flex flex-col items-start px-8 md:px-16 pt-8 md:pt-16"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h1 className="text-2xl md:text-3xl font-pontano">Contact</h1>
        <div className="w-[50%] h-px bg-white mt-2"></div>
      </div>
      {/* Row 2: Description and Project.png */}
      <div
        className="w-full flex flex-col md:flex-row justify-between px-8 md:px-16 mt-8 md:mt-16"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div className="w-full flex flex-col md:flex-row items-center md:items-start">
          <div className="w-[50%] md:w-[7%] mt-8 md:mt-6 flex justify-center md:justify-start">
            <img
              className="object-cover w-20 md:w-auto"
              src={Project}
              alt="Project"
              data-aos="fade-right"
              data-aos-duration="2500"
            />
          </div>
          <h1
            className="text-[200%] md:text-[400%] font-bold mt-8 md:mt-5 md:ml-20 text-center md:text-left font-poppins"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            Let’s Work Together!
          </h1>
        </div>
      </div>
      <div
        className="w-full flex justify-center mt-12 md:mt-20"
        data-aos="fade-right"
        data-aos-duration="2500"
      >
        <img
          className="object-cover w-[80%] md:w-[30%]"
          src={HandShake}
          alt="Handshake"
        />
      </div>
      <div
        className="w-full flex flex-col md:flex-row justify-center items-center mt-12 md:mt-20 space-y-6 md:space-y-0 md:space-x-20"
        data-aos="fade-right"
        data-aos-duration="2500"
      >
        <button className="flex items-center border border-white py-2 px-4 md:py-4 md:px-6 rounded-md text-white text-md md:text-xl font-pontano">
          <img src={Call} alt="Call" className="w-5 h-5 mr-4" />
          (+94) 75 690 6613
        </button>
        <button className="flex items-center border border-white py-2 px-4 md:py-4 md:px-6 rounded-md text-white text-md md:text-xl font-pontano">
          <img src={Gmail} alt="Email" className="w-5 h-5 mr-4" />
          imethp2@gmail.com
        </button>
        <a
          href="https://drive.google.com/drive/folders/1xBJ48XsiwD_0YSh0gTKhjf_pI27_bA9z?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border border-white py-2 px-4 md:py-4 md:px-6 rounded-md text-white text-md md:text-xl font-pontano"
        >
          <img src={Download} alt="Download" className="w-5 h-5 mr-2" />
          <span className="w-5 h-5 "></span>
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Contact;
