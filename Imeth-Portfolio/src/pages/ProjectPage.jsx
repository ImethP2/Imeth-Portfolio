import { useState } from "react";
import Navbar from "../sections/navbar";
import Footer from "../sections/Footer";

const dummyProjects = [
  {
    id: 1,
    title: "Java Project",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    language: "Java",
    image: "/src/assets/javaP.png",
    github: "https://github.com/your-profile/java-project",
  },
  {
    id: 2,
    title: "Python Project",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    language: "Python",
    image: "/src/assets/javaP.png",
    github: "https://github.com/your-profile/python-project",
  },
  {
    id: 3,
    title: "React Project",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    language: "React",
    image: "/src/assets/javaP.png",
    github: "https://github.com/your-profile/react-project",
  },
  {
    id: 4,
    title: "React Project",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    language: "React",
    image: "/src/assets/javaP.png",
    github: "https://github.com/your-profile/react-project",
  },
  // Add more dummy projects as needed
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
                <h2 className="text-[#ffffff] text-lg mb-2 pl-4">
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
            <p>{selectedProject.description}</p>
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
