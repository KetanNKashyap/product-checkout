import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => (
  <div>
        <div className="BuildControls">
          {Object.keys(props.products).map(key => (
            <BuildControl 
                key={props.products[key].pid}
                label={`${props.products[key].pid} ($${props.products[key].price} per unit)` }
                productQtyChanged={(inputValue) => props.productQtyChanged(props.products[key].pid, inputValue)}
            />
        ))}
        </div>
        <div>
          <button className="CheckoutButton" onClick={props.checkout}>Proceed to Checkout</button>
        </div>
  </div>
);

export default buildControls;