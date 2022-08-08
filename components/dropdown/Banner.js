import React from 'react'
import { useState } from 'react'

import Navbar from "./Navbar";
import Image from 'next/image'
import Hamburger from 'hamburger-react'




const App = () => {
  const [isOpen, setOpen] = useState(false)
    return (
        <header>
          <div className="flex bg-black text-white border-b-[2px] border-[#38b6ff] h-20 justify-between items-center sticky top-0 z-10">
            <a href="/">
              <Image
                src="/AltTop1.png"
                alt="Apollo Systems logo"
                width={200}
                height={65}
                />
            </a>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <div className={`top-[8vh] right-0 fixed border-t-[1px] border-white bg-[#38b6ff]/95 w-full h-full p-10 flex justify-center ${isOpen ? 'translate-x-0':'translate-x-full'} ease-in-out duration-500`}>
              <Navbar />
            </div>
          </div>
        </header>
      );
    };
    
    export default App;