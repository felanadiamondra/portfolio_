// const Certification = () =>{

//     const cert_name = [
//         'kaggle',
//         'orange',
//         'gdsc',
//         'osc',
//         'mooc'
//     ]

//     return(
//         <div class="mx-20 ml-40 p-10">
//             <h1 className="text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-xl mb-20">My certificate</h1>

//             <div class="grid grid-cols-4 gap-4">
//                 { cert_name.map((cert, index) => {
//                     return(
//                         <div key={index} class="h-44 bg-slate-400 transition delay-75 duration-300 ease-in-out hover:scale-125 hover:shadow-md">
//                             <img class="w-full h-full" alt="" src={require(`../images/${cert}.png`)}/>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Certification;

const Certification = () => {
    const cert_name = [
        'kaggle',
        'orange',
        'gdsc',
        'osc',
        'mooc'
    ];
    return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 p-4 sm:p-6 md:p-10">
        <h1 className="text-center mt-6 sm:mt-8 md:mt-10 text-transparent bg-clip-text
        bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-lg sm:text-xl mb-10 sm:mb-16
        md:mb-20">
        My certificate
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cert_name.map((cert, index) => {
            return (
            <div key={index} className="h-32 sm:h-40 md:h-44 bg-slate-400
            transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-md
            rounded-md overflow-hidden">
            <img className="w-full h-full object-cover" alt={cert}
            src={require(`../images/${cert}.png`)} />
            </div>
            );
            })}
        </div>
    </div>
    );
    }
    export default Certification;