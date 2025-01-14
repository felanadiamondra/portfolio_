import React from "react";
import { MdPersonPinCircle } from "react-icons/md";

const Work = () => {
  const dataWork = [
    {
    companyName: "NP Akadin Group",
    year: "June 2024 -  Now",
    jobTitle: "Software Engineer",
    description: [
    "Running group project"
    ]
    },
    {
    companyName: "Futurmap DATA",
    year: "October 2022 - May 2024",
    jobTitle: "Python developer",
    description: [
    "Development of plugins for 3D Revit software"
    ]
    },
    {
    companyName: "JIRAMA",
    year: "August 2020 - September 2022",
    jobTitle: "Developer",
    description: [
    "Designing and building a website using Symfony and Oracle database",
    "Implementing a biometric system based on fingerprints with Java and MySQL"
    ]
    }
  ];
  return (
    <div className="px-2 sm:px-10 md:px-10 lg:px-20 py-10 text-slate-100 overflow-y-hidden">
      <h1 className="text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r
        from-dark_blue to-blue_picton font-bold text-lg sm:text-xl md:text-2xl mb-10">My work experiences
        </h1>
      <div className="animate__animated animate__fadeInUp">
        <div className="w-full max-w-xl mx-auto px-2 sm:px-0">
          <div className="antialiased text-sm font-semibold">
            {/* Timeline line for large screens */}
              <div className="hidden sm:block w-1 bg-white bg-opacity-30 absolute h-full
              left-1/2 transform -translate-x-1/2"></div>
              {dataWork && dataWork.map((data, idx) => (
              <div className="mt-6 sm:mt-0 sm:mb-12" key={idx}>
                <div className="flex flex-col sm:flex-row items-center">
                  {idx % 2 === 0 ? (
                  <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="animate__animated animate__backInLeft p-4 bg-gradient-to-r from-g_rose to-g_purple
                  rounded shadow-md">
                  <h3>{data.companyName}</h3>
                  <p className="italic text-slate-300
                  mb-3">{data.jobTitle}</p>
                  {data.description.map((dt, idx) => (
                  <p key={idx} className="text-sm">{dt}</p>
                  ))}
                  </div>
                  </div>
                  </div>
                  ) : (
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="animate__animated animate__backInRight p-4 bg-gradient-to-r from-g_rose to-g_purple
                          rounded shadow-md">
                          <h3>{data.companyName}</h3>
                          <p className="italic text-slate-300
                            mb-3">{data.jobTitle}</p>
                            {data.description.map((dt, idx) => (
                          <p key={idx} className="text-sm">{dt}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                <div className="rounded-full bg-blue_picton border-white border-4
                  w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex
                  items-center justify-center">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5
                  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3
                  6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5
                  16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746
                  0-3.332.477-4.5 1.253" />
                </svg> */}
                <MdPersonPinCircle className="h-5 w-5"/>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;