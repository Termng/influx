import React from 'react'
import { StepGrid } from '../../constants'
import style from './product.module.css'

const Step = () => {
  return (
    <div>
        <div className= {style.flex}>
            {StepGrid.map((item) => (
                <div className={style.flexChild}>
                    <img src={item.imgURL} alt={item.imgURL} width={70}/>
                    <p className={style.head}>{item.headText}</p>
                    <p className={style.subtext}>{item.subtext}</p>
                    <p className={style.subtext2}>{item.subtext2}</p>
                </div>
            ))}
        </div>




    </div>
  )
}

export default Step