import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Imeth from "/src/assets/imeth.png";
import LinkedInIcon from "/src/assets/LinkedIn.png";
import GitHubIcon from "/src/assets/GitHub.png";
import GmailIcon from "/src/assets/Gmail.png";
import Whatsapp from "/src/assets/WhatsApp.svg";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative w-full md:h-[95vh] pt-15 md:min-w-[945px]">
      {/* Background */}
      <div className="h-40% w-full flex flex-col md:flex-row bg-[#999D9E]">
        {/* Small screens layout */}
        <div className="block md:hidden w-full  flex-col items-center text-center pt-20">
          <p className="pb-4 text-2xl font-poppins text-black">
            Imeth Pathirana
          </p>
          <p className="text-white text-lg font-pontano">
            Software Engineering
            <br />
            <span className="text-black">Undergraduate</span>
          </p>
          <div className="flex justify-center space-x-4 py-4">
            <a
              href="https://github.com/ImethP2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHubIcon} alt="GitHub" className="w-8 h-8" />
            </a>
            <a
              href="http://www.linkedin.com/in/imeth-pathirana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="mailto:imethp2@gmail.com">
              <img src={GmailIcon} alt="Gmail" className="w-8 h-8" />
            </a>
          </div>
          <div className="flex items-end bottom-0">
            <img
              className="block max-h-[95%] h-auto object-contain"
              src={Imeth}
              alt="Imeth"
            />
          </div>
        </div>

        {/* Larger screens layout */}
        <div className="hidden md:flex md:w-full">
          <div className="relative w-full h-[95vh] pt-15 md:min-w-[945px]">
            {/* Background */}
            <div className="h-full w-full flex flex-col md:flex-row bg-[#999D9E]">
              {/* Text content */}
              <div className="flex justify-center items-center">
                <div
                  className=" w-full pl-8 md:pl-16 md:pb-40 flex flex-col justify-center h-full text-center"
                  data-aos="fade-down"
                  data-aos-duration="2500"
                >
                  <p className="text-white text-xl md:text-[2.0rem] md:leading-[155%] font-pontano">
                    Software Engineering
                    <br />
                    <span className="text-black font-pontano">
                      Undergraduate
                    </span>
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
                <div className="absolute top-30 md:top-[20%] right-10 md:right-[15%] flex flex-col items-center space-y-4">
                  <div
                    className="w-[3%] h-20 bg-white"
                    data-aos="fade-down"
                    data-aos-duration="2500"
                  ></div>
                  <a
                    href="https://github.com/ImethP2"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-right"
                    data-aos-duration="2500"
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
                    data-aos="fade-left"
                    data-aos-duration="2500"
                  >
                    <img
                      src={LinkedInIcon}
                      alt="LinkedIn"
                      className="w-8 h-8 md:w-9 md:h-9"
                    />
                  </a>
                  <a
                    href="mailto:imethp2@gmail.com"
                    data-aos="fade-right"
                    data-aos-duration="2500"
                  >
                    <img
                      src={GmailIcon}
                      alt="Gmail"
                      className="w-8 h-8 md:w-9 md:h-9"
                    />
                  </a>
                  <a
                    href="https://wa.me/message/TQ32HIJSXFCBN1"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-left"
                    data-aos-duration="2500"
                  >
                    <img
                      src={Whatsapp}
                      alt="WhatsApp"
                      className="w-8 h-8 md:w-9 md:h-9"
                    />
                  </a>
                  <div
                    className="w-[3%] h-20 bg-white"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  ></div>
                </div>
                <div className="absolute bottom-0 left-0 text-left">
                  <p className="pb-[20%] text-white text-xl md:text-[2.2rem] font-poppins ">
                    Imeth Pathirana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
