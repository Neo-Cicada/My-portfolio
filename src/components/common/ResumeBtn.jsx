import React from 'react'
import download from '../../assets/icons/download.svg'
import resumePDF from '../../assets/resume.pdf'

const ResumeBtn = () => {
    const handleButtonClick = () => {
        // Open a new tab with the PDF URL
        window.open(resumePDF, '_blank');
    };

    return (
        <div
            className='cursor-pointer h-full w-[153px] bg-black text-primary-white flex justify-center items-center gap-3 rounded-[4px]'
            onClick={handleButtonClick}
        >
            <p className='text-lg font-semibold'>Resume</p>
            <img src={download} alt="download icon" />
        </div>
    )
}

export default ResumeBtn