import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Popup from './popup'
import { useState } from 'react';
import ContactForm from './ContactForm'
import styles from '/src/pagestyle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const my_background = () => {
    const [isSent, setIsSent] = useState(false)
    const [buttonPopup, setButtonPopup] = useState(false); /*button trigger*/

  return (
    <div className={styles.bkImg}>
      <Head>
        <title>My Background</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.aboutHeader}>About<br></br>Me</h1>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}/>
      <h1 className={styles.subHeadCard}>Kind, Tailored Approach.</h1>
      <h1 className={styles.smallLine}/>
          <h2 className={styles.largeCard}>
            I use an integrative approach to counseling, which includes cognitive behavioral therapy, self-compassion, and acceptance and 
            commitment therapy. My approach is collaborative, warm, and nonjudgmental, to create welcoming environment for work with clients 
            who have a variety of concerns that may lead them to seek counseling, including:</h2>
    </div>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}/>
      <div className={styles.dubCards}>
        <h2 className={styles.servSmallCard}>
          <ul>
            <li>Anxiety</li>
            <li>Depression</li>
            <li>Trauma & PTSD</li>
            <li>Grief & Loss</li>
            <li>Relationship Issues</li>
            <li>Divorce</li>
            <li>Obsessive-Compulsive (OCD)</li>
          </ul>
        </h2>
        <h2 className={styles.servSmallCard}>
          <ul>
            <li>Stress Management</li>
            <li>Coping Skills</li>
            <li>Self Esteem</li>
            <li>Body Image Concerns</li>
            <li>Identity Development</li>
            <li>LGBTQ+ Concerns</li>
            <li>Sexuality</li>
          </ul>
        </h2>
      </div>
      </div>
      <br />
    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}/>
          <h2 className={styles.largeCard}>
            **I also provide bariatric surgery evaluations that many programs require prior to surgery.</h2>
          <h2 className={styles.largeCard}>
            If this seems to match your needs and what you are 
            looking for, please reach out, so I can begin helping you to grow and thrive in your daily life.</h2>
    </div>
    <br />

    <div className={styles.singleCards}>
      <h1 className={styles.smallLine}/>
      <h1 className={styles.subHeadCard}>Experience built on trust.</h1>
      <h1 className={styles.smallLine}/>
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
          <div className={styles.imgCards}>
            <h2 className={styles.headshotCard}>
              <img className={styles.servImg} src="./crystal.jpeg" alt="Crystal"></img>
              <a className={styles.aServStyle}>
                Dr. Crystal Hank
              </a>
              <p className={styles.pServStyle}>
                (she/her/hers)
                <br /><br />
                Licensed Psychologist, Owner
              </p>
            </h2>
        </div>
    </div>
    <br /><br />

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
    <br />

  </div>
  )
}

export default my_background