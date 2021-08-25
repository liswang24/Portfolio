import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  smileFace,
  greeting,
  introContent,
  introText,
  homePageContent,
  gridPattern
} from '../styles/index.module.css'
// import Navbar from '../components/navbar'
import { StaticImage } from "gatsby-plugin-image"
import Navigation from'../components/navigation'

const IndexPage = () => {
  return (
    <main>
      <Navigation />
      <div className={homePageContent}>
        <div className={gridPattern}></div>
        <div className={introContent}>
          <h1 id={greeting}>Hi,</h1>
          <div id={smileFace}>:)</div>
          <p className={introText}>I’m Lisa (Jialei) Wang, an electrical engineering student at UBC, aspiring fullstack developer, and an avid builder of IKEA furniture.</p>
        </div>
      </div>
    </main>
  )
}
export default IndexPage