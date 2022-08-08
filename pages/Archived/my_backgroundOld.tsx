import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, 
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'


const about = () => {
  return (
    <div className={styles.bkImg}>
      <Head>
        <title>My Background</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.aboutHeader}>My<br></br>Background</h1>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}/>
      <h1 className={styles.subHeadCard}>CHARLESTON OWNED, LOWCOUNTRY FOCUSED</h1>
      <h1 className={styles.smallLine}/>
          <h2 className={styles.largeCard}>Apollo Systems is a locally owned and grown business. Our goal is to focus on meeting the 
          technology needs of businesses in the Lowcountry, to help make them more successful.
          <br></br><br></br> 
          We understand businesses and goals are different depending on the company and industry, and we work to develop 
          partnerships with our clients that not only ensure their information technology and security needs are met, but 
          that they are enabled to succeed longterm.
          </h2>
    </div>
    <br></br>

    <div className={styles.singleCards}>
      <h1 className={styles.smallLine}/>
      <h1 className={styles.subHeadCard}>CRITICAL SKILLS BUILT ON REAL-WORLD EXPERIENCE</h1>
      <h1 className={styles.smallLine}/>
            <h2 className={styles.largeCard}>Our team has over 30 years of combined experience, and come armed with a variety of skills including:</h2>
    </div>

    <div className={styles.singleCards}>
      <br></br>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>MEET OUR TEAM:</h1>
      <h1 className={styles.smallLine}></h1>
    </div>

    <div className={styles.imgCards}>
      <h2 className={styles.smallCard}>
        <img src="./cory.jpg" alt="Cystak" width="200px" height="200px"></img>
        <a>Dr. Crystal Hank
          <br></br>
          Licensed Psychologist / Owner
        </a>
      </h2>
    </div> 
    <br></br><br></br>

    <div className={styles.cards}>
      <h2 className={styles.smallCard}></h2>
      <button className={styles.contactCard}>
        <Link href="/contact">
          REACH OUT
        </Link>
      </button>
      <h2 className={styles.smallCard}></h2>
    </div>
    <br></br>

  </div>
  )
}

export default about