import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-hero-pattern">
        <Image
            src="/AltLogo4.png"
            alt="Compass image of Wayfarer Wellness logo"
            width={800}
            height={800}
        />
    </div>
  )
}

export default Hero