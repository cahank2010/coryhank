import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt,
         faBullseye,
         faShieldHalved} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, 
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'


const relaxation_sessions = () => {
  return (
    <>
    <div className={styles.bkImg}>
      <Head>
        <title>RELAXATION SESSIONS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cyberHeader}>Relaxation<br></br>Sessions
      </div>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h2 className={styles.subHeadCard}>Subheader</h2>
      <h3 className={styles.smallLine}></h3>
            <p className={styles.largeCard}>Paragraph Text Here.</p>
    </div>
    <br></br><br></br>

    

    <div className={styles.singleCards}>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>Subheader</h2>
      <h3 className={styles.smallLine}></h3>
            <p className={styles.largeCard}>Paragraph Text Here.</p>
      <h3 className={styles.divideCard}></h3>
    </div>
    <br></br><br></br>



  </div>

  <div className={styles.cards}>
    <h2 className={styles.smallCard}></h2>
    <button className={styles.contactCard}>
      <Link href="/contact">
        REACH OUT
      </Link>
    </button>
    <h2 className={styles.smallCard}></h2>
  </div>
  </>
  )
}

export default relaxation_sessions