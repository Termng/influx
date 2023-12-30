import React from 'react'
import ResourcesHeader from './ResourcesHeader'
import {sit, sit2} from '../../assets/index'
import style from './Resources.module.css'
import { Shelf } from './Shelf'
import Speaker from './Speaker'
import Podcast from './Podcast'
import { FlexCards } from './Articles'
import CBanner from '../../components/Banner/CBanner'

const Resources = () => {
  return (
    <div>
      <ResourcesHeader/>
      <div>
        <div className={style.topLevel}>
          <img src={sit} alt="clip art" width={350} />

          <div className={style.headForm}>
            <h2>Stories that focus on building stronger customer relationships</h2>
            <form action="">
              <div className={style.form}>
                <input type="text" placeholder='Your email address' />
                <label htmlFor="/404">Subscribe</label>
              </div>
            </form>
          </div>

          <img src={sit2} alt=" clip art" width={300}  />
        </div>
      </div>
      <Shelf/>
      <Speaker/>
      <FlexCards/>
      <Podcast/>
      <CBanner/>
      




    </div>
  )
}

export default Resources