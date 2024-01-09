import React from 'react'
import ExpBox from '../common/ExpBox'

export default function () {
    return (
        <div className='py-5 bg-primary-black md:h-[80vh] lg:h-[100vh] max-w-screen-2xl mx-auto min-w-[320px] max-h-[800px] min-h-[400px]'>
            <p className='text-display text-primary-white text-center '>My <span className='font-bold'>Experience</span></p>
            <div className='flex flex-col justify-center items-center gap-5'>
                <ExpBox/>
                <ExpBox/>
            </div>
        </div>
    )
}
