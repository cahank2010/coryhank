import React from 'react'
import { useState } from 'react'

import Navbar from "./Navbar";
import Image from 'next/image'
import Hamburger from 'hamburger-react'




const Banner = () => {
  const [isOpen, setOpen] = useState(false)
    return (
        <div>
          {/*<div className="flex text-black bg-transparent border-b-[2px] border-[#7ed957] h-20 justify-between items-center sticky top-0 z-10">
            <a href="/">
              <Image
                src="/favicon.png"
                alt="CH Top logo"
                width={80}
                height={80}
                />
            </a>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <div className={`top-[8vh] right-0 fixed border-t-[1px] border-white bg-white/90 w-full h-full p-10 flex justify-center ${isOpen ? 'translate-x-0':'translate-x-full'} ease-in-out duration-500`}>
              <Navbar />
            </div>
    </div>*/}
        </div>
      );
    };
    
    export default Banner;