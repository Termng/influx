import React from 'react'
import { Carvana, WizardPins, Hootsuite } from '../../assets'
import style from './product.module.css'


const Brands = () => {
  return (
    <div className={style.logos}>
        <img src={Carvana} alt="" width={180} />
        <img src={WizardPins} alt="" width={180} />
        <img src={Hootsuite} alt="" width={180} />
    </div>
  )
}

export default Brands