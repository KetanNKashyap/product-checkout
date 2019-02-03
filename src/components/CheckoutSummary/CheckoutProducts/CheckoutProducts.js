import React from 'react';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'

const checkoutProducts = (props) => {
    return (
            
                Object.keys(props.checkoutProducts).map(productKey => (
            <CheckoutProduct productName={props.checkoutProducts[productKey].pid} productQty={props.checkoutProducts[productKey].qty} />
        ))

    );
}

export default checkoutProducts;