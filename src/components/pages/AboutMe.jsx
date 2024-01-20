import React from 'react'
import Oppa from '../../assets/oppa.svg'
import { Element } from 'react-scroll'
const AboutMe = () => {
    return (
        <Element name='aboutMe'>
            <div className='py-5 flex flex-col md:flex-row  max-w-screen-2xl mx-auto min-w-[320px] max-h-[800px] min-h-[400px]'>
                <div className='md:w-[40%] flex justify-start items-center px-11'>
                    <img src={Oppa} alt="Oppa" />
                </div>
                <div className='flex flex-col justify-start gap-3 px-4 md:w-1/2'>
                    <p className='py-4 text-display leading-display tracking-display'>About <span className='font-bold'>Me</span></p>
                    <p className='text-paragraph-2 leading-paragraph-1 tracking-paragraph-1 md:text-paragraph-1 text-zinc-500'>
                        I am a man of unwavering focus, sheer will, and unyielding commitment. Driven by a relentless determination to achieve my goals, I approach every endeavor with a tenacity that sets me apart. Known for my hardworking nature, I tackle challenges head-on, consistently pushing boundaries to exceed expectations. Whether in professional pursuits or personal endeavors, my commitment to excellence and the discipline to stay focused on the task at hand define my approach to life.</p>
                    <p className='text-paragraph-2 leading-paragraph-1 tracking-paragraph-1 md:text-paragraph-1 text-zinc-500'>
                        In the pursuit of success, I embrace challenges as opportunities for growth, embodying a resilient spirit that fuels my journey towards continuous self-improvement and accomplishment.
                    </p>
                </div>
            </div>
        </Element>
    )
}

export default AboutMe;