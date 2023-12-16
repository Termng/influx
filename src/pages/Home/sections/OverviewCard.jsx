import React from 'react'
import ReactPlayer from 'react-player';
import '../Home.css'
import { Videocards } from '../../../constants';




export function SmallCard({videoUrl, title, text}) {
  


  return (
    <div className='card-comp'>
      <div style={{maxWidth : 550, borderRadius: 15, overflow: 'hidden'}}>
        <ReactPlayer
          url= {videoUrl}
          width='100%'
          height='100%'
          playing ={true}
          loop ={true}
          controls = {false}
          muted= {true}
        />
      </div>

      <div className='card-text'>
        <h2>{title}</h2>
        <p>{text}</p>
        <a href="#">Learn More </a>
      </div>
    </div>
  );
}



export function Card1() {
  const first = Videocards[0];
  return (
    <div>
      <SmallCard
      videoUrl = "/videos/csat.mp4"
      title = {first.title1}
      text = {first.text1}
      
      />
    </div>
  );
}

export function Card2() {
  const second = Videocards[1];
  return (
    <div>
      <SmallCard
      videoUrl = "/videos/teams.mp4"
      title = {second.title2}
      text = {second.text2}

      
      />
    </div>
  );
}
export function Card3() {
  const third = Videocards[2];
  return (
    <div>
      <SmallCard
      videoUrl = "/videos/workload.mp4"
      title = {third.title3}
      text = {third.text3}

      
      />
    </div>
  );
}

