"use client"
import ShimmerButton from './ui/ShimmerButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { GoProjectSymlink } from "react-icons/go";
import { useEffect, useState } from 'react'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Déclenche le changement d'état après 3 secondes
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer); // Nettoie le timer si le composant est démonté
    }, []);

    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="blue"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
                <Spotlight
                    className="right-10 top-10 h-[80vh] w-[50vw]"
                    fill="purple"
                />
                <Spotlight
                    className="right-80 top-28 h-[80vh] w-[50vw]"
                    fill="purple"
                />

            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <TextGenerateEffect words='Associer vision artistique et informatique pour un résultat harmonieux.' className='text-center text-[40px] md:text-5xl lg:text-6xl' />

                    <p
                        className={`text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        Je m&apos;appelle Antonin. Je suis étudiant en Informatique à Grenoble.
                    </p>
                    <a onClick={scrollToProjects} className='flex items-center justify-center'>
                        <ShimmerButton
                            title="Découvrir mes projets"
                            icon={<GoProjectSymlink />}
                            position="right"
                            handleClick={scrollToProjects}
                        />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Hero