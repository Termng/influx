import React from 'react'
import { convert1, convert2, arrowRightWhite } from '../../assets'
import style from './pricing.module.css'

const GradientBanner = () => {
  return (
    <div className={style.bluebg}>
        <div className={style.centerCardBFlex}>
            <h1>Customize to fit your workflows</h1>

            <div className={style.cardBFlex}>
                <div className={style.cardB}>
                    <div className={style.imgCont}>
                        <img src={convert1} alt="image" />
                    </div>
                    <h3>Telegram and Dialpad SMS have entered the chat: expand your channels without worsening app-switching burnout</h3>
                    <div className={style.arrow}>
                        <p>Read more</p>
                        <img src={arrowRightWhite} alt="arrowRight" width={20}/>
                    </div>
                </div>
                {/* ----------------------------- */}
                
                <div className={style.cardB}>
                    <div className={style.imgCont}>
                        <img src={convert2} alt="image" />
                    </div>
                    <h3>Manage all of your favorite apps, right within Influx. Stay in the same place and experience seamless integration</h3>
                    <div className={style.arrow}>
                        <p>See all Integrations</p>
                        <img src={arrowRightWhite} alt="arrowRight" width={20}/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default GradientBanner