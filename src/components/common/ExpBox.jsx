import React from 'react'
import BoomTechIcon from '../../assets/boomtech-icon.jpeg'
export default function () {
    return (
        <div className='border border-white w-[93%] rounded-lg flex flex-col justify-between h-40 px-9 py-9'>

            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <img src={BoomTechIcon} alt="boom tech icon" height='32px' width='32px' className='rounded-full mr-4' />
                    <p className='text-white'> Web Developer Intern at Boom Technologies </p>
                </div>
                <p className='text-white'>Dec 2023 - Present</p></div>
            <div>
                <p className='text-zinc-300'>Lorem ipsum dolor sit,laborum adipisci!</p>
            </div>
        </div>
    )
}
