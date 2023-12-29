import React from 'react'
import style from './Resources.module.css'

const ResourcesHeader = () => {
  return (
    <div className={style.lowerNav}>
        <h1>Influx <span>Stories</span></h1>


        <ul>
            <li><a href="">Build Team Culture</a></li>
            <li><a href="">Connect with customers</a></li>
            <li><a href="">Work with intention</a></li>
            <li><a href="">Influx News</a></li>
        </ul>

    </div>
  )
}

export default ResourcesHeader