import React from 'react'
import Style from './NavBar.module.css'
import {Link} from  'react-router-dom'
import LogoComponent from './LogoComponent'
import './LogoComponent.module.css'
const NavBar = () => {
  return (
    <div className={Style.navbarContainer}>
      <LogoComponent />
        <nav className={Style.navbarItems}>
          <ul>
          <li className={Style.navList}><Link to={"/"}>Home</Link></li>
            <li className={Style.navList}><Link to={"/individuals"}>Individuals</Link></li>
            <li className={Style.navList}><Link to={"/sponsors"}>Sponsors</Link></li>
            <li className={Style.navList}><Link to={"/about"}>About</Link></li>
            <li className={Style.navList}><Link to={"/contact"}>Contact</Link></li>
          </ul>
          <li className={Style.registerButton}><Link to={"/register"}>Register</Link></li>
        </nav>
    </div>
  )
}

export default NavBar
