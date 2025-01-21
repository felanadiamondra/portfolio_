import React from "react";
import dataskill from "../Data/skill.json";
import coding from '../images/fcode.png';
import lcoding from '../images/code.png';
import { MdFiberManualRecord, MdArrowForwardIos, MdLabelImportant, MdGrade } from "react-icons/md";
import database from '../images/database.png';
import tool from '../images/tool.png';
const Skill = () => {
    return (
    <div className="mx-4 sm:mx-10 md:mx-10 lg:mx-20 p-4 sm:p-6 md:p-10 overflow-auto">
        <h1 className="text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r
        from-dark_blue to-blue_picton font-bold text-lg sm:text-xl md:text-2xl mb-10">
             My skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
        {/* Framework and library */}
            <div className="h-96 bg-white bg-opacity-10 rounded-xl">
                <div className="h-14 p-5 text-center flex items-center justify-center
                    bg-purple-200 bg-opacity-40 rounded-t-xl">
                    <h4 className="bg-gradient-to-r from-gd_rose to-gd_purple text-transparent
                    bg-clip-text font-bold">
                    Framework and library
                    </h4>
                </div>
                <div className="flex flex-col mt-10 items-center h-72 sm:px-3">
                    <img className="w-14 h-14 mb-5" src={coding} alt="Coding" />
                    <div className="text-slate-300">
                        {dataskill.framework.map((data, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <MdArrowForwardIos/>
                                <p className="italic">{data}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Programming Language */}
            <div className="h-96 bg-white bg-opacity-10 rounded-xl">
            <div className="h-14 p-5 text-center flex items-center justify-center
                    bg-purple-200 bg-opacity-40 rounded-t-xl">
                    <h4 className="bg-gradient-to-r from-gd_rose to-gd_purple text-transparent
                    bg-clip-text font-bold">
                    Programming languages
                    </h4>
                </div>
                <div className="flex flex-col mt-10 items-center h-72 sm:px-3">
                    <img className="w-14 h-14 mb-5" src={lcoding} alt="Coding" />
                    <div className="text-slate-300">
                        {dataskill.languages.map((data, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                            <MdFiberManualRecord/>
                            <p className="italic">{data}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Databases */}
            <div className="h-96 bg-white bg-opacity-10 rounded-xl">
                <div className="h-14 p-5 text-center flex items-center justify-center
                    bg-purple-200 bg-opacity-40 rounded-t-xl">
                    <h3 className="bg-gradient-to-r from-gd_rose to-gd_purple text-transparent
                    bg-clip-text font-bold">
                        Databases
                    </h3>
                </div>
                <div className="flex flex-col mt-10 items-center h-72 sm:px-3">
                    <img className="w-14 h-14 mb-5" src={database} alt="Database" />
                    <div className="text-slate-300">
                        {dataskill.databases.map((data, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <MdLabelImportant/>
                                <p className="italic">{data}</p>
                            </div>
                        ))}
                    </div>
                    <p className="italic text-slate-300">(Milvus)</p>
                </div>
            </div>
            {/* Tools */}
            <div className="h-96 bg-white bg-opacity-10 rounded-xl">
                <div className="h-14 p-5 text-center flex items-center justify-center
                bg-purple-200 bg-opacity-40 rounded-t-xl">
                    <h3 className="bg-gradient-to-r from-gd_rose to-gd_purple text-transparent
                    bg-clip-text font-bold">
                    Tools
                    </h3>
                </div>
                <div className="flex flex-col mt-10 items-center h-72 sm:px-3">
                    <img className="w-14 h-14 mb-5" src={tool} alt="Tool" />
                    <div className="text-slate-300">
                        {dataskill.tools.map((data, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <MdGrade/>
                                <p className="italic">{data}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Skill