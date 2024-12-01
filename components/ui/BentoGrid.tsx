import { cn } from "@/lib/utils";
import React from "react";
import { BackgroundGradientAnimation } from "./GradiantBg";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(

                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-end space-y-4",
                className
            )}
            style={{
                background: img
                    ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img}) center/cover no-repeat`
                    : 'rgb(2, 0, 36)',
                backgroundColor: 'linear-gradient(54deg, rgba(2, 0, 36, 1) 0%, rgba(0, 86, 255, 1) 55%, rgba(6, 54, 64, 1) 100%)',
            }}
        >
            {/* Gradient animation for id === 3 */}
            {id === 3 && (
                <div className="absolute inset-0 rounded-xl overflow-hidden flex items-center justify-center">
                    <BackgroundGradientAnimation />
                </div>
            )}

            {/* Content */}
            <div
                className={cn(
                    "relative z-10 group-hover/bento:translate-x-2 transition duration-200",
                    id === 3 ? "flex flex-col items-center justify-center h-full pb-4" : ""
                )}
            >
                <div
                    className={cn(
                        "font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200",
                        id !== 3 ? "mb-2 mt-2" : ""
                    )}
                >
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};
