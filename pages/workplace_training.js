import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import Popup from './popup'
import { useState } from 'react';
import ContactForm from './ContactForm'
import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt,
         faBullseye,
         faShieldHalved} from '@fortawesome/free-solid-svg-icons'


const workplace_training = () => {
    const [isSent, setIsSent] = useState(false)
    const [buttonPopup, setButtonPopup] = useState(false); /*button trigger*/
  return (
    <>
    <div className={styles.bkImg}>
      <Head>
        <title>Workplace Training</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cyberHeader}>Workplace<br></br>Training
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
      <button className={styles.contactCard} onClick={() => setButtonPopup(true)}>Reach Out</button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <div className={styles.subHeadCard}>
                <ContactForm />
              </div>
          </Popup>
      <h2 className={styles.smallCard}></h2>
    </div>
    <br></br>

  </>
  )
}

export default workplace_training