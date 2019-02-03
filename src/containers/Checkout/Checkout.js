import React, { Component } from 'react';

import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        checkedProducts: null,
        totalPrice: 0.0,
        promotionRules:null,
        products:null
    }

    componentWillMount () {
        const query = new URLSearchParams( this.props.location.search );
        const products = {};
        let price = 0;
        for ( let param of query.entries() ) {
                products[param[0]] = +param[1];
        }
        this.setState( { checkedProducts: products, totalPrice: price } );
    }

    componentDidMount () {
        const promotionRules = [
            {TYPE:"high_worth_purchase", PROMO_CODE:"RRD4D32", "VALUE": 1000, "DISCOUNT_PERCENT": 10}
           ,{TYPE:"high_worth_purchase", PROMO_CODE:"F444T11", "VALUE": 1500, "DISCOUNT_PERCENT": 15}
           ,{TYPE:"bulk_purchase", PROMO_CODE:"FF9543D1", "PRODUCT": "docgen", "BULK_QTY": 10, "NEW_PRODUCT_PRICE": 8.99}
           ,{TYPE:"min_purchase", PROMO_CODE:"YYGWKJD", "PRODUCT": "wf", "MIN_QTY": 1, "TARGET_PRODUCT": "form", "NEW_TARGET_PRODUCT_PRICE": 89.99}
        ]
        this.setState({promotionRules})

        const products = [
            { price: 199.99, pid: 'wf', qty:0},
            { price: 9.99, pid: 'docgen', qty:0},
            { price: 99.99, pid: 'form', qty:0 }
        ];

        let totalPrice=0.0;
        Object.keys(this.state.checkedProducts).map(checkedKey => 
            {
                Object.keys(products).map(key => 
                    {
                        if(checkedKey === products[key].pid)
                        {
                            products[key].qty = this.state.checkedProducts[checkedKey]
                            totalPrice =  totalPrice + (products[key].price * products[key].qty)
                        }
                    }
                )
            }
         )
        
         Object.keys(products).map(key => 
            {
                if(products[key].qty <= 0)
                {
                    delete products[key]
                }
            }
         );

        // alert( Object.keys(products).map(productKey => (products[productKey].pid)))

        this.setState({products,totalPrice})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        alert ('order placed')
    }

    render () 
    {
   //  alert( Object.keys(props.checkedoutProducts).map(productKey => (props.checkedoutProducts[productKey].pid)))
        let checkoutSummary = null;
        if (this.state.promotionRules) {
        checkoutSummary = (
            <CheckoutSummary
                checkoutProducts={this.state.products}
                totalPrice={this.state.totalPrice}
                promotionRules={this.state.promotionRules}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler} />
            )
        }

        return (
            <div>
               {checkoutSummary}
            </div>
        );
    }
}

export default Checkout;