const Work = () => {

    const dataWork = [
      {
        companyName : "Futurmap DATA",
        year : "October 2022 - February 2024",
        jobTitle : "Python developer",
        description :[
          'Development of plugins for 3D Revit software'
        ]
      },
      {
        companyName : "JIRAMA",
        year : "August 2020 - September 2022",
        jobTitle : "Developer",
        description : [
          "Designing and building a webiste using Symfony and Oracle database",
          "Implementing a biometric system based on a fingerprints with Java and Mysql"
        ]
      }
    ]
    return (
       
      <div className="mx-20 ml-40 p-10 overflow-hidden text-slate-100">
        <h1 className="text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-xl mb-20">My work experiences</h1>

        <div className="animate__animated animate__fadeInUp">

          <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
            <div class="relative antialiased text-sm font-semibold">

              <div class="hidden sm:block w-1 bg-white bg-opacity-30 absolute h-full left-1/2 transform -translate-x-1/2"></div>

              { dataWork && dataWork.map((data, idx) =>(
                
                <div class="mt-6 sm:mt-0 sm:mb-12">
                  <div class="flex flex-col sm:flex-row items-center">
                    {
                      idx % 2 === 0 ? (

                      <div class="flex justify-start w-full mx-auto items-center">
                        
                        <div class="w-full sm:w-1/2 sm:pr-8">
                          <div class="p-4 animate__animated animate__backInLeft bg-gradient-to-r from-g_rose to-g_purple rounded shadow-wsh">
                          <h3>
                              {data.companyName}
                            </h3>
                            <p className="italic text-slate-300 mb-5">
                              {data.jobTitle}
                            </p>
                            { data.description.map((dt, idx) => (
                              <p>
                                {dt}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                      ) : (
                        <div class="flex justify-end w-full mx-auto items-center">
                        
                        <div class="w-full sm:w-1/2 sm:pl-8">
                          <div class="p-4 animate__animated animate__backInRight bg-gradient-to-r from-g_rose to-g_purple rounded shadow-wsh">
                            <h3>
                              {data.companyName}
                            </h3>
                            <p className="italic text-slate-300 mb-5">
                              {data.jobTitle}
                            </p>
                            { data.description.map((dt, idx) => (
                              <p>
                                {dt}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                      )
                    }
                    <div class="rounded-full bg-blue_picton border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Work;