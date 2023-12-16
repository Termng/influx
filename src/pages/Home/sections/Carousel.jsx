import React from 'react'
import { slidingCarousel } from '../../../constants'

const Carousel = () => {
  return (
    <div className='clip'>
      <div className='slider'>
        {slidingCarousel.map((slides) => (
          <div  key={slides.company} >
            <img
            src={slides.icono} 
            alt={slides.company} 
            width={140}
            />
            
          </div>
        ))}
      </div>



    </div>
  )
}

export default Carousel