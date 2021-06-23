import * as React from 'react'
import ContactForm from '../components/contactform'
import Layout from '../components/layout'
import {
    contactPageLayout,
    contactContent,
    contactHeader,
    contactEmail,
    contactForm,
    gridBackground,
    socialsLink,
    link
} from '../styles/contact.module.css'

import { StaticImage } from "gatsby-plugin-image"

const ContactPage = () => {
  return (
    <Layout >
      <div className={contactPageLayout}>
        <div className={gridBackground}></div>
        <div className={contactContent}>
            <h1 id={contactHeader}>Get in Touch</h1>
            <div>
                <h2>Socials</h2>
                <div className={socialsLink}>
                    <StaticImage src="../images/linkedinlogo.png" alt="GitHub Logo"/>
                    <a 
                        id={link}
                        href="https://www.linkedin.com/in/lisajialeiwang/" 
                        rel="noopener noreferrer" 
                        target="_blank"
                    >LinkedIn/lisajialeiwang</a>
                </div>
                <br />
                <div className={socialsLink}>
                    <StaticImage src="../images/githublogo.png" alt="LinkedIn Logo" />
                    <a 
                        id={link}
                        href="https://github.com/liswang24" 
                        rel="noopener noreferrer" 
                        target="_blank"
                    >GitHub/liswang24</a>
                </div>
            </div>
            <div id={contactEmail}>
                <h2 >Email</h2>
                <a id={link} href="mailto:liswang24@gmail.com">liswang24@gmail.com</a>
            </div>
            <ContactForm id={contactForm}/>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage