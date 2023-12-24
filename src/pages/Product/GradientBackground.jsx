import React from 'react';
import style from './product.module.css';
import { grd2 } from '../../assets/index';
import { reviewsGradient } from '../../constants';

const GradientBackground = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${grd2})`, backgroundSize: 'cover', minHeight: '600px' }}>
        <h2>Be it Support, Success or finance, B2B teams use Influx to build lasting relationships</h2>


        <div className={style.mainflex}>
            {reviewsGradient.map((item) => (
                <div className={style.boxflex}> 
                    <p className={style.review} >{item.review}</p>
                    <p className={style.reviewee} >{item.name}</p>
                </div>
            ))}
        </div>


      </div>
    </div>
  );
};

export default GradientBackground;
