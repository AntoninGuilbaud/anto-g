import React from 'react'
import { AnimatedTestimonialsDemo } from './ui/CardSport'

const Sport = () => {
    return (
        <div className="py-20" id="recent-projects">
            <h1 className="heading text-center text-3xl md:text-4xl font-bold text-gray-800 dark:text-white px-4">
                Le
                <span className="text-blue-300"> sport</span>, une véritable passion
            </h1>
            <div>
                <AnimatedTestimonialsDemo />
            </div>
        </div>
    )
}

export default Sport
