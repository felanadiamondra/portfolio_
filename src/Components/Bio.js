import 'animate.css';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import profil from '../images/Diamondra.jpg';
const Bio = (props) => {
    const [textIndex, setTextIndex] = useState(0);
    const chaine = "Tailwind CSS is the only framework that I've seen scale on large teams.easy to customize, adapts to any design, and the build size is tiny.";
    const texts = chaine.split(" ");
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
        if (textIndex < texts.length - 1) {
        setTextIndex(textIndex + 1);
    }}, 100);

    return () => clearTimeout(timer);

    }, [textIndex, texts]);
    return (
    <div className='my-12 p-4 sm:my-8 sm:px-4 md:my-20 lg:my-28 sm:p-6 md:p-6 overflow-auto'>
        <p className='text-transparent bg-clip-text bg-gradient-to-r from-dark_blue
        to-blue_picton font-bold text-center text-lg sm:text-xl md:text-2xl mb-10'>
        1 percent better every day.
        </p> 
        <figure className="md:flex lg:flex h-auto items-center justify-center bg-slate-200 rounded-md mx-4
        sm:mx-10 md:mx-20 lg:mx-40 p-4 sm:p-6 md:p-10 shadow-xl backdrop-filter
        backdrop-blur-sm bg-opacity-10 border border-gray-100">
            <img className="w-36 h-36 sm:w-36 md:w-52 md:h-52 sm:h-36 rounded-full
            mx-auto md:mr-20 mb-4 md:mb-0" src={profil} alt="Felana Diamondra RANDRIAMADISON"
            />
            <div className='text-center md:text-left'>
                <blockquote>
                    <div className="text-slate-300">
                        <div className="flex flex-wrap justify-center md:justify-start">
                        {texts.map((text, index) => (
                            <p
                            key={index}
                            className={`text-lg sm:text-xl md:text-xl font-bold
                            transition-opacity duration-500 mr-1 ${
                            index <= textIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                            >                            {text}
                            </p>
                        ))}
                        </div>
                    </div>
                </blockquote>
                <hr className='w-1/2 sm:w-2/3 mt-4 md:mt-5 mx-auto md:mx-0
                animate__animated animate__fadeInUp'/>
                <figcaption className="text-slate-300 opacity-95 mt-4 md:mt-0">
                    <div className="animate__animated animate__fadeInUp italic">Diamondra
                    RANDRIAMADISON</div>
                    <div className="animate__animated animate__fadeInUp italic">Developer</div>
                </figcaption>
            </div>
        </figure>
    </div>
    );
}
export default Bio;