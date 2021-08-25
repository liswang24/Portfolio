import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  greeting,
  introContent,
  introText,
  homePageContent,
  gridPattern
} from '../styles/index.module.css'
import { StaticImage } from "gatsby-plugin-image"
import Navigation from'../components/navigation'

const IndexPage = () => {
  return (
    <main>
      <Navigation />
      <div className={homePageContent}>
        <div className={gridPattern}></div>
        <div className={introContent}>
          <div className={introText}>
            <h1 id={greeting}>Hi,</h1>
            <p>I’m Lisa (Jialei) Wang, an electrical engineering student at UBC, aspiring fullstack developer, and an avid builder of IKEA furniture.</p>
          </div>
          <StaticImage src="../images/laptop.png" alt="Computer Icon" layout="fixed"/>
        </div>
      </div>
    </main>
  )
}
export default IndexPage