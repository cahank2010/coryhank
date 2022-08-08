import React from 'react'
import ContactForm from '../pages/ContactForm'
import Link from 'next/link'
import Head from 'next/head';
import Popup from './popup'
import { useState } from 'react';
import { useEffect } from 'react'
import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
  const [isSent, setIsSent] = useState(false)
  const [buttonPopup, setButtonPopup] = useState(false); /*button trigger*/
  /*const [timedPopup, setTimedPopup] = useState(false);*/ /*time triggered*/

  /*useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000
    );
  }, []
  );*/

  return (
    <div className={styles.bkImg} id="services-section">
      <Head>
        <title>Wayfinder Mental Wellness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className={styles.servicesHeader}>Mental<br></br> Health Services</h1>    
        <br></br>

        <div className={styles.singleCards}>
          <h3 className={styles.divideCard}></h3>
          <h3 className={styles.divideCard}></h3>
          <div className={styles.subHeadCard}>ENTER TEXT HERE
          </div>
          <h3 className={styles.divideCard}></h3>
          <h3 className={styles.smallLine}></h3>
        </div>
        <br></br>

        <div className={styles.serviceCards}>
          <button className={styles.imgCards}>
            <Link href="/counseling">
            <h2 className={styles.servSmallCard1}>
              <img className={styles.servImg} src="./counselNew.jpg" alt="Counseling"></img>
              <a className={styles.aServStyle}>
                Counseling
              </a>
              <br></br><br></br>
              <p className={styles.pServStyle}>
                Enter Text Here.
              </p>
            </h2>
            </Link>
            </button>
            <button className={styles.imgCards}>
            <Link href="/relaxation_sessions">
            <h2 className={styles.servSmallCard2}>
              <img className={styles.servImg} src="./relaxNew.jpg" alt="Relaxation"></img>
              <a className={styles.aServStyle}>
                Relaxation Sessions
              </a>
              <br></br><br></br>
              <p className={styles.pServStyle}>
                Enter Text Here.
              </p>
            </h2>
            </Link>
            </button>
            <button className={styles.imgCards}>
            <Link href="/relaxation_sessions">
            <h2 className={styles.servSmallCard1}>
              <img className={styles.servImg} src="./mindNew.jpg" alt="Mindfulness" width="200px" height="200px"></img>
              <a className={styles.aServStyle}>
                Wellness Workshops
              </a>
              <br></br><br></br>
              <p className={styles.pServStyle}>
                Enter Text Here.
              </p>
            </h2>
            </Link>
            </button>
            <button className={styles.imgCards}>
            <Link href="/relaxation_sessions">
            <h2 className={styles.servSmallCard2}>
              <img className={styles.servImg} src="./equalNew.jpg" alt="Training" width="200px" height="200px"></img>
              <a className={styles.aServStyle}>
                Workplace Training
              </a>
              <br></br><br></br>
              <p className={styles.pServStyle}>
                Enter Text Here.
              </p>
            </h2>
            </Link>
          </button>
        </div>                                

  <br></br>

        <div className={styles.cards}>
          <h2 className={styles.smallCard} />
          <button className={styles.contactCard} onClick={() => setButtonPopup(true)}>Reach Out</button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <div className={styles.subHeadCard}>
                <ContactForm />
              </div>
          </Popup>
          <h2 className={styles.smallCard} />
        </div>
        <br></br>

    </div>
    
  )
}

export default Services