import React from 'react'
import style from '../Footer/Footer.module.css'
import { footerlinks } from '../../constants'

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
                <li key={link.name}> <a href={link.link}> {link.name}</a></li>
              ))}
            </ul>


          </div>
        )) }

      </footer>
  )
}

export default Footer