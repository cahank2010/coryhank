import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '/src/pagestyle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer,
         faChartLine,
         faProjectDiagram,
         faRoute,
         faShieldAlt, 
         faUserShield,
         faGaugeSimpleHigh,
         faEye,
         faBrain,
         faHandHoldingDollar,
         faPhone,
         faMagnifyingGlass,
         faGears,
         faLockOpen,
         faGear,
         faArrowRotateForward} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, 
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'


const approach = () => {
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
            <h2 className={styles.largeCard}>At Apollo, all our service and support offerings are designed to maximize efficiencies, enable scaleability, 
            and most of all, support your business needs.
            <br></br><br></br>
            We deploy strategic concepts derived from five basic core fundamentals.</h2>
      <h3 className={styles.divideCard}></h3>

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
    <br></br>

  </div>
  )
}

export default approach