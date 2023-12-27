import React from 'react'
import { prodfeatures } from '../../constants'
import style from './product.module.css'

const ProdFeatures = () => {
  return (
    <div className={style.main}>
      {prodfeatures.map((item) => (
        <div className={style.cards} key={item.headtext}>
          <div className={style.cardsText}>
            <h2 className={style.headtext}>{item.headtext}</h2>
            <p>{item.maintext}</p>
            <div className={style.ButtonFlex}>
              <button className={style.Buttons}>{item.Buttons}</button>
              <button className={style.Buttons2}>{item.Buttons2}</button>
            </div>
          </div>

          <div className={style.cardsImg}>
            <img src={item.imgURL} alt={item.imgURL} />
          </div>

        </div>

      ))}
    </div>
  )
}

export default ProdFeatures