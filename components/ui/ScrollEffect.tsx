"use client";
import React from "react";
import { ContainerScroll } from "./Container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            La puissance de ma<br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Vision Artistique
                            </span>
                        </h1>
                    </>
                }
            >
                <iframe className="rounded-2xl" src="https://open.spotify.com/embed/playlist/6iSxYOcwWjO0MAhZl3eJSS?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </ContainerScroll>
        </div>
    );
}
