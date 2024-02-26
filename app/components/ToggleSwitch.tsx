"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import lightIcon from "@/public/images/light-icon.svg"; 
import darkIcon from "@/public/images/dark-icon.svg"; 

export default function ToggleSwitch({isChecked, handleCheckboxChange}) {
  // const [isChecked, setIsChecked] = useState(false)

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked)
  // }

  return (
    <div className='flex sticky justify-end w-full top-[calc(100vh-3rem)]'>
      <label className='relative inline-flex py-1 px-1 cursor-pointer select-none items-center justify-center rounded-md bg-orange-600'>
        <input
          type='checkbox'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-1 px-1 text-sm font-medium gap-1 ${
            !isChecked ? 'text-primary bg-defTabsColor' : 'bg-orange-600 text-defTabsColor'
          }`}
        >
        <Image 
            src={lightIcon}
            alt="Jnr"
            priority
        />          
          light
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-1 px-1 text-sm font-medium gap-1 ${
            isChecked ? 'text-primary bg-defTabsColor' : 'bg-orange-600 text-defTabsColor'
          }`}
        >
        <Image 
            src={darkIcon}
            alt="Jnr"
            priority
        />              
          dark
        </span>
      </label>
    </div>
  )
}
