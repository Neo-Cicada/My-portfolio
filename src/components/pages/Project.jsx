import React from 'react'
import ProjectBox from '../common/ProjectBox'
import { Element } from 'react-scroll'
import bms from '../../assets/bms.png'
const Project = () => {
    return (
        <Element name="project">
            <div className='flex flex-col items-center bg-primary-black max-w-screen-2xl mx-auto min-w-[320px] gap-y-14 min-h-[400px]'>
                <p className='py-4 text-center text-white text-display leading-display tracking-display'>My <span className='font-bold'>Projects</span></p>
                <ProjectBox
                    number="1"
                    name='Barangay Management System'
                    description="Led the design and implementation of a comprehensive Barangay Management System, employing React, Material-UI, Firebase, and Node.js technologies to facilitate efficient communication and request management between administrators and users."
                    projectImg={bms}
                    gitlink={"https://github.com/Neo-Cicada/Thesis-Barangay-Management-System"}
                    />
                <ProjectBox number="2" name='Bookish Boulevard' />
                <ProjectBox number="3" name='Rapid Room' />

            </div>
        </Element>
    )
}

export default Project