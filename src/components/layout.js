import * as React from 'react'
import "@fontsource/inconsolata"
import '../styles/layout.module.css'
import Navbar from '../components/navbar'

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default Layout