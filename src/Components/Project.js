import React from 'react';
import milvusvid from "../Data/milvus.mp4";

function Project() {

    const tagStackProject = ["Milvus", "ReactJS", "Tailwind", "Flask", "Python", "Mongo DB",
    "Docker", "ResNet model"];

    return (
    <div className='mx-4 sm:mx-10 md:mx-10 lg:mx-20 p-4 sm:p-6 md:p-10 overflow-auto'>
      <h1 className="text-center mt-6 sm:mt-8 md:mt-10 text-transparent bg-clip-text bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-lg sm:text-xl md:text-2xl mb-10 sm:mb-16 md:mb-20">
        My project
      </h1>
      <div className="flex flex-row sm:flex-col md:flex-row 
      space-y-6 md:space-y-0 md:space-x-10">
      {/* Partie vidéo */}
        <div className="w-full">
          <video
          className="w-full h-auto rounded-lg"
          src={milvusvid}
          controls
          />
        </div>
        {/* Partie description */}
        <div className="w-3/5 p-2 sm:p-6 md:p-8 lg:p-10 bg-white
        bg-opacity-20 rounded-md">
          <p className='text-center text-sm text-white sm:text-sm md:text-base'>
          In a world where travel and exploration are becoming increasingly important,
          innovation plays a crucial role in enhancing the traveler's experience.
          One of the most exciting advances in this field is the use of artificial intelligence to
          facilitate the search for places, attractions and experiences.
          Smartour is an application that revolutionizes travel exploration using AI with the
          Milvus database.
          </p>
          <div className="flex flex-wrap justify-center mt-4 gap-2">
            {tagStackProject.map((stack, idx) => (
              <span
                key={idx}
                className={`bg-blue-100 text-blue-800 text-sm italic font-medium px-3 py-1 rounded-full 
                border border-blue-300 shadow-sm hover:bg-blue-200 hover:shadow-md transition duration-200`}
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
}
export default Project;
