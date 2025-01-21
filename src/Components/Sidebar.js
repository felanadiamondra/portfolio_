import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { MdContacts, MdHomeRepairService, MdSchool,
        MdIntegrationInstructions, MdLightbulb,
        MdLibraryBooks, MdDownload, MdMenuOpen, MdClose, MdEngineering } from "react-icons/md";
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
                        {/* <svg
                            class="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path fill-rule="evenodd" stroke-width="1.5" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                            <path stroke-width="1.5" d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                        </svg> */}
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
                        <MdLightbulb className="w-7 h-7"/>
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
            <button className="w-12 h-12 bg-gradient-to-r bg-blue_picton opacity-90 shadow-lg rounded-full flex items-center
            justify-center hover:bg-purple-600 ">
            
                <MdDownload className="w-6 h-6 text-slate-300"/>
            </button>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenue sur mon portfolio</h1>
                  <p className="text-lg text-gray-600 mb-6">
                    Téléchargez mon CV en cliquant sur le bouton ci-dessous :
                  </p>
                  <a
                    href="/QUESTIONS.pdf"
                    download="CV_Felana_Randriamadison.pdf"
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                  >
                    Télécharger mon CV
                  </a>
                </div>  
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
