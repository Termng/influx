import React from 'react'
import { podcastPic } from '../../assets'
import style from './Resources.module.css'
import { episode } from '../../constants'


const Podcast = () => {
  return (
    <div className={style.darkBlue} >

        <div className={style.side}>
            <div className={style.speaker}>
                <h3>Podcast</h3>
                <img src={podcastPic} alt="Podcast" />
                <p>Episode 8: In this episode, Mathilde sits down with DocuSign CEO Dan Springer to hear his journey towards becoming a low ego leader and how that impacts the team and business for the better.</p>
            </div>
            <div className={style.episode}>
                <h3>Episode List</h3>
                <div>
                    <div>
                        {episode.map((ep =>(
                            <div className={style.epiCard} key={ep.ep}>
                                <h4>{ep.ep}</h4>
                                <h1>{ep.title}</h1>
                                <div className={style.readMore}>
                                    <p className={style.whiteLink}><a href="/">Watch</a></p>
                                    <p className={style.orangeLink}><a href="/">Open</a></p>
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        </div>




    </div>
  )
}

export default Podcast