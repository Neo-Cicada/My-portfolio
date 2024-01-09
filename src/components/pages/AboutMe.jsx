import React from 'react'
import Oppa from '../../assets/oppa.svg'
const AboutMe = () => {
    return (
        <div className='py-5 flex flex-col md:flex-row  max-w-screen-2xl mx-auto min-w-[320px] max-h-[800px] min-h-[400px]'>
            <div className='md:w-[40%] flex justify-start items-center px-11'>
                <img src={Oppa} alt="Oppa" />
            </div>
            <div className='md:w-1/2 flex flex-col justify-start px-4 gap-3'>
                <p className='text-display leading-display tracking-display py-4'>About <span className='font-bold'>Me</span></p>
                <p className='text-paragraph-2 leading-paragraph-1 tracking-paragraph-1 md:text-paragraph-1 text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis molestiae id repellendus? Asperiores quis delectus totam voluptatem cumque dicta, eligendi consequuntur reiciendis omnis doloribus recusandae perferendis debitis quaerat adipisci!</p>
                <p className='text-paragraph-2 leading-paragraph-1 tracking-paragraph-1 md:text-paragraph-1 text-zinc-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, facilis, ipsa quas quibusdam quasi architecto sequi nisi veniam et maxime cum ex consequatur sunt ratione blanditiis excepturi dolores, tempore repellendus.
                    obcaecati reiciendis vel! Sequi veniam consectetur voluptate doloremque molestiae dolor, facilis inventore?
                </p>
            </div>
        </div>
    )
}

export default AboutMe;