import { MdGrade } from "react-icons/md";

const Education = () =>{
    const educData = [
        {
            universityName : "ESTI ~ ESIEE IT Paris",
            path : "Master's in Management of Information Systems",
            year : "2022 - 2024",
            desc : "Focused on strategic IT management",
            link : 0
        },
        {
            universityName : "GDSC ESTI (Google Developer Student Clubs)",
            path : "Core Team Member",
            year : "2022 - 2023",
            desc : "https://gdsc.community.dev/esti",
            link : 1
        },
        {
            universityName : "ESTI",
            path : "Bachelor's in Integration and Development",
            year : "2018 - 2022",
            desc : "Focused on software development and practical programming skills for real-world applications.",
            link : 0
        } 
    ]
    return(
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 p-4 sm:p-6 md:p-10 overflow-auto">
        <h1 className="text-center mt-6 sm:mt-8 md:mt-10 text-transparent bg-clip-text
        bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-lg sm:text-xl md:text-2xl mb-10 sm:mb-16
        md:mb-20">My education timeline and training :)</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
            <div className="animate__animated animate__fadeIn">
                <div className="w-full mx-auto">
                <div className="border-l-2">
                    {
                        educData.map((educ, idx) => (
                            
                            idx % 2 !== 0 ? (
                                <div className="w-96 bg-gradient-to-r from-g_rose to-g_purple transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                <div className="w-5 h-5 bg-g_rose absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
        
                                <div className="w-10 h-1 bg-gradient-to-r from-g_rose to-g_purple absolute -left-10 z-0"></div>
        
                                <div className="flex-auto">
                                    <h1 className="md:text-base sm:text-sm">{educ.universityName}</h1>
                                    <h1 className="text-sm italic font-semibold">{educ.year}</h1>
                                    <h3 className="text-sm font-semibold">{educ.path}</h3>
                                    <p className="text-sm italic text-slate-200 flex items-start">
                                        <MdGrade className="w-4 h-4 flex-shrink-0 mt-0.5"/>
                                        {
                                         educ.link ? (
                                            <span className="ml-2 hover:underline"><a href={educ.desc}>{educ.desc}</a></span>
                                         ) : <span className="ml-2">{educ.desc}</span>
                                        }
                                        
                                    </p>
                                </div>
                                
                                </div>
                            ) : (
                            <div className="w-96 bg-white bg-opacity-20 transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                            <div className="w-5 h-5 bg-g_rose absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
    
                            <div className="w-10 h-1 bg-gradient-to-r from-g_rose to-g_purple absolute -left-10 z-0"></div>
    
                            <div className="flex-auto text-sm">
                                <h1 className="md:text-base sm:text-sm">{educ.universityName}</h1>
                                <h1 className="text-sm italic font-semibold">{educ.year}</h1>
                                <h3 className="text-sm font-semibold">{educ.path}</h3>
                                <p className="text-sm italic text-slate-200 flex items-start">
                                    <MdGrade className="w-4 h-4 flex-shrink-0 mt-0.5"/>
                                        {
                                         educ.link ? (
                                            <span className="ml-2 hover:underline"><a href={educ.desc}>{educ.desc}</a></span>
                                         ) : <span className="ml-2">{educ.desc}</span>
                                        }
                                </p>
                            </div>
                            </div>)
                
                     
                        ))
                    }

                    {/* <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                    <div className="flex-auto">
                        <h1 className="">Day 1</h1>
                        <h1 className="">Orientation and Briefing on Uniliver basics</h1>
                        <h3>Classroom</h3>
                    </div>
                    <a>Download materials</a>
                    </div>

                    <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                    <div className="flex-auto">
                        <h1 className="">Day 1</h1>
                        <h1 className="">Orientation and Briefing on Uniliver basics</h1>
                        <h3>Classroom</h3>
                    </div>
                    <a>Download materials</a>
                    </div> */}
                </div>
                {/* <section className="mt-4 text-center">Build with ❤️ by <a href="https://github.com/saadh393" target="_blank">Saad Hasan </a></section> */}
                </div>
            </div>
            <div>
                <div className="">
                    <div className="grid py-16 grid-flow-col grid-rows-2 animate__animated animate__fadeIn">
                        <div className="transform scale-125 -rotate-6">
                            <img src={require("../images/127_ESTI Misandratra.jpg")} alt="" loading="lazy"/>
                        </div>
                        <div className="col-start-3 transform scale-105 rotate-12 translate-x-2 translate-y-1">
                            <img src={require("../images/Pic4.jpg")} alt="" loading="lazy"/>
                        </div>
                        <div className="transform translate-y-24">
                            <img src={require("../images/WhatsApp Image 2024-09-30 à 10.46.36_43047089.jpg")} alt="" loading="lazy"/>
                        </div>
                        <div className="transform translate-y-20 scale-150 -rotate-12 translate-x-2">
                            <img src={require("../images/Pic3.jpg")} alt="" loading="lazy"/>
                        </div> 
                       
                        <div className="transform-x-20 translate-y-20 col-start-3 rotate-6">
                            <img src={require("../images/image.jpg")} alt="" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Education;
