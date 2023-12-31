import React from 'react'
import { Carvana, Spotify, Tesla, Torah } from '../../../assets';
import style from './Slider.module.css'
import { arrowRight } from '../../../assets';


export function SlideSliding() {
  return (
    <div className={style.animSlide}>
      <Slide1/>
      <Slide2/>
      <Slide3/>
     
    </div>
  );
}




export function Slide1() {
  return (
    <div className={style.slide1}>
      <div className={style.img} >
        <img
        src={Tesla}
        alt="Tesla Logo" />
      </div>

      <div className={style.textGroup}>
        <h2 className='gradient'>2x</h2>
        <h3>FASTER</h3>
      </div>

      <p>“Influx has helped us respond to our customers twice as fast. Customers rate us 4.7/5 stars for our support.”</p>

      
    </div>
  );
}

export function Slide2() {
  return (
    <div className={style.slide2}>
      <div className={style.textMain} >
        <p className='gradient'>“Influx has been a game-changer for us in the way we work internally. Having good communication and prompt customer support is crucial.”</p>
        
      </div>


      <div className={style.imgName}>
        <div className={style.torah}>
          <img src={Torah} alt="Torah Felix" />
        </div>
        <div className={style.text2}>
          <h2>Torah Felix</h2>
          <h3>Engineering VP Spotify</h3>
        </div>
      </div>

      <img src={Spotify} alt="Spotify Logo" />


     
    </div>
  );
}

export function Slide3() {
  return (
    <div className={style.slide3}>
      <img 
      src={Carvana} 
      alt="Spotify Logo"
      width={200}
      
      />

      <h1 className ='gradient'>482%</h1>

      <div className={style.textMain3} >
        <p>“Influx has been a game-changer for us in the way we work internally. Having good communication and prompt customer support is crucial.”</p>
        
      </div>


      
    </div>
  );
}