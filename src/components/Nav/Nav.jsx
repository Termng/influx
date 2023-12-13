import React, { useState } from 'react'
import {Link, NavLink } from 'react-router-dom'
import {logo, hamburger} from '../../assets/index'
import { navNav } from "../../constants/index"
import './Nav.css'
import Button from '../utils/Button'



const Nav = () => {
  const [menuOpen, setmenuOpen] = useState(false)

  return (

    <nav>

          <Link to='/home'>
            <img src={logo} alt="hello logo"width={120}/> 
          </Link>
        
          <div 
          className='hamburger'
          onClick={()=> {
            setmenuOpen(!menuOpen)
          }}
          >
            <img src={hamburger} alt="" />
          </div>

          <ul className={menuOpen? "open": ""}>
            {navNav.map ((navItems) => (
              <li key={navItems.name}>
                <NavLink to = {navItems.link}>
                  {navItems.name}
                </NavLink>
              </li>
          ))}
          </ul>


          <div className= "signIn">
            <a className="sign" href="/">Sign in</a>
            <Button text="Get Started" size = "15px"/>
          </div>
         
    </nav>

            
  )
}

export default Nav