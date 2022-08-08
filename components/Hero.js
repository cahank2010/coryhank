import Image from 'next/image'



const Hero = () => {


  return (
    
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-hero-pattern bg-center">
        <Image
            src="/AltLogo5.png"
            alt="Compass image of Wayfarer Wellness logo"
            width={600}
            height={600}
        />

    </div>
  )
}

export default Hero