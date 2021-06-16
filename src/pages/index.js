import * as React from 'react'
import {
  smiley,
  hi,
  intro,
  introduction
} from '../styles/index.module.css'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout >
        <div>
          <div className={intro}>
            <h1 id={hi}>Hi,</h1>
            <div id={smiley}>:)</div>
            <p className={introduction}>I’m Lisa (Jialei) Wang, an electrical engineering student at UBC, aspiring fullstack developer, and an avid builder of IKEA furniture.</p>
          </div>
        </div>
    </Layout>
  )
}
export default IndexPage