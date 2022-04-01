import React from 'react'
import styles from '../styles/Home.module.css'

const Layout = ({ children }) => {
  return (
    <div>
        {children}

        <footer className={styles.footer}>
            Footer
        </footer>
    </div>
  )
}

export default Layout