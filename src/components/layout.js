import * as React from 'react'
import "@fontsource/inconsolata"
import {
  pageLayout,
  pageContent,
  gridBackground,
  credentials
} from '../styles/layout.module.css'
import Navigation from '../components/navigation'

const Layout = ({ children }) => {
  return (
    <main>
      <Navigation />
      <div className={pageLayout}>
        <div className={gridBackground}></div>
        <div className={pageContent}>{children}</div>
      </div>
      <div className={credentials}>
        Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </main>
  )
}

export default Layout