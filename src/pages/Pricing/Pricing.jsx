import React from 'react'
import style from './pricing.module.css'
import { pricingBlock } from '../../constants'
import { check } from '../../assets'
import { MainGrid } from '../Pricing/AddOns'
import Cbanner from '../../components/Banner/CBanner'


const Pricing = () => {
  return (
    <div>
      <h1 className={style.head}>Choose your plan to deliver exceptional service</h1>
      <div className={style.main}>
        {pricingBlock.map((item)=> (
          <div key={item.planName} className={style.card}>
            <div className={style.tierImg}>
              <img src={item.imgURL} alt={item.imgURL} />
            </div>

            <div className={style.title}>
              <h2>{item.planName}</h2>
              <h3>{item.planDetails}</h3>
            </div>

            <div>
              <div className={style.price}>
                <h3>{item.price}</h3>
                <h4>USD</h4>
                <p>/seat/mo</p>
              </div>
              <p className={style.duration}>{item.duration}</p>
            </div>

            <div>
              <button className={style.cta}>{item.cta}</button>
            </div>

            <ul className={style.prodUl}>
              {item.planList.map((all) => (
                <div className={style.prodList}>
                  <img src={check} alt="checkmark" width={15} />
                  <li>{all.list}</li>
                </div>
                
              ))}
            </ul>
          </div>
        ))}
      </div>

      <MainGrid />
      <Cbanner />
    </div>
  )
}

export default Pricing