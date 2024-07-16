import React from 'react'
import BoomTechIcon from '../../assets/boomtech-icon.jpeg'
export default function () {
    return (
        <div className='border border-white w-[93%] rounded-lg flex flex-col justify-between min-h-40 px-9 py-9'>

            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-center'>
                    <img src={BoomTechIcon} alt="boom tech icon" height='32px' width='32px' className='mr-4 rounded-full' />
                    <p className='text-white'> Web Developer Intern at Boom Technologies </p>
                </div>
                <p className='text-white'>Dec 2023 - Mar 2024</p></div>
            <div>
                <p className='text-zinc-300'>
                    &emsp; - Interned as a frontend developer, actively engaged in the development and enhancement of web applications using React/NextJS.
                </p>
                <p className='text-zinc-300'>
                    &emsp;  - Participated in the full software development lifecycle, from concept to deployment.
                </p>
                <p className='text-zinc-300'>
                    &emsp; - Collaborated on UI/UX initiatives, including wireframing and prototyping.
                </p>
            </div>
        </div>
    )
}
