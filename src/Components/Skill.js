import React, { useState, useEffect } from "react";
import dataskill from "../Data/skill.json";
import coding from '../images/fcode.png';
import lcoding from '../images/code.png';
import mobile from '../images/mobile.png';
import database from '../images/database.png';
import tool from '../images/tool.png';


const Skill = () => {
 
    return(
        <div className="mx-20 ml-40 p-10">
            <h1 className="text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-xl mb-20">My skills</h1>
            <div class="grid grid-cols-4 mt-10 gap-4">
                <div class="h-96 bg-white bg-opacity-10 rounded-xl">
                    <div className="h-14 p-5 text-center flex items-center justify-center bg-purple-200 bg-opacity-40 rounded-t-xl">
                        <h4 className="bg-gradient-to-r from-gd_rose to-gd_purple text-transparent bg-clip-text font-bold">Framework and library</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center h-72">
                        <img className="w-14 h-14 mb-5" src={coding} alt="Coding"/>
                
                        <div className="text-slate-300">
                            {
                            dataskill.framework.map((data, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                    <svg 
                                            className="w-5 h-5" 
                                            data-slot="icon" 
                                            fill="none" 
                                            stroke-width="1.5" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            aria-hidden="true">
                                            <path 
                                                stroke-linecap="round" 
                                                stroke-linejoin="round" 
                                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z">
                                            </path>
                                        </svg>
                                        <p className="self-start italic">
                                            {data}
                                        </p>
                                </div>
                               
                            ))
                            }
                        </div>
                    </div>
                </div>
                <div class="h-96 bg-white bg-opacity-10 rounded-xl">
                    <div className="h-14 p-5 text-center flex items-center justify-center bg-purple-200 bg-opacity-40 rounded-t-xl">
                        <h3 className="bg-gradient-to-r from-gd_rose to-gd_purple text-transparent bg-clip-text font-bold">
                            Programming language 
                        </h3>
                    </div>
                    <div className="flex flex-col justify-center items-center h-72">
                        <img className="w-14 h-14 mb-5 items-center" src={lcoding} alt="Coding"/>
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-slate-300">                                
                                {
                                    dataskill.languages.map((data, idx) => (
                                        <div className="flex items-center space-x-2" key={idx}>
                                            <svg className="w-5 h-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path>
                                            </svg>
                                            <p className="self-start italic">{data}</p>
                                        </div>
                                    ))
                                    }
                            </div>
                            <div className="text-slate-300">
                                {
                                dataskill.mobile.map((data, idx) => (
                                    <div className="flex items-center space-x-2" key={idx}>
                                        <svg className="w-5 h-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path>
                                        </svg>
                                        <p className="self-start">{data}</p>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-96 bg-white bg-opacity-10 rounded-xl">
                    <div className="h-14 p-5 text-center flex items-center justify-center bg-purple-200 bg-opacity-40 rounded-t-xl">
                        <h3 className="bg-gradient-to-r from-gd_rose to-gd_purple text-transparent bg-clip-text font-bold">
                            Databases
                        </h3>
                    </div>
                    <div className="flex flex-col justify-center items-center h-72">
                        <img className="w-14 h-14 mb-5 items-center" src={database} alt="Coding"/>
                        <div className="text-slate-300 items-center">
                            {
                            dataskill.databases.map((data, idx) => (
                                <div className="flex items-center space-x-2" key={idx}>
                                    <svg className="w-5 h-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                    </svg>
                                    <p className="self-start italic">{data}</p>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <div class="h-96 bg-white bg-opacity-10 rounded-xl">
                    <div className="h-14 p-5 text-center flex items-center justify-center bg-purple-200 bg-opacity-40 rounded-t-xl">
                        <h3 className="bg-gradient-to-r from-gd_rose to-gd_purple text-transparent bg-clip-text font-bold"> 
                            Tools
                        </h3>
                    </div>
                    <div className="flex flex-col justify-center items-center h-72">
                        <img className="w-14 h-14 mb-5" src={tool} alt="Coding"/>

                        <div className="text-slate-300">
                            {
                            dataskill.tools.map((data, idx) => (
                                <div className="flex items-center space-x-2" key={idx}>
                                    <svg className="w-5 h-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                                    </svg>
                                    <p className="self-start italic">{data}</p>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
             </div>
        </div>
)
}

export default Skill;