import React from 'react'
import LaptopOppa from '../../assets/laptopOppa.svg'
import Discord from '../../assets/icons/discord.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import Facebook from '../../assets/icons/facebook.svg'
// TODO: make all component min width 320px
export default function () {
    return (
        <div className='md:flex md:flex-row-reverse  lg:h-[90vh] px-2 py-2 sm:px-10 sm:py-5 max-w-screen-2xl mx-auto min-w-[320px] max-h-[800px] min-h-[400px]'>
            <div className='flex justify-center md:w-1/2 '>
                <img src={LaptopOppa} alt="Oppa with laptop" className='h-[100%]' />
            </div>
            <div className='flex flex-col items-start px-4 my-8 md:m-0 md:w-1/2 lg:justify-end md:justify-center md:gap-6'>
                <p className='text-display-medium leading-display-medium tracking-display-medium lg:text-display md:leading-display md:tracking-display'>Hello I'm <span className='font-extrabold'>Lord Neo Barnachea.</span></p>
                <p className='font-extrabold text-display-medium lg:text-display leading-display tracking-display'> Fullstack <span className='text-outline'>Developer</span></p>
                <p className='text-paragraph-2 leading-paragraph-2 tracking-paragraph-2 lg:text-paragraph-1 lg:leading-paragraph-1 lg:tracking-paragraph-1'>
                    A computer science graduate who loves building web applications.
                    In the language of code, every line tells a story. As a web developer, I'm here to craft narratives that not only function seamlessly but resonate with purpose. Take a look at my work and skills, and let's talk about turning your ideas into reality.
                </p>
                <div>
                    <ul className='flex gap-5'>
                        <li className='cursor-pointer'>
                            <a href="https://www.linkedin.com/in/lord-neo-barnachea/" target='_'>
                                <img src={Linkedin} alt="linkedin" />
                            </a>
                        </li>
                        <li className='cursor-pointer'> <img src={Discord} alt="discord" /> </li>
                        <li className='cursor-pointer'>
                            <a href="https://www.facebook.com/lordneo.barnachea.27/" target='_'>
                                <img src={Facebook} alt="facebook" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
