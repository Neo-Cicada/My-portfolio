import React, { useEffect, useState } from 'react';
import ResumeBtn from './ResumeBtn'
import BurgerIcon from '../../assets/icons/burger.svg'
import { Link } from 'react-scroll';
export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className=' flex gap:10 justify-around sm:justify-between items-center h-[13vh] px-2 py-2 sm:px-10 sm:py-5 max-w-screen-2xl mx-auto min-w-[320px max-h-[100px]'>
                <p className='font-bold text-lg sm:text-2xl w-[40%] md:w-[20%] flex justify-start'>Lord Neo Barnachea</p>
                {windowWidth > 645 ?
                    <>
                        <nav className='sm:w-[60%] md:w-[50%] lg:w-[40%]'>
                            <ul className='flex justify-between '>
                                <li className='font-bold text-sm sm:text-sm md:text-xl cursor-pointer'>
                                    <Link to="aboutMe" smooth={true} duration={'500'}>About Me</Link>
                                </li>
                                <li className='font-bold text-sm sm:text-sm md:text-xl cursor-pointer'>
                                    <Link to="skills" smooth={true} duration={'500'}>Skills</Link>
                                </li>
                                <li className='font-bold text-sm sm:text-sm md:text-xl cursor-pointer'>
                                    <Link to="project" smooth={true} duration={'500'}>Project</Link>
                                </li>
                                <li className='font-bold text-sm sm:text-sm md:text-xl cursor-pointer'>
                                    <Link to="contactMe" smooth={true} duration={'500'}>Contact Me</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className=' flex h-auto md:h-[65%] lg:h-full justify-end'>
                            <ResumeBtn />
                        </div>
                    </> :
                    <div className='w-[50%] flex justify-end'>
                        <img className='cursor-pointer' src={BurgerIcon} alt='burger icon' />
                    </div>
                }
            </div>
        </>
    )
}
