import React from 'react'
import website from '../../assets/under-construction.png'
import open from '../../assets/icons/openlink.svg' 
export default function ({projectImg, name ="Websites are under constructions", number, description}) {
    return (
        <div className=' w-[95%] flex flex-col md:flex-row'>
            <div className='flex justify-center md:h-80 lg:h-96 md:w-1/2 md:justify-center md:items-center'>
                <div className='bg-white w-[90%] h-[367px] md:w-[80%]md:h-[90%] rounded-[18.76px] overflow-hidden'>
                    <img src={website}  alt="under construction" />
                </div>
            </div>
            <div className='flex justify-center md:h-80 lg:h-96 md:w-1/2 md:justify-center md:items-center'>
                <div className='w-[90%] h-[367px] md:w-[90%] md:h-[90%] flex flex-col justify-around'>
                    <p className='font-extrabold text-white text-dispay-subhead md:text-display'>{number}</p>
                    <p className='font-bold text-white text-h3 md:text-h2'>{name}</p>
                    <p className='md:text-paragraph-1 text-slate-400'>UNDER CONSTRUCTION</p>
                    <img src={open} width={'20px'} height={'20px'} alt="" />
                </div>
            </div>
        </div>
    )
}
