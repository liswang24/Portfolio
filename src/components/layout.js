import * as React from 'react'
import "@fontsource/inconsolata"
import {
  pageLayout,
  pageContent,
  gridBackground
} from '../styles/layout.module.css'
import Navbar from '../components/navbar'

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className={pageLayout}>
        <div className={gridBackground}></div>
        <div className={pageContent}>{children}</div>
      </div>
    </main>
  )
}

export default Layout