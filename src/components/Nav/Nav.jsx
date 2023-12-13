import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import {logo, hamburger} from '../../assets/index'
import { navNav } from "../../constants/index"
import style from './Nav.module.css'
import Button from '../utils/Button'



const Nav = () => {
  return (
    <nav>
        <div className={style.nav}>

          <Link to='/home'>
            <img
            src={logo}
            alt="hello logo"
            width={120}
            />
          </Link>
          
 
            <ul className={style.navClass}>
              {navNav.map ((navItems) => (
                <li key={navItems.name}>
                  <NavLink to = {navItems.link}>
                    {navItems.name}
                  </NavLink>
                </li>
            ))}
            </ul>

            <div className={style.signIn}>
              <a className={style.sign} href="/">Sign in</a>
              <Button text="Get Started" size = "15px"/>
            </div>


            <div>
              <img
                  className={style.hamburger}
                  src={hamburger}
                  alt="hamburger icon"
                />
            </div>

      

          </div>
               

    </nav>
  )
}

export default Nav