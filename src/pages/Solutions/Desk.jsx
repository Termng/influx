import React from 'react'
import style from './solution.module.css'
import { desk } from '../../constants'


const Desk = () => {
  return (
    <div className= {style.flexColumn}>
        {desk.map((item) => (
            <div key={item.deets}>
                <h2>{item.category}</h2>
                <div className={style.detailsFlex}>
                    {item.deets.map((details)=> (
                        <div className={style.details} key={details.feature}>
                            <img src={details.icon} alt={details.icon} width={30}/>
                            <p>{details.feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Desk