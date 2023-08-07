import React from 'react'

const About = () => {
    return (
        <div className="max-w-4xl mx-auto antialiased lg:mt-0 py-8 lg:py-18">
            <h2 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-left">About Me</h2>
            <div className="container px-4 mx-auto flex">
                <div className="mt-6 text-gray-800 dark:text-white text-center w-1/2">
                    <h3 className='text-2xl font-bold text-gray-900 lg:text-xl dark:text-white text-left'>Experience</h3>
                    <div className='experience-container ml-5 mt-5 flex items-center justify-center'>
                        <span className='mx-1'>●</span>
                        <div className='experience-item w-9/12 flex flex-col flex-start'>
                            <div className='experience-item-company'>Jotform</div>
                            <div className='experience-item-date'>2021 - Present</div>
                            <div className='experience-item-title'>Frontend Developer</div>
                        </div>
                    </div>
                </div>
                <div className='mt-6 text-gray-800 dark:text-white text-center w-1/2'>
                    <h3 className='text-2xl font-bold text-gray-900 lg:text-xl dark:text-white text-right'>Education</h3>
                </div>
            </div>
        </div>
    )
}

export default About