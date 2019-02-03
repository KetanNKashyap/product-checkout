import React from 'react';
import CheckoutProducts from './CheckoutProducts/CheckoutProducts';
import TotalPrice from '../TotalPrice/TotalPrice';
import Promotion from './Promotion/Promotion';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
        let applicablePromos = Object.keys(props.promotionRules).length > 0? GetApplicablePromos():{};
        const finalPromo = Object.keys(applicablePromos).length > 0 ? GetFinalPromo(): {totalPrice:props.totalPrice, Promotion:null};
        
        function GetApplicablePromos()
        {
            let applicablePromos={}
            props.promotionRules.map((ele) => 
                {
                    switch(ele.TYPE)
                    {
                        case 'high_worth_purchase': 
                            if(props.totalPrice > ele.VALUE)
                            {
                               Object.defineProperties(applicablePromos, {
                                [ele.PROMO_CODE]: {enumerable: true, value: props.totalPrice - (ele.DISCOUNT_PERCENT/100) * props.totalPrice}
                                });
                            }
                        break;
                        case 'bulk_purchase':
                            Object.keys(props.checkoutProducts).map (key => 
                                    {
                                        if(props.checkoutProducts[key].qty === ele.BULK_QTY && props.checkoutProducts[key].pid === ele.PRODUCT)
                                        {
                                            Object.defineProperties(applicablePromos, {
                                                [ele.PROMO_CODE]: {enumerable: true, value: CalculateNewTotalPrice(ele.PRODUCT, ele.NEW_PRODUCT_PRICE)}
                                                });
                                        }
                                    }
                                )   
                        break;
                        case 'min_purchase': 
                            let pids = []
                            Object.keys(props.checkoutProducts).map (key => 
                            {
                                pids.push(props.checkoutProducts[key].pid)
                            })
                            Object.keys(props.checkoutProducts).map (key => 
                                {
                                    if(props.checkoutProducts[key].qty == ele.MIN_QTY && props.checkoutProducts[key].pid == ele.PRODUCT && pids.includes(ele.TARGET_PRODUCT))
                                    {
                                        Object.defineProperties(applicablePromos, {
                                            [ele.PROMO_CODE]: {enumerable: true, value: CalculateNewTotalPrice(ele.TARGET_PRODUCT, ele.NEW_TARGET_PRODUCT_PRICE)}
                                            });
                                    }
                                }
                         )   
                        break;
                        default:
                    }
                }
            )
            return applicablePromos;
        }

        function CalculateNewTotalPrice(pid, newPrice)
        {
            let newTotalPrice=0.0;
            Object.keys(props.checkoutProducts).map(key => 
                {
                    if(props.checkoutProducts[key].pid === pid)
                    {
                        newTotalPrice = newTotalPrice + (newPrice * props.checkoutProducts[key].qty)
                    }
                   else
                    {
                        newTotalPrice = newTotalPrice + (props.checkoutProducts[key].price * props.checkoutProducts[key].qty)
                    }
                }
             )
             return newTotalPrice;
        }


       function GetFinalPromo()
        {
            let promoTotalPrices = [];
            Object.keys(applicablePromos).map(promo =>
                {
                    promoTotalPrices.push(applicablePromos[promo])
                }
            )
            const minPromoTotalPrice = Math.min(...promoTotalPrices)
            const finalPromoCode = Object.keys(applicablePromos).find(key=> applicablePromos[key] === minPromoTotalPrice)
            return {
                totalPrice:minPromoTotalPrice, Promotion:finalPromoCode
            }
        }
       
        let promotion = null;
        if(finalPromo.Promotion != null)
        {
            promotion = <Promotion promotion={finalPromo.Promotion}></Promotion>
        }

        //alert( Object.keys(props.checkoutProducts).map(productKey => (props.checkoutProducts[productKey].pid)))

    return (
        <div>
            <h1>Review your final order!</h1>
            <CheckoutProducts checkoutProducts = {props.checkoutProducts} />
            {promotion}
            <TotalPrice totalPrice={finalPromo.totalPrice} />
            <button className="CancelCheckoutButton"
                onClick={props.checkoutCancelled}>CANCEL</button>
            <button  className="FinalCheckoutButton" 
                onClick={props.checkoutContinued}>PLACE ORDER</button>
        </div>
    );
}

export default checkoutSummary;