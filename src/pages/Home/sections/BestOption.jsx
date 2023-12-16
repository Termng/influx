import React from 'react'
import { bestOption } from '../../../constants'

const BestOption = () => {
  return (
    <div className='BestOptionFlex'>
        <h2 className='gradient'>The Best from email and help desks</h2>

        <div className='bestMainFlex'>
            {bestOption.map((best)=> (
                <div
                    key={best.imgURL} 
                    className='bestCardsFlex' >
                    <div className='bestImg'>
                        <img 
                        src={best.imgURL} 
                        alt= {best.imgURL} />
                    </div>
                    <div className='text-group'>
                        <h3>{best.head}</h3>
                        <p>{best.Sub}</p>
                    </div>
                </div>
                
            ))}
        </div>

    </div>
  )
}

export default BestOption