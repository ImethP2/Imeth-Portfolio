import Project from "/src/assets/me.svg";
import HandShake from "/src/assets/HandShake.svg";
import Call from "/src/assets/call.png";
import Gmail from "/src/assets/gmail2.png";

function Contact() {
  return (
    <div className="relative w-screen pt-15 md:min-w-[945px] flex flex-col items-center text-white pt-[3%]">
      {/* Row 1: Heading */}
      <div className="w-full flex flex-col items-start px-8 md:px-16 pt-8 md:pt-16">
        <h1 className="text-3xl font-roboto font-regular">Contact</h1>
        <div className="w-[50%] h-px bg-white mt-2"></div>
      </div>
      {/* Row 2: Description and Project.png */}
      <div className="w-full flex flex-col md:flex-row justify-between px-8 md:px-16 ">
        <div className="w-full md:w-[100%] flex justify-left item-left ">
          <div className="w-[7%] mt-20">
            <img className="object-cover " src={Project} alt="Project" />
          </div>
          <h1 className="text-[400%] font-bold w-[80%] ml-20 mt-[6%]">
            Let’s Work Together !
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center px-8 md:px-16 mt-20">
        <img className="object-cover w-[30%]" src={HandShake} alt="Handshake" />
      </div>
      <div className="w-full flex justify-center mt-20 space-x-20">
        <button className="flex items-center border border-white py-2 px-4 rounded-md text-white text-xl font-light">
          <img src={Call} alt="Call" className="w-5 h-5 mr-2" />
          (123) 456-7890
        </button>
        <button className="flex items-center border border-white py-4 px-6 rounded-md text-white text-xl font-light ">
          <img src={Gmail} alt="Email" className="w-5 h-5 mr-2" />
          example@example.com
        </button>
      </div>
    </div>
  );
}

export default Contact;
