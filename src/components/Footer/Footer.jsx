import React from 'react'
import style from '../Footer/Footer.module.css'
import { footerlinks } from '../../constants'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    
      <footer
      key={footerlinks.footerCategory} 
      
      className = {style.footerFlex}>
        {footerlinks.map((foot)=> (
          <div>
            <h3 className = {style.footerhead}>{foot.footCategory}</h3>

            <ul className = {style.footerUl}>
              {foot.links.map((link) => (
                <li key={link.name}> 
                  <Link to ={link.link}> {link.name}
                  
                  </Link>
                </li>
              ))}
            </ul>


          </div>
        )) }

      </footer>
  )
}

export default Footer