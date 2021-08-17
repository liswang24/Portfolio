import * as React from 'react'
import Layout from '../components/layout'
import {
  aboutBody,
  aboutText,
  headshot
} from '../styles/about.module.css'
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => { 
  return (
    <Layout>
     <div className={aboutBody}>
        <StaticImage className={headshot} src="../images/lisa_headshot.jpeg" alt= "Lisa Wang Headshot"/> {/* TODO: ess with gatsby image plugin parameters */}
        <p className={aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non neque dignissim, volutpat nulla in, 
          scelerisque urna. Donec blandit, elit et auctor venenatis, nisi mi finibus ligula, sed pretium mauris quam venenatis diam. 
          Cras dapibus dolor et iaculis tempor. Phasellus dignissim mi nec mollis rhoncus. Donec at lorem sit amet odio finibus semper. 
          Aliquam laoreet maximus sem vitae commodo. Aliquam non luctus diam. Duis nec risus diam. Mauris sollicitudin risus at purus 
          hendrerit, et mollis neque dignissim. Cras dignissim lacinia libero, sed posuere libero vestibulum sit amet.</p>
     </div>
     {/* Future: Add skills section */}
    </Layout>
  )
}

export default AboutPage