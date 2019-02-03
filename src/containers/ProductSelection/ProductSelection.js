import React, { Component } from 'react';
import BuildControls from '../../components/BuildControls/BuildControls'
//import dummy from '../Checkout/Checkout'

class ProductSelection extends Component 
{
    state = {
        products: null,
     }
     
     productQtyChangedHandler = (itemType, itemQty)=>
     {
        const updatedProducts = {...this.state.products}
    
        Object.keys(updatedProducts).map(key => 
            {
                if(updatedProducts[key].pid === itemType)
                {
                    updatedProducts[key].qty = itemQty
                }
            }
         )
        this.setState({products:updatedProducts})
     }

     checkoutHandler = ()=>
     {
        const queryParams = [];

        Object.keys(this.state.products).map(key => 
            {
                if (this.state.products[key].qty > 0)
                {
                    queryParams.push(encodeURIComponent(this.state.products[key].pid) + '=' + encodeURIComponent(this.state.products[key].qty));
                } 
            }
         )

        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
     }

     
    componentDidMount () {
        const products = [
            { price: 199.99, pid: 'wf', qty:0},
            { price: 9.99, pid: 'docgen', qty:0},
            { price: 99.99, pid: 'form', qty:0 }
        ];
        this.setState({products})
     }

     render()
     {
        let buildControls;
        if (this.state.products) {
            buildControls = (<BuildControls
                products={this.state.products}
                productQtyChanged={this.productQtyChangedHandler}
                checkout={this.checkoutHandler}
            />)
        }

        return (
             <div>
               {buildControls}
            </div>
         );
     }

}

export default ProductSelection;