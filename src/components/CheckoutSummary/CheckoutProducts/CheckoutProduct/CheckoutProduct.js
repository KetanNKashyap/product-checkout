import React from 'react';
import classes from './CheckoutProduct.css';

const checkedoutProduct = (props) => (
    <div className="CheckRow">
        
        <div className="CheckedoutProduct">{props.productName}: </div><div className="cResults">{props.productQty} nos.</div>
    </div>
)

export default checkedoutProduct;