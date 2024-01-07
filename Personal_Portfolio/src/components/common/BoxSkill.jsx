import React from 'react'

export default function ({text, logo}) {
    return (
        <div class='flex flex-col gap-5 justify-center rounded-[4px] items-center group cursor-pointer hover:bg-black border border-2 border-black w-[150px] h-[150px] md:w-[161.5px] md:h-[160px] mx-auto'>
            <img src={logo} width="100%" height="100%" className='w-[50%] h-[50%] group-hover:bg-white rounded-[4px]'/>
               
            <p class='group-hover:text-white text-h5 font-extrabold'>
                {text}
            </p>
        </div>
    )
}
