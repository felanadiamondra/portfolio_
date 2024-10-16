import 'animate.css';
import { useState, useEffect } from 'react';
import { useTranslation} from "react-i18next";
import profil from '../images/Diamondra.jpg';


const Bio = (props) => {
    const [textIndex, setTextIndex] = useState(0);
    // const [textIndex2, setTextIndex2] = useState(null);
    const chaine = "Tailwind CSS is the only framework that I've seen scale on large teams. easy to customize, adapts to any design, and the build size is tiny.";
    const texts = chaine.split(" ");
   
    const {t} = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
        if (textIndex < texts.length - 1) {
            setTextIndex(textIndex + 1);
        } 
        
        }, 100); // Déclenche l'animation toutes les 100 milliseconde

        return () => clearTimeout(timer);
    }, [textIndex, texts]);



    return(
        <div className='my-28 px-10'>  
            <p className='mx-24 my-16 text-transparent bg-clip-text bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-center text-2xl'>1 percent better every day.</p>
            <figure className="md:flex h-72 break-normal bg-slate-200 rounded-md mx-20 ml-40 p-10 rounde-xl justify-center shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <img className="z-50 w-50 h-50 rounded-full mr-20" src={profil} alt="Felana Diamondra RANDRIAMADISON"/>
                <div className=''>
                    <blockquote>
                        <div className="text-center mt-8 text-slate-300">
                            <div className="flex flex-wrap">
                                {texts.map((text, index) => (
                                <p
                                    key={index}
                                    className={`text-2xl font-bold transition-opacity duration-500 mr-1 ${
                                    index <= textIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    {text}
                                </p>
                                ))}
                            </div>
                        </div>
                    </blockquote>
                    <hr className='w-2/3 mt-5 animate__animated animate__fadeInUp'/>
                    <figcaption className="font-medium text-slate-300 opacity-95">
                        <div className="animate__animated animate__fadeInUp">Diamondra RANDRIAMADISON</div>
                        <div className="animate__animated animate__fadeInUp">{t("Developer")}</div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Bio;