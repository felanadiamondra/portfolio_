import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { MdContacts, MdHomeRepairService, MdSchool,
        MdIntegrationInstructions, MdLightbulb,
        MdLibraryBooks, MdDownload, MdMenuOpen, MdClose, MdEmojiObjects } from "react-icons/md";
import Bio from "./Bio";
import Certification from "./Certification";
import Education from "./Education";
import Project from "./Project";
import Skill from "./Skill";
import Work from "./Work";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

   const toggleSidebar = () => {
     setIsOpen(!isOpen);
   };

   const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      // Réinitialiser l'animation après qu'elle soit terminée
      setTimeout(() => setAnimate(false), 1000); // La durée de l'animation est de 1 seconde
    }, 4000); // 10 secondes

    return () => clearInterval(interval);
  }, []);

    return (
    <div className="flex h-screen bg-gradient-to-r from-navy_blue to-dark_blue dark:border-indigo-800 dark:bg-darker focus:outline-none">
        <button
            className="sm:hidden p-2 bg-slate-300 text-blue_picton font-bold flex justify-center items-center fixed top-6 left-4 z-50 rounded-md"
            onClick={toggleSidebar}
        >
            {isOpen ? <MdClose className="w-5 h-5"/> : <MdMenuOpen className="w-5 h-5"/>}
        </button>

        <div className={`h-full w-20 bg-white bg-opacity-20 text-white flex flex-col justify-between items-center
        py-4 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:static sm:w-20`}>

            {/* Top Button */}
            <button className="w-12 h-12 bg-gradient-to-r bg-blue_picton opacity-90 shadow-lg rounded-full flex items-center
            justify-center hover:bg-purple-600">
                <span className="text-white text-lg font-bold">RD</span>
            </button>

            {/* Centered Buttons */}
            <div className="flex flex-col gap-4">
                <Link to='/'>
                   <button
                        href="#"
                        className="w-12 h-12 p-2 flex items-center justify-center shadow-lg focus:text-slate-200 text-blue_picton duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-blue_picton dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-blue_picton dark:focus:bg-sky-600 focus:ring-sky-500 transition hover:scale-110 ease-in-out"
                        >
                        <span class="sr-only">Biography</span>
                        {/* <svg
                            class="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path stroke-width="2" fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                        </svg> */}
                        <MdContacts className="w-6 h-6" />
                    </button>
                </Link>
                <Link to='/Work'>
                   <button
                        href="#"
                        className="w-12 h-12 p-2 flex items-center justify-center shadow-lg focus:text-slate-200 text-blue_picton duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-blue_picton dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-blue_picton dark:focus:bg-sky-600 focus:ring-sky-500 transition hover:scale-110 ease-in-out"
                        >
                        <span class="sr-only">Work</span>
                        <MdHomeRepairService className="w-7 h-7"/>
                    </button>
                </Link>
                <Link to='/Education'>
                   <button
                        href="#"
                        className="w-12 h-12 p-2 flex items-center justify-center shadow-lg focus:text-slate-200 text-blue_picton duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-blue_picton dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-blue_picton dark:focus:bg-sky-600 focus:ring-sky-500 hover:scale-110 transition ease-in-out"
                        >
                        <span class="sr-only">Education</span>
                        <MdSchool className="w-7 h-7"/>
                    </button>
                </Link>
                <Link to='/Project'>
                   <button
                        href="#"
                        className="w-12 h-12 p-2 flex items-center justify-center shadow-lg focus:text-slate-200 text-blue_picton duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-blue_picton dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-blue_picton dark:focus:bg-sky-600 focus:ring-sky-500 hover:scale-110 transition ease-in-out"
                        >
                        <span class="sr-only">Project</span>   
                        <MdIntegrationInstructions className="w-7 h-7"/>
                    </button>
                </Link>
                <Link to='/Skill'>
                   <button
                        href="#"
                        className="w-12 h-12 p-2 flex items-center justify-center shadow-lg focus:text-slate-200 text-blue_picton duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-blue_picton dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-blue_picton dark:focus:bg-sky-600 focus:ring-sky-500 hover:scale-110 transition ease-in-out"
                        >
                        <span class="sr-only">Skills</span>
                        <MdEmojiObjects className="w-8 h-8"/>
                    </button>
                </Link>
                <Link to='/Certification'>
                   <button
                        href="#"
                        className="w-12 h-12 p-2 flex items-center justify-center shadow-lg focus:text-slate-200 text-blue_picton duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-blue_picton dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-blue_picton dark:focus:bg-sky-600 focus:ring-sky-500 hover:scale-110 transition ease-in-out"
                        >
                        <span class="sr-only">Certification</span>
                     <MdLibraryBooks className="w-6 h-6"/>
                    </button>
                </Link>
            </div>

            {/* Bottom Button */}
            <button className="w-12 h-12 bg-gradient-to-r bg-blue_picton opacity-90 shadow-lg rounded-full flex overflow-hidden items-center
            justify-center hover:bg-purple-600 ">    
                <a
                href="/CV.pdf"
                download="CV_Felana_Randriamadison.pdf"
                className=" transition duration-300"
                >
                 <MdDownload className={`w-6 h-6 text-slate-300 ${
                  animate ? 'animate__animated animate__bounce' : ''
                }`}/>
                </a>
            </button>
        </div>
        <div class="w-full">
           <Routes>
               <Route path="/" element={<Bio />}/>
               <Route path="/Skill" element={<Skill />}/>
               <Route path="/Project" element={<Project />}/>
               <Route path="/Education" element={<Education />}/>
               <Route path="/Work" element={<Work />}/>
               <Route path="/Certification" element={<Certification />}/>
           </Routes>
         </div>
    </div>
    );
};
export default Sidebar
