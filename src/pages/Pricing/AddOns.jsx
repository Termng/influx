import {gchat,wchat,wapp,tgram} from '../../assets/index'
import style from './pricing.module.css'



export function MainGrid() {
  return (
    <div className={style.center}>
      <h2>Personalize your plan with add-ons</h2>
      <div className={style.grid}>
       <Gbusiness className = {style.one}/>
       <Wgram className = {style.two}/>
       <Telegram className = {style.three}/>
      </div>
       <Whatsapp className = {style.one}/>
    </div>
  );
}



export function Wgram() {
  return (
    <div className={style.flexGr}>
      <img src={wchat} alt="we Chat" width={55} style={{borderRadius : '50px'}}/>
      <div>
        <h2>Dialpad SMS</h2>
        <p>for $100/month</p>
        <p className={style.deets}>Integrate Dialpad to text with customers right from your inbox.</p>
      </div>
     
    </div>
  );
}

export function Gbusiness() {
  return (
    <div className={style.flexGr}>
      <img src={gchat} alt="google messages" width={55} />
      <div>
        <h2>Google Business Messages</h2>
        <p>for $100/month</p>
        <p className={style.deets}>Easily respond to customers who find your business profile on Google Search or Maps.</p>
      </div>
     
    </div>
  );
}


export function Telegram() {
  return (
    <div className={style.flexGr}>
      <img src={tgram} alt="Telegram" width={55}/>
      <div>
        <h2>Telegram</h2>
        <p>for $100/month</p>
        <p className={style.deets}>Connect a Telegram bot as a channel to manage conversations in Influx.</p>
      </div>
    </div>
  );
}

export function Whatsapp() {
  return (
    <div className={style.flexGr2}>
      <img src={wapp} alt="Whatsapp" width={55}/>
      <div>
        <div className={style.wa_flex}>
          <h2>Whatsapp</h2>
          <p className={style.duration}>for $100/month</p>
        </div>
        <p className={style.deets}>Quickly respond to WhatsApp messages alongside other customer communication.</p>
      </div>
     
    </div>
  );
}


