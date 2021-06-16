import * as React from 'react'
import {
  smileFace,
  greeting,
  introContent,
  introText,
  homePageContent,
  gridPattern
} from '../styles/index.module.css'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout >
      <div className={homePageContent}>
        <div className={gridPattern}></div>
        <div className={introContent}>
          <h1 id={greeting}>Hi,</h1>
          <div id={smileFace}>:)</div>
          <p className={introText}>I’m Lisa (Jialei) Wang, an electrical engineering student at UBC, aspiring fullstack developer, and an avid builder of IKEA furniture.</p>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage