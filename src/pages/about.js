import * as React from 'react'
import Layout from '../components/layout'
import {
  aboutBody,
  aboutText,
  link
} from '../styles/about.module.css'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const AboutPage = () => { 
  return (
    <Layout>
     <div className={aboutBody}>
        <StaticImage src="../images/LisaHeadshot.jpg" alt= "Lisa Wang Headshot"/>
        <div className={aboutText}>
          <h2>Hello and nice to meet you!</h2>
          <p>My name is <mark>Lisa</mark>. I am an aspiring <mark>full-stack developer</mark> based in Vancouver, Canada.</p>
          <p>I am currently returning to my fourth year of electrical engineering at the <mark>University of British Columbia</mark> in the biomedical option. I have previously completed firmware engineering co-op work terms at <mark>Intel Corporation</mark> and have spent this past summer developing some <Link to="/projects" id={link}>personal projects</Link> and self-learning front-end skills and programming languages.</p> 
          <p>In my free time, I like to enjoy sunny days on the beach, easy hikes, picking up new hobbies, and fiddling with personal projects.</p> 
          <p>Additionally, I am currently <mark>seeking a 4-month January 2022 co-op work term</mark> opportunities to further grow my software skill set.</p>
        </div>
     </div>
     {/* Future TODO: Add skills section */}
    </Layout>
  )
}

export default AboutPage