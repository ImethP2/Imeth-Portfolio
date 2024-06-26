import React, { useState, useEffect } from "react";
import About1 from "/src/assets/AboutMe1.png";
import About2 from "/src/assets/EvonsysQA.svg"; // Ensure you have different images
import About3 from "/src/assets/Certificate.jpg"; // Ensure you have different images
import Skills from "/src/assets/Skills.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  const images = [About1, About2, About3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative w-screen pt-15 md:min-w-[945px] flex flex-col items-center text-white">
      {/* Row 1: Heading */}
      <div
        className="w-full flex flex-col items-start px-8 md:px-16 pt-8 md:pt-16"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500" // 1 second
      >
        <h1 className="text-2xl md:text-3xl font-pontano">About me</h1>
        <div className="w-[50%] h-px bg-white mt-2"></div>
      </div>
      {/* Row 2: Description and AboutMe1.png */}
      <div
        className="w-full flex flex-col md:flex-row items-start justify-between px-8 md:px-16"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000" // 1.5 seconds
      >
        <p className="w-full md:w-[50%] text-md md:text-xl font-light text-justify leading-[150%] md:leading-[250%] mt-6 font-pontano">
          A 2nd-year Software Engineering undergraduate student who is
          passionate about programming and problem-solving. Proficient in Java,
          Python, and web development. I possess the technical skills necessary
          to develop innovative solutions. Additionally, I have a track record
          of demonstrating leadership, teamwork, and event-handling abilities
          through successful group projects and active participation in coding
          competitions and IEEE CS club activities.
        </p>
        <div
          className="w-full md:w-[40%] mt-6 md:mt-0 md:ml-10 flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2500" // 2 seconds
        >
          <img
            className="object-cover"
            src={images[currentImageIndex]}
            alt="About Me"
          />
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-2 rounded-full cursor-pointer ${
                  index === currentImageIndex
                    ? "bg-white"
                    : "border border-white bg-transparent"
                }`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {/* Row 4: Skills.png */}
      <div
        className="w-full flex justify-center item-center mt-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000" // 2.5 seconds
      >
        <img
          className="w-[80%] md:w-[60%] object-cover"
          src={Skills}
          alt="Skills"
        />
      </div>
    </div>
  );
}

export default AboutMe;
