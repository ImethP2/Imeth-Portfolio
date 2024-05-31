import { Link } from "react-router-dom";
import Gmail from "/src/assets/Gmail.svg";
import LinkedIn from "/src/assets/LinkedIn.svg";
import GitHub from "/src/assets/GitHub.svg";
import Whatsapp from "/src/assets/WhatsAppw.svg";

function Projects() {
  return (
    <div className="relative w-screen pt-15 md:min-w-[945px] flex flex-col items-center text-white pt-[3%] mb-4">
      {/* Row 1: Heading */}
      <div className="w-full flex flex-col items-end px-8 md:px-16 pt-8 md:pt-16">
        <div className="w-[100%]  h-px bg-white mt-2"></div>
      </div>
      {/* Row 2: Description and Project.png */}
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between md:px-16 ">
        <div className="w-[100%] md:w-[50%] flex flex-col md:items-start  items-center mt-2 md:mt-0">
          <p className="text-lg font-light text-justify leading-[250%] ">
            2024@Edition
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] flex justify-center items-center md:justify-end md:items-end mt-1 md:mt-0 space-x-3">
          <a
            href="https://github.com/ImethP2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="GitHub" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a
            href="http://www.linkedin.com/in/imeth-pathirana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
          <a href="mailto:imethp2@gmail.com">
            <img src={Gmail} alt="Gmail" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a
            href="https://wa.me/message/TQ32HIJSXFCBN1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Whatsapp}
              alt="LinkedIn"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
