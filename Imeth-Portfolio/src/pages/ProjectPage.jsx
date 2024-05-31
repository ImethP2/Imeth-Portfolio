import { useState } from "react";
import Navbar from "../sections/navbar";
import Footer from "../sections/Footer";

const dummyProjects = [
  {
    id: 1,
    title: "SDGP (Group project)",
    description: `Built a website where rural schools can send seminar requests to the organization. When the organization accepted the request, it will redirect to volunteers.<br><br> 
    Tech Stack:<br>
    Front-end - React JS, Tailwind CSS, Back-end - NodeJS<br>
    API development - ExpressJS<br>
    Database - MongoDB<br>
    Authentication methods - Clerk component<br><br>
    Built a website where rural schools can send seminar requests to the organization. When the organization accepted the request, it will redirect to volunteers.<br><br>
    Skills: Software Development · Teamwork · Agile Methodologies · Software Testing · React.js · Tailwind CSS · MongoDB · Front-End Development · Web Development · Git · Databases`,
    language: "React",
    image: "/src/assets/SDGP.png",
    github: "https://github.com/ImethP2/SDGP-04",
  },
  {
    id: 2,
    title: "Shopping Platform",
    description:
      "Shoppng Management System where the owner can add, delete update products. and the user can purchase if the product is in stock, can get particular offers. And I have used JAVA-swing to demonstrate the products list and shopping cart to the user.<br><br> Tech Stack: Java, Java-Swing",
    language: "Java",
    image: "/src/assets/Shopping.svg",
    github: "https://github.com/ImethP2/Shoping-Platform",
  },
  {
    id: 3,
    title: "Archie-chatbot",
    description:
      "Developed a simple chatbot using Java and XML with an integration chatgpt API.<br><br> Tech Stack: Java,XML",
    language: "Java",
    image: "/src/assets/Chatbot.svg",
    github: "https://github.com/ImethP2/archie-chatbot",
  },
  {
    id: 4,
    title: "CornerKick website (Group Project)",
    description:
      "An insightful website about football information. It includes a homepage, quiz, shopping page, gallery and about us page.<br><br> Tech Stack: HTML, CSS, Javascript.",
    language: "HTML",
    image: "/src/assets/Football.svg",
    github: "https://github.com/ImethP2/CornerKick-website",
  },
  {
    id: 5,
    title: "Theatre management System",
    description:
      "Using this system user can sucsessfully do these operations, see the available seats, choose ticket type, book seats, cancel booking.<br><br> Tech Stack: Java",
    language: "Java",
    image: "/src/assets/Theatre.svg",
    github: "https://github.com/ImethP2/theater-management-system",
  },
  {
    id: 6,
    title: "Exam Management System",
    description:
      "This system has 2 users. They are students and lecturers. When the student enters their mark, they can check their grade. The lecturer can enter the marks of all the students and get their grades. Also, lecturers can get an analysis of the grades that students have obtained.<br><br> Tech Stack: Python",
    language: "Python",
    image: "/src/assets/Exam.svg",
    github:
      "https://github.com/ImethP2/Exam-mark-management-system-using-Python",
  },
];

function ProjectPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedLanguage
    ? dummyProjects.filter((project) => project.language === selectedLanguage)
    : dummyProjects;

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto mt-[25%] md:mt-[10%] px-8 md:px-0">
        <div className="w-full flex flex-col md:flex-row items-start justify-between ">
          <div>
            <h1 className="text-3xl font-roboto font-regular text-[#ffffff]">
              Projects
            </h1>
            <div className="w-[200%] md:w-[350%] h-px bg-white mt-2 mb-5 md:mb-10"></div>
          </div>
          <label className="block mb-10 md:mb-4 mr-16">
            <select
              className="form-select mt-1 block w-[200%] border rounded-sm"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">All</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="React">React</option>
              <option value="HTML">HTML</option>
            </select>
          </label>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border rounded-lg cursor-pointer w-[100%] md:full"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover mb-4 rounded-lg "
                />
                <h2 className="text-[#ffffff] text-lg mb-2 px-4">
                  {project.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white rounded-lg p-8 relative w-full max-w-md mx-4">
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-black"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4">{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-32 object-cover mb-4"
            />
            <p
              className="text-md font-pontano font-normal"
              dangerouslySetInnerHTML={{ __html: selectedProject.description }}
            ></p>

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ProjectPage;
