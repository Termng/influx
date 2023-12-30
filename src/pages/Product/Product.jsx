import React from 'react'
import style from './product.module.css'
import Button from '../../components/utils/Button'
import {clip5, circle2, clip2, clip3} from '../../assets/index'
import Step from './Step'
import Brands from './Brands'
import GradientBackground from './GradientBackground'
import ProdFeatures from './ProdFeatures'
import WiggleLogo from './WiggleLogo'
import CBanner from '../../components/Banner/CBanner'
import transition from '../../Transition'



const Product = () => {
  return (
    <div>
      <div className= {style.center}>
        <div className={style.hero}>
          <div className={style.circle}>
            <img src={circle2} alt="circle" />
          </div>

          <div className={style.top}>
            <h1 className='gradient'>Turn Conversations into Customers for life</h1>
            <p>Influx helps technology teams to work together to seamlessly deliver an unforgettable customer experience</p>
            <Button text={"Get Started"} size={"12px"} btnStyle={"PrimaryBtn"}/>
          </div>
          
          
          <div className={style.clipart}>
            <img src={clip5} alt="clipart" />
          </div>
        </div>
      </div>
      <Step/>
      <Brands/>
      <GradientBackground/>

      <div className={style.overlay}>
        <ProdFeatures/>
        <img src={clip2} className={style.backgroundImg} alt="clip art of a girl sitting" />
        <img src={clip3} className={style.backgroundImg2} alt="clip art of a girl sitting" />
      </div>
      <WiggleLogo/>

      <CBanner/>  






    </div>
    




  )
}

export default transition(Product)