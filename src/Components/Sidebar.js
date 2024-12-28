import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
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
            className="sm:hidden p-2 bg-gray-800 text-white fixed top-2 left-2 z-50 rounded-md"
            onClick={toggleSidebar}
        >
            {isOpen ? 'Close' : 'Menu'}
        </button>

        <div className={`h-full w-20 bg-white bg-opacity-20 text-white flex flex-col justify-between items-center
        py-4 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:static sm:w-20`}>

            {/* Top Button */}
            <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center
            hover:bg-blue-600 transition">
                <span className="text-white text-lg">T</span>
            </button>

            {/* Centered Buttons */}
            <div className="flex flex-col gap-4">
                <Link to='/'>
                   <button
                        href="#"
                        className="w-12 h-12 p-2 flex items-center justify-center shadow-lg focus:text-slate-200 text-blue_picton transition-colors duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-blue_picton dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-blue_picton dark:focus:bg-sky-600 focus:ring-sky-500"
                        >
                        <span class="sr-only">Biography</span>
                        <svg
                            class="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path stroke-width="2" fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </Link>
                <Link to='/Work'>
                   <button
                        href="#"
                        className="w-12 h-12 p-2 flex items-center justify-center shadow-lg focus:text-slate-200 text-blue_picton transition-colors duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-blue_picton dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-blue_picton dark:focus:bg-sky-600 focus:ring-sky-500"
                        >
                        <span class="sr-only">Work</span>
                        <svg
                            class="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path fill-rule="evenodd" stroke-width="1.5" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                            <path stroke-width="1.5" d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                        </svg>
                    </button>
                </Link>
                <Link to='/Education'>
                   <button
                        href="#"
                        className="w-12 h-12 p-2 flex items-center justify-center shadow-lg focus:text-slate-200 text-blue_picton transition-colors duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-blue_picton dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-blue_picton dark:focus:bg-sky-600 focus:ring-sky-500"
                        >
                        <span class="sr-only">Education</span>
                        <svg
                            class="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-width="1.5" d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                            <path stroke-width="1.5" d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                            <path stroke-width="1.5" d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                        </svg>
                    </button>
                </Link>
                <Link to='/Project'>
                   <button
                        href="#"
                        className="w-12 h-12 p-2 flex items-center justify-center shadow-lg focus:text-slate-200 text-blue_picton transition-colors duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-blue_picton dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-blue_picton dark:focus:bg-sky-600 focus:ring-sky-500"
                        >
                        <span class="sr-only">Project</span>   
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                    </button>
                </Link>
                <Link to='/Skill'>
                   <button
                        href="#"
                        className="w-12 h-12 p-2 flex items-center justify-center shadow-lg focus:text-slate-200 text-blue_picton transition-colors duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-blue_picton dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-blue_picton dark:focus:bg-sky-600 focus:ring-sky-500"
                        >
                        <span class="sr-only">Skills</span>
                        <svg
                            class="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            stroke-width="1.5"
                            d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                            <path stroke-width="1.5" fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd" />                  
                        </svg>
                    </button>
                </Link>
                <Link to='/Certification'>
                   <button
                        href="#"
                        className="w-12 h-12 p-2 flex items-center justify-center shadow-lg focus:text-slate-200 text-blue_picton transition-colors duration-200 rounded-full bg-indigo-50 hover:text-slate-200 hover:bg-blue_picton dark:hover:text-light dark:hover:bg-sky-600 dark:bg-dark focus:outline-none focus:bg-blue_picton dark:focus:bg-sky-600 focus:ring-sky-500"
                        >
                        <span class="sr-only">Certification</span>
                     <svg
                         class="w-7 h-7"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                     >
                         <path stroke-width="1.2" d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
                     </svg>
                    </button>
                </Link>
            </div>

            {/* Bottom Button */}
            <button className="w-12 h-12 bg-gradient-to-r bg-blue_picton opacity-90 shadow-lg rounded-full flex items-center
            justify-center hover:bg-purple-600 transition">
            
                <span className="text-white text-lg">B</span>
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