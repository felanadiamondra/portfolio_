// const Education = () =>{
//     const educData = [
//         {
//             universityName : "Master ~ ESTI / ESIEE IT Paris",
//             path : "MSI",
//             year : "2022 - 2024",
//             degree : "Master's Degree in MSI"
//         },
//         {
//             universityName : "Core teams ~ GDSC ESTI",
//             path : "Google Developer Students Club",
//             year : "2022 - 2023",
//             degree : "https://gdsc.community.dev/esti "
//         },
//         {
//             universityName : "Licence - ESTI",
//             path : "IDEV",
//             year : "2019 - 2022",
//             degree : "Bachelor's Degree in Integration and Development"
//         } 
//     ]
//     return(
//     <div className="mx-20 ml-40 p-10">
//         <h1 className="text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-xl mb-20">My education timeline and training :)</h1>

//         <div className="grid grid-cols-2 gap-4">
//             <div className="animate__animated animate__fadeIn">
//                 <div className="w-10/12 relative">
//                 <div className="border-l-2">
//                     {
//                         educData.map((educ, idx) => (
                            
//                             idx % 2 !== 0 ? (
//                                 <div className="bg-gradient-to-r from-g_rose to-g_purple transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
//                                 <div className="w-5 h-5 bg-g_rose absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
        
//                                 <div className="w-10 h-1 bg-gradient-to-r from-g_rose to-g_purple absolute -left-10 z-0"></div>
        
//                                 <div className="flex-auto">
//                                     <h1 className="">{educ.universityName}</h1>
//                                     <h1 className="">{educ.year}</h1>
//                                     <h3>{educ.path}</h3>
//                                 </div>
                                
//                                 </div>
//                             ) : (
//                             <div className="bg-white bg-opacity-20 transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
//                             <div className="w-5 h-5 bg-g_rose absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
    
//                             <div className="w-10 h-1 bg-gradient-to-r from-g_rose to-g_purple absolute -left-10 z-0"></div>
    
//                             <div className="flex-auto">
//                                 <h1 className="">{educ.universityName}</h1>
//                                 <h1 className="">{educ.year}</h1>
//                                 <h3>{educ.path}</h3>
//                             </div>
//                             </div>)
                
                     
//                         ))
//                     }

//                     {/* <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
//                     <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

//                     <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

//                     <div className="flex-auto">
//                         <h1 className="">Day 1</h1>
//                         <h1 className="">Orientation and Briefing on Uniliver basics</h1>
//                         <h3>Classroom</h3>
//                     </div>
//                     <a>Download materials</a>
//                     </div>

//                     <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
//                     <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

//                     <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

//                     <div className="flex-auto">
//                         <h1 className="">Day 1</h1>
//                         <h1 className="">Orientation and Briefing on Uniliver basics</h1>
//                         <h3>Classroom</h3>
//                     </div>
//                     <a>Download materials</a>
//                     </div> */}
//                 </div>
//                 {/* <section className="mt-4 text-center">Build with ❤️ by <a href="https://github.com/saadh393" target="_blank">Saad Hasan </a></section> */}
//                 </div>
//             </div>
//             <div>
//                 <div className="mx-10">
//                     <div className="grid py-32 grid-flow-col grid-rows-2 grid-cols-3 animate__animated animate__fadeIn">
//                         <div className="transform scale-110 -rotate-6">
//                             <img src={require("../images/image.jpg")} alt="" loading="lazy"/>
//                         </div>
//                         <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
//                             <img src={require("../images/image.jpg")} alt="" loading="lazy"/>
//                         </div>
//                         {/* <div className="transform scale-150 translate-y-11">
//                             <img src={require("../images/image.jpg")} alt="" loading="lazy"/>
//                         </div> */}
//                         {/* <div className="transform translate-y-24">
//                             <img src={require("../images/image.jpg")} alt="" loading="lazy"/>
//                         </div> */}
//                         {/* <div className="row-start-1 col-start-2 col-span-2 transform-x-20 translate-y-4">
//                             <img src={require("../images/image.jpg")} alt="" loading="lazy"/>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }

// export default Education;

const Education = () => {
    const educData = [
    {
        universityName: "Master ~ ESTI / ESIEE IT Paris",
        path: "MSI",
        year: "2022 - 2024",
        degree: "Master's Degree in MSI"
    },
    {
        universityName: "Core teams ~ GDSC ESTI",
        path: "Google Developer Students Club",
        year: "2022 - 2023",
        degree: "https://gdsc.community.dev/esti"
    },
    {
        universityName: "Licence - ESTI",
        path: "IDEV",
        year: "2019 - 2022",
        degree: "Bachelor's Degree in Integration and Development"
    }
    ];
    return (
        <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 p-4 sm:p-6 md:p-10">
            <h1 className="text-center mt-6 sm:mt-8 md:mt-10 text-transparent bg-clip-text
            bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-lg sm:text-xl md:text-2xl mb-10
            sm:mb-16 md:mb-20">
            My education timeline and training :)
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="animate__animated animate__fadeIn">
                    <div className="w-full md:w-10/12 mx-auto">
                        <div className="border-l-2">
                            {educData.map((educ, idx) => (
                                <div
                                    key={idx}
                                    className={`transform transition cursor-pointer hover:-translate-y-2
                                    relative flex items-center px-6 py-4 rounded mb-10 flex-col md:flex-row space-y-4
                                    md:space-y-0 ${
                                    idx % 2 !== 0
                                    ? "bg-gradient-to-r from-g_rose to-g_purple text-white"
                                    : "bg-white bg-opacity-20 text-white"
                                    }`}
                                >
                                    <div className="w-5 h-5 bg-g_rose absolute -left-10 transform-translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                                    <div className="w-10 h-1 bg-gradient-to-r from-g_rose to-g_purple
                                    absolute -left-10 z-0"></div>
                                    <div className="flex-auto">
                                        <h1>{educ.universityName}</h1>
                                        <h1>{educ.year}</h1>
                                        <h3>{educ.path}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-auto w-full lg:w-3/4">
                        <div className="grid py-16 sm:py-24 lg:py-32 grid-cols-2 gap-4
                        animate__animated animate__fadeIn">
                            <div className="transform scale-110 -rotate-6">
                                <img src={require("../images/image.jpg")} alt="" loading="lazy"
                            className="w-full h-full object-cover rounded-lg" />
                            </div>
                                <div className="col-start-2 transform scale-75 rotate-6 translate-x-2 translate-y-4">
                                <img src={require("../images/image.jpg")} alt="" loading="lazy"
                                className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    };
    export default Education