import { Link } from "react-router-dom";
import Imeth from "/src/assets/imeth.png";
import LinkedInIcon from "/src/assets/LinkedIn.png";
import GitHubIcon from "/src/assets/GitHub.png";
import GmailIcon from "/src/assets/Gmail.png";

function Hero() {
  return (
    <div className="relative w-full h-[95vh] pt-15 md:min-w-[945px]">
      {/* Background */}
      <div className="h-full w-full flex flex-col md:flex-row bg-[#999D9E]">
        {/* Text content */}
        <div className="h-[30%] md:w-[25%] md:h-full flex justify-center items-center">
          <div className="p-8 md:p-10 flex flex-col justify-center h-full text-center">
            <p
              className="text-white text-xl md:text-[1.6rem] md:leading-[150%] fontWeight: 100"
              style={{ fontFamily: "Pontano Sans, sans-serif" }}
            >
              Software Engineering
              <br />
              <span className="text-black">Undergraduate</span>
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="h-[50%] md:w-[50%] md:h-full flex justify-center items-end">
          <img
            className="md:block max-h-[95%] h-auto object-contain"
            src={Imeth}
            alt=""
          />
        </div>
        {/* Name and Social Media */}
        <div className="h-[50%] md:w-[25%] md:h-full flex flex-col justify-end items-center relative">
          <div className="absolute top-20 md:top-[30%] right-10 md:right-20 flex flex-col items-center space-y-4">
            <div className="w-[4%] h-20 bg-white"></div>
            <a
              href="https://github.com/ImethP2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GitHubIcon}
                alt="GitHub"
                className="w-8 h-8 md:w-9 md:h-9"
              />
            </a>
            <a
              href="http://www.linkedin.com/in/imeth-pathirana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedInIcon}
                alt="LinkedIn"
                className="w-8 h-8 md:w-9 md:h-9"
              />
            </a>
            <a href="mailto:imethp2@gmail.com">
              <img
                src={GmailIcon}
                alt="Gmail"
                className="w-8 h-8 md:w-9 md:h-9"
              />
            </a>
            <div className="w-[4%] h-20 bg-white"></div>
          </div>
          <div className="absolute bottom-0 left-0 text-left">
            <p
              className="pb-10 text-white text-xl md:text-[2.5rem] font-semi-bold "
              style={{ fontFamily: "Pontano Sans, sans-serif" }}
            >
              Imeth Pathirana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
