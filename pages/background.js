import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Popup from './popup'
import { useState } from 'react';
import ContactForm from './ContactForm'
import styles from '/src/pagestyle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'
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


const background = () => {
    const [isSent, setIsSent] = useState(false)
    const [buttonPopup, setButtonPopup] = useState(false); /*button trigger*/

  return (
    <div className={styles.bkContact}>
      <Head>
        <title>My Background</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className={styles.aboutHeader}>My<br></br>Background</h1>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}/>
      <h1 className={styles.subHeadCard}>Hands-on experience.</h1>
      <h1 className={styles.smallLine}/>
          <h2 className={styles.largeCard}>
          I have over 11 years’ experience in engineering and project management roles. I spent the early part of my career as a 
          process control engineer in manufacturing, where I worked to optimize processes through automation and statistcal process 
          control. Since then I have held multiple roles, centered around project management and process improvement.</h2>

            <h2 className={styles.largeCard}>I have over five years' experience in clinical counseling in a wide range of settings, including inpatient treatment, 
            a bariatric and medical weight loss program in which clients were pursuing bariatric surgery, multiple college counseling centers, and a community 
            health center. I also have experience in clinical supervision.</h2>

            <h2 className={styles.largeCard}> 
            I am open to and enjoy working with a diverse range of clients, including individuals of varying religious beliefs, ethnicity, gender identity, 
            and sexual orientation. I am passionate about the practice of therapy, and helping those in need develop the tools and skills required to cope with
            difficult situations in life.
          </h2>

            <h2 className={styles.largeCard}>I am a Licensed Clincal Psychologist (SC/VA), as well as a Professor of Practice at The Citadel. 
          I earned a Masters in clinical-counseling psychology (2013), and Psy.D. in counseling psychology from Radford University (2017).</h2>
    </div>
    <br />

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}/>
      <h1 className={styles.largeCard}>Skills:</h1>
      <div className={styles.dubCards}>
        <h2 className={styles.servSmallCard1}>
          <ul>
            <li>Java/HTML/Node</li>
            <li>Python/R/SAS/JMP</li>
            <li>Matlab</li>
            <li>Minitab</li>
            <li>SQL/SQL Databases</li>
            <li>Aspen Plus</li>
            <li>IP21/OSIsoft/Pi systems</li>
          </ul>
        </h2>
        <h2 className={styles.servSmallCard1}>
          <ul>
            <li>agile/Scrum</li>
            <li>Lean Six Sigma</li>
            <li>MS Project/Smartsheet/JIRA</li>
            <li>Kanban/DMAIC/SIPOC/VSM</li>
            <li>Power BI/Tableau</li>
            <li>Excel (Macros, solver. modeling)</li>
            <li>Visio/Draw.io</li>
          </ul>
        </h2>
      </div>
      </div>
    <br/>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}/>
      <h1 className={styles.smallLine}/>
      <h1 className={styles.largeCard}>Education:</h1>
      <h1 className={styles.smallLine}/>
      <div className={styles.dubCards}>
        <h2 className={styles.vtCard2}>
        {/*<Image
          src="/vtLogo.png"
          alt="VT Logo"
          width={80}
          height={80}
          class="absolute justify-center order-1">
        </Image>*/}
          <br/>
          B.S. Chemical engineering
          <br/><br/>
          Minor: 
          <br/>
          Computer Science
          <br/><br/>
          Virginia Tech, 2011
          <br/><br/>
        </h2>
        <h2 className={styles.scCard2}>
        {/*<Image
          src="/scLogo.png"
          alt="SC logo"
          width={80}
          height={80}
          class="absolute justify-center order-1">
        </Image>*/}
          <br/>
          Masters of Business Administration
          <br/><br/>
          Graduate Certificates: 
          <br/>
          Data Analytics,
          Information Security
          <br/><br/>
          University of South Carolina, 2022
          <br/><br/>
        </h2>
      </div>
      </div>
      <br/><br/>

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
  )
}

export default background