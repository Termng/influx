import React from 'react'
import { features } from '../../../constants'

const Feature = () => {
  return (
    <div className='feature'>
      {features.map((feature) => (
      <div key={feature.title} className='category'>
        <div className= 'featureIcon'>
          <img src={feature.icon} alt={feature.title} />
        </div>
        <p>{feature.title}</p>

      </div>
      ))}

        







    </div>
  )
}

export default Feature