import { gse,csat, bugBounty } from "../../assets";
import style from './Resources.module.css'

export function FlexCards() {
  return (
    <div className={style.CardSide}>
        <Card1/>
        <Card2/>
        <Card3/>
      
    </div>
  );
}


export function Card1() {
  return (
    <div className={style.fullCard}>
      <div className= {style.articleImg}><img src={gse} alt={gse} /></div>
        <div className={style.textCard}>
            <h4>Front news</h4>
            <h2>Mathilde Collin Honored by Goldman Sachs for Entrepreneurship</h2>
            <h5>It’s been a big year for Front!</h5>
            <p><a href="/">Read More</a></p>
        </div>
    </div>
  );
}
export function Card2() {
  return (
    <div className={style.fullCard}>
      <div className= {style.articleImg}><img src={bugBounty} alt={bugBounty} /></div>
        <div className={style.textCard}>
            <h4>Front news</h4>
            <h2>Launching Influx’s Public Bug Bounty Program for software developers</h2>
            <h5>What’s next for Influx bug bounty program </h5>
            <p><a href="/">Read More</a></p>
        </div>
    </div>
  );
}
export function Card3() {
  return (
    <div className={style.fullCard}>
      <div className= {style.articleImg}><img src={csat} alt={csat} /></div>
        <div className={style.textCard}>
            <h4>Connect with customers</h4>
            <h2>How to achieve 100% CSAT and build a world-class support function</h2>
            <h5>A guide to raising your CSAT score...</h5>
            <p><a href="/">Read More</a></p>
        </div>
    </div>
  );
}