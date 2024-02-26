'use client'

import React, { useState } from 'react'
import NavLogo from "./components/NavLogo";
import ToggleSwitch from "./components/ToggleSwitch";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false)
  
  return (
    <div
      className="animate-rollingGradient bg-[length:400%_400%] bg-gradient-to-br from-gradColorStart to-gradColorEnd"
      data-theme={isChecked ? 'dark':'light'}
    >
      <main className="flex mx-auto max-w-[1280px] min-h-screen flex-col items-center h-[5000px]">
        <ToggleSwitch isChecked={isChecked} handleCheckboxChange={()=> setIsChecked(!isChecked)}/>
        <NavLogo />
        <div className="py-10 text-4xl text-center text-balance">
          <p>
            With over ten years of commercial experience, building and
            maintaining pixel perfect responsive websites.
          </p>
          <p>
            Specialising in front end development, with a passion for creating
            beautiful and functional user interfaces.
          </p>
          <p>Have a look around and please feel free to say hi.</p>
        </div>
        <div>
          <div>
            <div className="grid gap-4 grid-cols-6">
              <div className="flex rounded-md size-32 invisible">01</div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2">
                02
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                03
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                04
              </div>
              <div className="flex rounded-md size-32 invisible">05</div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2">
                06
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2">
                07
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-66 row-span-2 col-span-2">
                08
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                09
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                10
              </div>
              <div className="flex rounded-md size-32 invisible">11</div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                12
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                13
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                14
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                15
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                16
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                17
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2  size-98 row-span-3 col-span-3">
                18
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                19
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                20
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                21
              </div>
              <div className="flex rounded-md size-32 invisible">22</div>
              <div className="flex rounded-md size-32 invisible">23</div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                24
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                25
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                26
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                27
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                28
              </div>
              <div className="flex rounded-md size-32 invisible">29</div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                30
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                31
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                32
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                33
              </div>
              <div className="flex bg-orange-600 text-white rounded-md border-black border-2 size-32">
                34
              </div>
              <div className="flex rounded-md size-32 invisible">35</div>
              <div className="flex rounded-md size-32 invisible">36</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
