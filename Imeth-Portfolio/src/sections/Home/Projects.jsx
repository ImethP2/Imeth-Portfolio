import { Link } from "react-router-dom";
import Project from "/src/assets/Project.png";
import Next from "/src/assets/Next.svg";

function Projects() {
  return (
    <div className="relative w-screen pt-15 md:min-w-[945px] flex flex-col items-center text-white pt-[3%]">
      {/* Row 1: Heading */}
      <div className="w-full flex flex-col items-end px-8 md:px-16 pt-8 md:pt-16">
        <h1 className="text-2xl md:text-3xl font-pontano">Projects</h1>
        <div className="w-[50%] h-px bg-white mt-2"></div>
      </div>
      {/* Row 2: Description and Project.png */}
      <div className="w-full flex flex-col md:flex-row justify-between pr-8 md:pr-16 ">
        <div className="w-full md:w-[50%] flex justify-center items-start mt-6 md:mt-0">
          <img
            className="object-cover w-[50%] h-auto"
            src={Project}
            alt="Project"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-start mt-6 md:mt-0 pl-8">
          <p className="text-md md:text-xl font-light text-justify leading-[150%] md:leading-[250%]  mt-6 font-pontano">
            I have worked on many projects covering Java, Python, Reactjs,
            Tailwind CSS, HTML5, CSS, JavaScript languages. Explore more.
          </p>
          <Link to="/projects">
            <img
              className="object-cover cursor-pointer md:w-[90%] w-[60%] h-auto pt-6"
              src={Next}
              alt="Go to Projects"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
