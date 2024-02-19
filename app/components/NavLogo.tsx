"use client"

import React from 'react'
import { useEffect, useState } from "react";
import Image from 'next/image';
import jnrLogo from "@/public/images/jnr.svg"; 


export default function NavLogo() {   

    const [scrollPosition, setScrollPosition] = useState("");

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        scrollPosition > 96 ? setScrollPosition("shrink") : setScrollPosition("");
        console.log(scrollPosition);
    };
    
    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div id="logo" className={`group relative mt-24 mx-auto flex justify-between 
        ${scrollPosition == "" ? 'flex-col w-[12.5rem] h-auto items-center ' : 'sticky top-2 flex-row w-auto h-[90px] items-start'}`}>
        <Image 
            src={jnrLogo}
            alt="Jnr"
            className={`border-[0.375rem] border-orange-600 rounded-full bg-[var(--background-color)] z-10
            ${scrollPosition == "" ? 'absolute' : 'relative mt-1 w-20 border-2'}`}
            priority
        />
        <nav className={`relative flex w-full flex-grow
            ${scrollPosition == "" ? 'gap-[.375rem] mt-24' : 'pl-10 top-[5px] -left-10 bg-orange-600 gap-0 rounded-r-[15px] rounded-b-[15px] overflow-hidden'}`}>

            <div className={`flex flex-grow w-full transition-height ease-in-out delay-75
            ${scrollPosition == "" ? 'h-40 hover:h-48 rounded-b-2xl' : ' h-10 rounded-b-md'}`}>
                <a href="#" className={`flex w-full justify-center items-end rounded-b-2xl uppercase text-white bg-orange-600
                ${scrollPosition == "" ? 'pb-[0.625rem]' : 'px-[5px] py-4 text-xs items-center rounded-b-md'}`}>home</a>
            </div>

            <div className={`flex flex-grow w-full transition-height ease-in-out delay-75
            ${scrollPosition == "" ? 'h-40 hover:h-48 rounded-b-2xl' : ' h-10 rounded-b-md'}`}>
                <a href="#" className={`flex w-full justify-center items-end rounded-b-2xl uppercase text-white bg-orange-600
                ${scrollPosition == "" ? 'pb-[0.625rem]' : 'px-[5px] py-4 text-xs items-center rounded-b-md'}`}>about</a>
            </div>

            <div className={`flex flex-grow w-full transition-height ease-in-out delay-75
            ${scrollPosition == "" ? 'h-40 hover:h-48 rounded-b-2xl' : ' h-10 rounded-b-md'}`}>
                <a href="#" className={`flex w-full justify-center items-end rounded-b-2xl uppercase text-white bg-orange-600
                ${scrollPosition == "" ? 'pb-[0.625rem]' : 'px-[5px] py-4 text-xs items-center rounded-b-md'}`}>work</a>
            </div>

        </nav>
        <div className={`${scrollPosition == "" ?
         'group-hover:rotate-[330deg] group-hover:after:opacity-100 absolute w-[15rem] bg-blue-50 top-28 left-auto right-auto transition-all duration-500 ease-linear origin-center after:content-["Hi!"] after:flex after:absolute after:m-auto after:left-auto after:-right-10 after:top-0 after:bottom-0 after:pl-8 after:pr-5 after:py-7 after:rounded-r-xl after:bg-black after:opacity-0 after:justify-center after:items-center after:text-white after:z-20 after:animate-shake after:origin-left' : ''}`}>

         </div>
    </div>
  )
}