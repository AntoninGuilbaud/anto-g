import React from 'react'
import { TimelineDemo } from './ui/TimelineWork'

const Work = () => {
    return (
        <div className='py-24'>
            <h1 className="heading text-center text-3xl md:text-4xl font-bold text-gray-800 dark:text-white px-4">
                Mes expériences
                <span className="text-blue-300"> professionnelles</span>
            </h1>
            <TimelineDemo />
        </div>
    )
}

export default Work
