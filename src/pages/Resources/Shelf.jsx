import { frontline, rewind } from "../../assets";
import style from './shelf.module.css'

export function Shelf() {
  return (
    <div className={style.allShelves}>
        <Shelf1/>
        <MidShelf/>
        <Shelf2/>
      
    </div>
  );
}


export function Shelf1() {
  return (
    <div className={style.shelf1}>
        <h4 className={style.header} >INFLUX NEWS</h4>
        <h1 className={style.sub}>8 features we launched at Frontlines</h1>
        <div className={style.imgCont}><img src={frontline} alt="2023" /></div>
        <h3 className={style.deets}>Our inaugural Frontlines event was a huge success! Thanks for being a part of it. Here’s a recap of the main product launches — plus some bonus announcements.</h3>
        <p className={style.more}><a href="/">Read More</a></p>
    </div>
  );
}

export function MidShelf() {
  return (
    <div className={style.shelfCenter}>
        <div className={style.imgCent}><img src={rewind} alt="rewind" /></div>
        <h4 className={style.header} >INFLUX NEWS</h4>
        <h1 className={style.sub}>8 features we launched at Frontlines</h1>
        
        <h3 className={style.deets}>Our inaugural Frontlines event was a huge success! Thanks for being a part of it. Here’s a recap of the main product launches — plus some bonus announcements.</h3>
        <p className={style.more}><a href="/">Read More</a></p>
    </div>
  );
}







export function Shelf2() {
  return (
    <div className={style.superShelf}>
        <div className={style.shelf2}>
            <h4 className={style.header} >BUILD TEAM CULTURE</h4>
            <h1 className={style.sub2}>Influx makes the Forbes Cloud 100 list for the second year in a row</h1>
            <p className={style.more}><a href="/">Read More</a></p>
        </div>
        <div className={style.shelf2}>
            <h4 className={style.header} >WORK WITH INTENTION</h4>
            <h1 className={style.sub2}>AI is coming for the support industry — here are 5 ways your team needs to adapt</h1>
            <p className={style.more}><a href="/">Read More</a></p>
        </div>
        <div className={style.shelf2}>
            <h4 className={style.header} >WORK WITH INTENTION</h4>
            <h1 className={style.sub2}>Top 12 support KPIs for better customer service</h1>
            <p className={style.more}><a href="/">Read More</a></p>
        </div>
    </div>
  );
}

