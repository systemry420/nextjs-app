import Link from 'next/link'
import React from 'react'
import navStyles from '../styles/Nav.module.css'

const Navbar = () => {
  return (
    <div>
        <ul className={navStyles.nav}>
            <li className={navStyles.link}>
                <Link href={'/'}>Home</Link>
            </li>
            <li className={navStyles.link}>
                <Link href={'/about'}>About</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar