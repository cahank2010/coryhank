import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer,
         faChartLine,
         faProjectDiagram,
         faRoute,
         faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const strat = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>PROJECT MANAGEMENT Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.projectHeader}>PROJECT<br></br>MANAGEMENT</h1>
        
        <h2 className={styles.subhead1}>Professionalism and Experience for your important IT projects.</h2>
          <p className={styles.Body}>Apollo offers dedicated program and project managers, trained in Agile, Scrum and Six Sigma methodologies. 
            Our team delivers top notch service for your projects regardless of size, scope, or complexity. We have the experience and tools to manage 
            both your internal and external project resources, tracking deliverables, milestones, and key performance indicators in order to ensure your 
            project goes on-line, on time, and within budget. While no two projects are alike, we leverage our considerable experience to provide solutions 
            that ensure smooth and successful projects.<br></br></p>
        
        <h3 className={styles.subhead1}>Benefits of Outsourced IT Project Management</h3>
          <h5 className={styles.Body4}>Efficient:</h5>
            <p className={styles.Body5}>Utilizing an experienced project manager will help you stay on budget and on schedule. Without the knowledge 
            and experience required for IT project management, you could be looking at cost over runs, unexpected delays and security holes as your internal 
            resources learn on the job.</p> 
          <h5 className={styles.Body4}>Effective:</h5>
            <p className={styles.Body5}>Keep your business running smoothly and free of added stress. We handle the planning and co-ordination 
            so your key staff can stay focused on their daily responsibilities. Having an outside perspective also provides the advantage of 
            objectivity, because office politics, relationships, and personal attachments to a project can cause delays and slow your progress.</p>
          <h5 className={styles.Body4}>Effective:</h5>
            <p className={styles.Body5}>Whether adding functionality, improving collaboration or completely overhauling your network, success will 
            require that any new system is secured. Each step of your project will include security oversight to protect your business and clients 
            as your new technology is implemented.</p>
        
        <h4 className={styles.subhead1}>What types of Projects does Apollo manage?<br></br></h4>
            <p className={styles.Body3}>
              <ol>
                <li>IT Infrastructure: Design and upgrade networks, servers, computers, firewalls, WiFi, VPN and related hardware and software</li>
                <li>Cloud Migration and Support: Setup of cloud infrastructure, platform and software, data migration to cloud platform</li>
                <li>E-mail Migration: Setup e-mail platform of chosen provider and migrate data to Microsoft Office 365, Exchange and G-Suite</li>
                <li>Office or Location Setup: New office design and build, franchise setup, relocation management</li>
                <li>Security and Network Assessments: Network security assessments, risk assessments and compliance assessments</li>
                <li>Web Development: Website design, development, e-commerce solutions, site management and hosting</li></ol></p>

        <Link href="/contact">
          <button className={styles.collapsible}>FIND OUT MORE</button>
        </Link> 


    </div>
  )
}

export default strat