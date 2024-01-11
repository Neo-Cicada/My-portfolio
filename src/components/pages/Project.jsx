import React from 'react'
import ProjectBox from '../common/ProjectBox'
import { Element } from 'react-scroll'
const Project = () => {
    return (
        <Element name="project">
            <div className='flex flex-col items-center bg-primary-black max-w-screen-2xl mx-auto min-w-[320px] gap-y-14 min-h-[400px]'>
                <p className='text-display leading-display tracking-display py-4 text-white text-center'>My <span className='font-bold'>Projects</span></p>
                <ProjectBox number="1" name='Rapid Room'/>
                <ProjectBox number="2" name='Bookish Boulevard'/>
                <ProjectBox number="3" name='Barangay Management System'/>

            </div>
        </Element>
    )
}

export default Project