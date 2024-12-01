import React from "react";
import { recentprojects } from "@/data";
import { ThreeDCardDemo } from "./ui/Carddd";

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading text-center text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 px-4">
                Retrouver l&apos;ensemble de mes
                <span className="text-blue-300"> projets</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4 md:px-8">
                {recentprojects.map(({ id, title, des, img, link, icons, gp }) => (
                    <div key={id} className="flex items-center justify-center">
                        <ThreeDCardDemo
                            title={title}
                            description={des}
                            img={img}
                            link={link}
                            icons={icons}
                            groupSize={gp}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
