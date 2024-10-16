import React from 'react';
import { data } from '../Data/mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import milvusvid from "../Data/milvus.mp4";

function Project() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const tagStackProject = ["Milvus", "ReactJS", "Tailwind", "Flask", "Python", "Mongo DB", "Docker", "ResNet model"];
  const colorStack = ["indigo", "purple", "pink"];
  let random;
  

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className='mx-20 ml-40 p-10'>
      <h1 className="text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-xl mb-20">My project</h1>
     
      <div className="flex md:flex-row align-middle justify-center items-center">
        {/* Partie vidéo */}
        <div className="w-full md:w-2/3 lg:w-3/5">
          <video
            className="w-full"
            src={milvusvid}
            controls
          />
        </div>

        {/* Partie description */}
        <div className="w-full md:w-1/3 lg:w-2/5 p-5 md:p-10 bg-white bg-opacity-20 ml-10 rounded-md">
          <p className='text-center text-white text-sm'>
            In a world where travel and exploration are becoming increasingly important, innovation plays a crucial role in enhancing the traveler's experience. 
            One of the most exciting advances in this field is the use of artificial intelligence to facilitate the search for places, attractions and experiences.
            Smartour is an application that revolutionizes travel exploration using AI with the Milvus database.
          </p>
             
          <div className='flex flex-wrap justify-center mt-2'>
            {
              tagStackProject.map((stack, idx) => (
                random = Math.floor(Math.random() * 3),
                <span key={idx} class={`bg-${colorStack[random]}-400 bg-opacity-40 text-stone-700 font-bold text-xs me-2 my-1 px-2.5 py-0.5 rounded border border-slate-400`}>{stack}</span>
                // <span key={idx} class={`bg-pink-100 bg-opacity-40 text-pink-800 text-xs font-medium me-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-pink-400`}>{stack}</span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;