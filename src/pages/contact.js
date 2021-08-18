import * as React from 'react'
import ContactForm from '../components/contactform'
import Layout from '../components/layout'
import {
    contactContent,
    contactHeader,
    contactEmail,
    contactForm,
    socialsLink,
    link,
    credentials
} from '../styles/contact.module.css'

import { StaticImage } from "gatsby-plugin-image" // TODO: Update to use Gatsby Image use the faster load thing?

const ContactPage = () => {
  return (
    <Layout >
      <div className={contactContent}>
        <h1 id={contactHeader}>Get in Touch</h1>
        <div>
          <h2>Socials</h2>
          <div className={socialsLink}>
            <StaticImage src="../images/logos/linkedin.png" alt="GitHub Logo"/>
            <a 
              id={link}
              href="https://www.linkedin.com/in/lisajialeiwang/" 
              rel="noopener noreferrer" 
              target="_blank"
            >LinkedIn/lisajialeiwang</a>
          </div>
          <br />
          <div className={socialsLink}>
            <StaticImage src="../images/logos/github.png" alt="GitHub Logo" />
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
      <div className={credentials}>
        Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </Layout>
  )
}
export default ContactPage