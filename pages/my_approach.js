import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Popup from './popup'
import { useState } from 'react';
import ContactForm from './ContactForm'
import styles from '/src/pagestyle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer} from '@fortawesome/free-solid-svg-icons'


const my_approach = () => {
  const [isSent, setIsSent] = useState(false)
  const [buttonPopup, setButtonPopup] = useState(false); /*button trigger*/

  return (
    <div className={styles.bkImg}>
      <Head>
        <title>My Approach</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.approachHeader}>My<br></br>Approach</h1>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h1 className={styles.subHeadCard}>FOCUSED ON SECURITY, SCALABILITY, & GROWTH.</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>I enjoy tailoring my approach and creating a warm, welcoming environment for work with 
            clients who have a variety of concerns that may lead them to seek counseling including anxiety, depression, trauma, identity 
            development, LGBTQ+ concerns, adjustment to new life stressors, stress management, grief and loss, body image concerns, and 
            working with those who are going through the process for bariatric surgery, or are adjusting to the post-operative lifestyle. 
            I also provide bariatric surgery evaluations that many programs require prior to surgery.</h2>

            <h2 className={styles.largeCard}>I use an integrative approach to counseling, which includes cognitive behavioral therapy, self-compassion, and acceptance and 
            commitment therapy. My approach is collaborative, warm, and nonjudgmental. If this seems to match your needs and what you are 
            looking for, please give me a call, so we can begin helping you grow and thrive in your daily life.</h2>
      <h3 className={styles.divideCard}></h3>

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

  </div>
  )
}

export default my_approach