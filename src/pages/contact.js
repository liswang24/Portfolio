import * as React from 'react'
import ContactForm from '../components/contactform'
import Layout from '../components/layout'
import {
    contactContent,
    contactInfo,
    socialsLinkItem,
    socialsLinks,
    link
} from '../styles/contact.module.css'
import { StaticImage } from "gatsby-plugin-image"

const ContactPage = () => {
  return (
    <Layout >
      <div className={contactContent}>
        <div id={contactInfo}>
          <div> 
            <h2>Socials</h2>
            <div id={socialsLinks}>
              <div class={socialsLinkItem}>
                <StaticImage src="../images/logos/linkedin.png" alt="GitHub Logo"/>
                <a 
                  id={link}
                  href="https://www.linkedin.com/in/lisajialeiwang/" 
                  rel="noopener noreferrer" 
                  target="_blank"
                  >LinkedIn/lisajialeiwang</a>
              </div>
              <div class={socialsLinkItem}>
                <StaticImage src="../images/logos/github.png" alt="GitHub Logo" />
                <a 
                  id={link}
                  href="https://github.com/liswang24" 
                  rel="noopener noreferrer" 
                  target="_blank"
                  >GitHub/liswang24</a>
              </div>
            </div>
          </div>  
          <div>
            <h2 >Email</h2>
            <a id={link} href="mailto:liswang24@gmail.com">liswang24@gmail.com</a>
          </div>  
        </div>
        <ContactForm />
      </div>
    </Layout>
  )
}
export default ContactPage