import React from 'react'
import Button from '../../components/utils/Button'
import './Home.css'
import ReactPlayer from 'react-player';
import {Carousel, Feature, Slider, BestOption} from "../Home/sections/index"
import { Card1, Card2, Card3 } from './sections/OverviewCard';
import {SlideSliding } from './sections/Slider';



const subline = "Influx is a customer operations platform that enables teams to streamline communication and deliver exceptional service at scale."

const midline = "It’s not or. It’s and."

const midlineSub = "Choosing a customer communication solution is hard — but with Front, it’s not. Front is the only inbox built for collaboration, visibility, and efficiency at scale."




const Home = () => {
  return (
    <main>
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


     
        <h2 className='center-text'>A lot goes into keeping customers happy.
        Keep it all in Influx.</h2>
        <Feature/>

      <div className='section2'>
        <Button
          text={"Get Started"}
          size={"16px"}
          btnStyle={"PrimaryBtn"}
        />
        
        <h2 className='center-text-small'>8,000+ businesses choose Front for every customer conversation — from simple to complex</h2>
      </div>

      <Carousel/>


      <div className='section3'>
        <h2 className='gradient'>{midline}</h2>
        <h3>{midlineSub}</h3>
      </div>


      <div className='card-flex'>
        <Card1/>
        <Card2/>
        <Card3/>
      </div>


        <BestOption/>

        <div className='sideByside'>
          <div className='slideContainer'>
            <SlideSliding/>
            <SlideSliding/>
            <SlideSliding/>
            <SlideSliding/>
          </div>
        </div>

       
  

       















    </main>






  )
}

export default Home