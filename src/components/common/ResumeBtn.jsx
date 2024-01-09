import React from 'react'
import download from '../../assets/icons/download.svg'


const ResumeBtn = () => {
    return (
        <div className='cursor-pointer h-full w-[153px] bg-black text-primary-white flex justify-center items-center gap-3 rounded-[4px]'>
           <p className='text-lg font-semibold'>Resume</p>
           <img src={download} alt="download icon" />
        </div>
    )
}

export default ResumeBtn