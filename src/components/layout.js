import * as React from 'react'
import "@fontsource/inconsolata"
import {
  pageLayout,
  pageContent,
  gridBackground,
} from '../styles/layout.module.css'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Layout = ({ children }) => {
  return (
    <main>
      <Navigation />
      <div className={pageLayout}>
        <div className={gridBackground}></div>
        <div className={pageContent}>{children}</div>
      </div>
      <Footer />
    </main>
  )
}

export default Layout