import React from 'react'
import ProjectBox from '../common/ProjectBox'

const Project = () => {
    return (

        <div className='flex flex-col items-center bg-primary-black max-w-screen-2xl mx-auto min-w-[320px] gap-y-14 min-h-[400px]'>
            <p className='text-display leading-display tracking-display py-4 text-white text-center'>My <span className='font-bold'>Projects</span></p>
            <ProjectBox/>
            <ProjectBox/>
            <ProjectBox/>
        
        </div>
    )
}

export default Project