import React from 'react'
import Button from '../utils/Button'
import style from './callbanner.module.css'

const CBanner = () => {
  return (
    <div className={style.main}>

        <p>See how other operations, inbound sales, account management, and support teams use Front →</p>

        <h2>Deliver exceptional service at scale</h2>

        <Button
          text={"Get Started"}
          size={"15px"}
          btnStyle={"SecondaryBtn"}
        />

    </div>
  )
}

export default CBanner