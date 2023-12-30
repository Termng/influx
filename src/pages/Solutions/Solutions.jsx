import React from 'react'
import { sChat } from '../../assets'
import style from './solution.module.css'
import CBanner from '../../components/Banner/CBanner'
import { automation } from '../../constants'
import Desk from './Desk'
import Testimonial from './Testimonial'
import GradientBanner from '../Pricing/GradientBanner'
import transition from '../../Transition'

const Solutions = () => {
  return (
    <div>
      <div className ={style.hero}>
        <div className={style.heroText}>
          <h4>Front for Technology</h4>
          <h1>Ditch your legacy help desk solution</h1>
          <p>Front is a customer operations platform that offers the power of a help desk without the headaches — easier to use, better collaboration experience, and happier customers.</p>
          <form action="">
              <div className={style.form}>
                <input type="email" placeholder='Your email address' />
                <label htmlFor="/404">Get Started</label>
              </div>
          </form>
          </div>

          {/* -------------- */}
        <div className={style.heroImage}>
          <img src={sChat} alt="a screenshot of an admin dashboard" />
        </div>

      </div>

      <div className={style.certifiedFlex}>
        {automation.map((aut) => (
          <div className={style.certified} key={aut.head}> 
            <img src={aut.imgURL} alt={aut.imgURL} />
            <h2>{aut.head}</h2>
            <p>{aut.deeets}</p>

          </div>
        ))}
      </div>


      <Testimonial/>
      <GradientBanner/>
      <Desk/>
      <CBanner/>
    </div>
  )
}

export default transition(Solutions)