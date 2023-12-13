import React from 'react'
import Button from '../../components/utils/Button'
import './Home.css'
import ReactPlayer from 'react-player';

const subline = "Influx is a customer operations platform that enables teams to streamline communication and deliver exceptional service at scale."




const Home = () => {
  return (
    <div className='hero-content'>

      <div className='main-text'>
        <h1>Built for <span className='gradient'>teams </span>that build customer <span className='gradient'> relationships !</span></h1>
        <h3>{subline}</h3>
      </div>

      <Button text={"Get Started"} size={"20px"} btnStyle = "SecondaryBtn"/>

      <div className='player-wrapper'>
          <ReactPlayer
            className='react-player fixed-bottom'
            url= "/videos/product-overview.mp4"
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

export default Home