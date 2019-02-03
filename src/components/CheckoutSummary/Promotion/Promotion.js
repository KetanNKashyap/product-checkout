import React from 'react'
import classes from './Promotion.css';

const promotion = (props)=>
{
   return  <div className="Promotion">
        <label>Promotion applied -> {props.promotion}</label>
    </div>
};

export default promotion;