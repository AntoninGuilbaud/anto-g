"use client";

import React from "react";
import Link from "next/link";
import { GoProjectSymlink } from "react-icons/go";
import ShimmerButton from "./ui/ShimmerButton";

const Underconstruction = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
            <h1 className="text-4xl font-bold mb-4">Projet en cours... 🚧</h1>
            <p className="text-lg mb-8 text-center">
                Ce projet est encore en cours de développement. Revenez bientôt pour en savoir plus !
            </p>

            <Link href="/" passHref>
                <ShimmerButton
                    title="Revenir à l'accueil"
                    icon={<GoProjectSymlink />}
                    position="right"
                />
            </Link>
        </div>
    );
};

export default Underconstruction;
