import React from 'react'
import ReactPlayer from 'react-player';
import style from './product.module.css'


const WiggleLogo = () => {
  return (
    <div className={style.wiggleHead}>
      <h1 className='gradient'>Integrate your favourite apps</h1>
      <p className={style.wiggleText}>Sync customer data, manage tasks, and connect every message with Front</p>
        <div className={style.middle_box}>
            <ReactPlayer
              className={style.middle}
              url= "/videos/logo.mp4"
              width='100%'
              height='100%'
              playing ={true}
              loop ={true}
              controls = {false}
              muted= {true}
            />
          </div>

    </div>
  )
}

export default WiggleLogo