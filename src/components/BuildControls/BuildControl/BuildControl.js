import React from 'react';
import * as classes from './BuildControl.css';

const buildControl = (props) => {
return <div className="BuildControl">
        <div className="bLabel">{props.label}</div>
        <input type="text" onChange={(e)=> props.productQtyChanged(e.target.value)}></input>
    </div>
}

export default buildControl;