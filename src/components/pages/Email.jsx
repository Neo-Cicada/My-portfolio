import React from 'react'
import { Element } from 'react-scroll'
export default function Email() {
  return (
    <Element name="contactMe">
      <div className=' flex flex-col md:flex-row py-5 md:justify-center md:items-center md:h-[80vh] lg:h-[100vh] max-w-screen-2xl mx-auto min-w-[320px] md:max-h-[800px] md:min-h-[400px]'>
        <div className='flex px-9 flex-col justify-start md:w-1/2 gap-y-9'>
          <input type="text" placeholder="Name" class=" md:w-[83%] h-[56px] border-2 border-black rounded-md py-2 px-3 focus:border hover:boder" />
          <input type="text" placeholder="Email" class="md:w-[83%] h-[56px] border-2 border-black rounded-md py-2 px-3 focus:border hover:boder" />
          <input type="text" placeholder="Your Website" class="md:w-[83%] h-[56px] border-2 border-black rounded-md py-2 px-3 focus:border hover:boder" />
          <textarea placeholder='Message' className='min-h md:w-[83%] h-[140px] md:min-h-[140px] md:max-h-[140px] border-2 border-black rounded-md py-2 px-3 focus:border hover:boder' />
          <div className='flex justify-start'>
            <button className='bg-black w-[173px] text-white h-[56px] rounded font-extrabold leading-display tracking-display'>Get in touch</button>
          </div>
        </div>
        <div className='flex flex-col gap-7 md:w-1/2 px-9 py-5'>
          <p className='text-dispay-subhead md:text-h2 lg:text-display font-extrabold leading-display tracking-display'>Let's <span className='text-outline'>talk</span> for Something Special</p>
          <p className='text-paragraph-2 md:text-paragraph-1 leading-paragraph-1 tracking-paragraph-1 text-zinc-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium repellat perspiciatis deserunt magnam impedit rem totam velit! Nisi tenetur nam tempore suscipit, eaque officia neque! Neque ab explicabo recusandae eum.</p>
          <p className='md:text-h5 lg:text-display-medium font-extrabold'>lordneobarnachea@gmail.com</p>
          <p className='md:text-h5 lg:text-display-medium font-extrabold'>+639084590726</p>
        </div>
      </div>
    </Element>
  )
}
