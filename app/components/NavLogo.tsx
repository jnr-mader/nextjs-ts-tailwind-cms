import React from 'react'
import Image from 'next/image';
import jnrLogo from "@/public/images/jnr.svg"; 


export default function NavLogo() {
  return (
    <div id="logo" className='group relative mx-auto mt-[12.5rem] flex flex-col w-[12.5rem] h-[9.375rem] justify-between items-center'>
        <Image 
            src={jnrLogo}
            alt="Jnr"
            className='absolute  -top-[6rem] border-[0.375rem] border-white rounded-full bg-[#65c9ff]'
            priority
        />
        <nav className='flex w-full flex-grow gap-[.375rem]'>
            <div className='flex flex-grow w-full h-40 hover:h-48 rounded-b-2xl transition-height ease-in-out delay-75'>
                <a href="#" className='flex w-full pb-[0.625rem] justify-center items-end rounded-b-2xl uppercase text-white bg-orange-600'>home</a>
            </div>
            <div className='flex flex-grow w-full h-40 hover:h-48 rounded-b-2xl transition-height ease-in-out delay-75'>
                <a href="#" className='flex w-full pb-[0.625rem] justify-center items-end rounded-b-2xl uppercase text-white bg-orange-600'>about</a>
            </div>
            <div className='flex flex-grow w-full h-40 hover:h-48 rounded-b-2xl transition-height ease-in-out delay-75'>
                <a href="#" className='flex w-full pb-[0.625rem] justify-center items-end rounded-b-2xl uppercase text-white bg-orange-600'>work</a>
            </div>
        </nav>
        <div className='group-hover:rotate-[360deg] group-hover:after:opacity-100 
        absolute w-[15rem] bg-blue-50 top-4 left-auto right-auto 
        transition-all delay-75 ease-linear origin-center after:content-["Hi!"] 
        after:flex after:absolute after:m-auto after:left-auto after:right-0 after:top-0 after:bottom-0
        after:w-11 after:h-11 after:rounded-full after:bg-black after:opacity-0 after:justify-center
        after:items-center after:text-white'></div>
    </div>
  )
}