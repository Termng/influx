import React from 'react'
import ReactPlayer from 'react-player';
import style from './404.module.css'


const FourOhFour = () => {
  
  return (
    <div>
      <div className={style.flex404}>
        <h1 className='gradient'>Sorry, this Page's Coordinates are Lost in the Space-Time Continuum</h1>
        <div className= {style.vidWrap}>
              <ReactPlayer
                className={style.four}
                url= "/videos/4042.mp4"
                width='100%'
                height='100%'
                playing ={true}
                loop ={true}
                controls = {false}
                muted= {true}
              />
            </div>
      </div>
    </div>
  )
}

export default FourOhFour