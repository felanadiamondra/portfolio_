// const Certification = () => {
//     const cert_name = [
//         'kaggle',
//         'orange',
//         'gdsc',
//         'osc',
//         'mooc'
//     ];
//     return (
//     <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 p-4 sm:p-6 md:p-10 overflow-auto">
//         <h1 className="text-center mt-6 sm:mt-8 md:mt-10 text-transparent bg-clip-text
//         bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-lg sm:text-xl md:text-2xl mb-10 sm:mb-16
//         md:mb-20">
//         My certificate
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
//             {cert_name.map((cert, index) => {
//             return (
//             <div key={index} className="h-40 sm:h-40 md:h-44 bg-slate-400
//             transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-md
//             rounded-md overflow-hidden">
//             <img className="w-full h-full object-cover" alt={cert}
//             src={require(`../images/${cert}.png`)} />
//             </div>
//             );
//             })}
//         </div>
//     </div>
//     );
//     }
//     export default Certification;


import React, { useState } from "react";

export default function Certificates() {
    const cert_name = [
        'kaggle',
        'orange',
        'gdsc',
        'osc',
        'mooc'
    ];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (cert) => {
    setSelectedImage(cert); // Définit l'image sélectionnée
  };

  const closeZoom = () => {
    setSelectedImage(null); // Réinitialise l'image sélectionnée
  };

  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 p-4 sm:p-6 md:p-10 overflow-auto">
      <h1
        className="text-center mt-6 sm:mt-8 md:mt-10 text-transparent bg-clip-text
        bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-lg sm:text-xl md:text-2xl mb-10 sm:mb-16
        md:mb-20"
      >
        My certificate
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
        {cert_name.map((cert, index) => (
          <div
            key={index}
            className="h-40 sm:h-40 md:h-44 bg-slate-400
            transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-md
            rounded-md overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(cert)}
          >
            <img
              className="w-full h-full object-cover"
              alt={cert}
              src={require(`../images/${cert}.png`)}
            />
          </div>
        ))}
      </div>

      {/* Overlay pour l'image zoomée */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeZoom}
        >
          <img
            className="max-w-full max-h-full object-contain rounded-md"
            alt={selectedImage}
            src={require(`../images/${selectedImage}.png`)}
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold bg-gray-800 rounded-full p-2"
            onClick={closeZoom}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
