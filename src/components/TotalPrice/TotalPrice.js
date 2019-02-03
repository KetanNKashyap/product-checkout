import React from 'react';
import classes from './TotalPrice.css';

const totalPrice = (props) => {
   return <div className="TotalPrice"> 
        <label >Total : ${Math.round(props.totalPrice * 100)/100}</label>
    </div>

}

export default totalPrice;