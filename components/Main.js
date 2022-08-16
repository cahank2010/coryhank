import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import styles from '/src/pagestyle.module.css';
import Navbar from "./dropdown/Navbar";
import {Spin as Hamburger} from 'hamburger-react'
import Link from 'next/link'
import { icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, 
  faCloudArrowUp,
  faEnvelope,
  faBuilding,
  faLock,
  faMousePointer,
  faPercentage,
  faGaugeSimpleHigh,
  faBullseye,
  faChartLine,
  faRoute,
  faListCheck,
  faDiagramProject,
  faChartPie,
  faWaveSquare,
  faChartArea,
  faGears,
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, 
  faLinkedin, 
  faFacebook, 
  faInstagram, 
  faGithub} from '@fortawesome/free-brands-svg-icons'

const Main = () => { 
const [isOpen, setOpen] = useState(false);
return (
<html>
<div class="h-screen">
  <div class="fixed z-50 top-0 left-0 px-5">
    <a href="/">
    <Image
      src="/coryhankbasic.png"
      alt="CH Top logo"
      width={80}
      height={80}
      class="absolute left-0 top-0 order-1">
      </Image>
    </a>
    </div>
    <div class="fixed z-50 top-0 right-0 px-5 py-3">
    <button>
      <Hamburger 
        color="white" 
        toggled={isOpen} 
        toggle={setOpen} 
        class="absolute right-0 top-0 z-50 order-2"/>
        <div 
          className={`top-[8vh] right-0 fixed border-t-[1px] border-white bg-white/90 w-full h-full p-10 z-30 flex justify-center ${isOpen ? 'translate-x-0':'translate-x-full'} ease-in-out duration-500`}
          >
          <Navbar />
        </div>
    </button>
  </div>
  <video 
    autoPlay
    loop
    muted
    class="absolute min-w-full max-w-none top-0 right-0 z-negative ">
      <source          
      src="CHBackgroundVid3.mp4"
      type="video/mp4">
      </source>
  </video>
  <div class="absolute z-30 bottom-[5%] left-[10%] px-5 py-3">
    <Image
      src="/CHTitle.png"
      alt="CH Top logo"
      width={600}
      height={300}
      class="absolute left-0 top-0 order-1">
    </Image>
  </div>
</div>
<div className={styles.bkContact} id="services-section">
        <h1 className={styles.servicesHeader}>Helping find solutions<br/>to today's problems.</h1>    
        <br></br>

        <div className={styles.singleCards}>
          <h3 className={styles.divideCard}></h3>
          <h3 className={styles.divideCard}></h3>
          <div className={styles.subHeadCard}>I am a problem solver by nature, with a wealth of experience in 
          Project Management and Process Improvement. My varied background and experience gives me the ability 
          to adapt quickly and effectively to tackle and resolve new opportunities as they arise.
          </div>
          <h3 className={styles.divideCard}></h3>
          <h3 className={styles.smallLine}></h3>
        </div>
        <br></br>

        <div className={styles.singleCards}>
          <div className={styles.projCards}>
            <h4 className={styles.projectCard}>
            <br/><br/>
              <FontAwesomeIcon icon={faDiagramProject} size="2x"/>
              <br/><br/>
              Project
              <br></br>
              Management
              </h4>
            <h4 className={styles.projectCard}>
              <br/><br/>
              <FontAwesomeIcon icon={faListCheck} size="2x"/>
              <br/><br/>
              agile / 
              <br/>
              Scrum
              </h4>
            <h4 className={styles.projectCard}>
              <br/><br/>
              <FontAwesomeIcon icon={faChartPie} size="2x"/>
              <br/><br/>
              Lean
              <br/>
              Six Sigma
              </h4>
            <h4 className={styles.projectCard}>
              <br/><br/>
              <FontAwesomeIcon icon={faGears} size="2x"/>
              <br/><br/>
              Process Design
              <br/>
              & Improvement
              </h4>
            <h4 className={styles.projectCard}>
            <br/><br/>
              <FontAwesomeIcon icon={faWaveSquare} size="2x"/>
              <br/><br/>
              Automation &
              <br/>
              Controls
              </h4>
            <h4 className={styles.projectCard}>
              <br/><br/>
              <FontAwesomeIcon icon={faRoute} size="2x"/>
              <br/><br/>
              KPI
              <br/>
              Developement
              </h4>
            <h4 className={styles.projectCard}>
              <br/><br/>
              <FontAwesomeIcon icon={faChartArea} size="2x"/>
              <br/><br/>
              Data
              <br/>
              Analysis
              </h4>
            <h4 className={styles.projectCard}>
            <br/><br/>
              <FontAwesomeIcon icon={faLock} size="2x"/>
              <br/><br/>
              Cybersecurity
              </h4>
            <h4 className={styles.projectCard}>
            <br/><br/>
              <FontAwesomeIcon icon={faMousePointer} size="2x"/>
              <br/><br/>
              Web
              <br/>
              Design
              </h4>
          </div>
          <h3 className={styles.divideCard}/>
        </div>

        <div className={styles.footerCards}>
          <h2 className={styles.footerCard}>
          <Link href="https://linkedin.com/in/cory-hank">
            <a className="p-6">
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
          </Link>

          <Link href="mailto: cahank73@gmail.com">
            <a className="p-6">
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
          </Link>

          <Link href="https://github.com/cahank2010">
            <a className="p-6">
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
          </Link></h2>
        </div>
        
</div>

</html>
)
}

export default Main



/*const Hero = () => {
  const [isOpen, setOpen] = useState(false)
  return (*/
    
    /*<div className="flex min-h-screen flex-col items-center justify-center py-2 bg-hero-pattern bg-center">
        <Image
            src="/AltLogo5.png"
            alt="Compass image of Wayfarer Wellness logo"
            width={600}
            height={600}
        />*/

      /*<div class="relative flex h-screen w-auto mb-12 overflow-hidden">
        <div class="relative flex text-black bg-transparent w-full h-screen z-30">
          <a href="/">
              <Image
                src="/coryhankbasic.png"
                alt="CH Top logo"
                width={80}
                height={80}
                class="absolute left-0 top-0 order-1"
                />
            </a>
            <Hamburger 
              color="white" 
              toggled={isOpen} 
              toggle={setOpen} 
              class="absolute right-0 top-0 order-2"/>
              <div 
                className={`top-[8vh] right-0 fixed border-t-[1px] border-white bg-white/90 w-full h-full p-10 flex justify-center ${isOpen ? 'translate-x-0':'translate-x-full'} ease-in-out duration-500`}
                >
                <Navbar />
              </div>
            <a href="/">
              <Image
                src="/coryhankbasic.png"
                alt="CH Top logo"
                width={80}
                height={80}
                class="absolute bottom-0 left-0 order-3"
                />
            </a>
        </div>

            <video src="CHBackgroundVid.mp4"
              autoPlay
              loop
              muted
              class="absolute z-10 min-w-[965px] min-h-full max-w-none z-negative">
            </video>
          

        
      </div>
    
  )
}*/

/*export default Hero*/