import React from 'react'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar />
        
        {children}

        <footer className={styles.footer}>
            Footer
        </footer>
    </div>
  )
}

export default Layout