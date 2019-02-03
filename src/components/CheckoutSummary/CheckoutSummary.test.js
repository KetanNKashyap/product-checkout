// import React from 'react';

// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// import CheckoutSummary from './CheckoutSummary';
// import Promotion from './Promotion/Promotion';
// import TotalPrice from '../TotalPrice/TotalPrice';

// configure({adapter: new Adapter()});

// describe('<CheckoutSummary />', () => {
//     let wrapper;
//     let promotionRules;

//     beforeEach(() => {
//         wrapper = shallow(<CheckoutSummary />);

//         promotionRules = [
//             {TYPE:"high_worth_purchase", PROMO_CODE:"RRD4D32", "VALUE": 1000, "DISCOUNT_PERCENT": 10}
//            ,{TYPE:"high_worth_purchase", PROMO_CODE:"F444T11", "VALUE": 1500, "DISCOUNT_PERCENT": 15}
//            ,{TYPE:"bulk_purchase", PROMO_CODE:"FF9543D1", "PRODUCT": "docgen", "BULK_QTY": 10, "NEW_PRODUCT_PRICE": 8.99}
//            ,{TYPE:"min_purchase", PROMO_CODE:"YYGWKJD", "PRODUCT": "wf", "MIN_QTY": 1, "TARGET_PRODUCT": "form", "NEW_TARGET_PRODUCT_PRICE": 89.99}
//         ]
//     });

//     it('should render two <Promotion /> element if 10 doc products are checked out', () => {

//         wrapper.setProps({
//             checkedoutProducts: { price: 9.99, pid: 'docgen', qty:10}
//             , totalPrice: 99.9
//             , promotionRules={...promotionRules}
//         });
//         // expect(wrapper.find(Promotion)).toHaveLength(1);
//         expect(wrapper.find(TotalPrice)).toHaveLength(1);
//     });

//     // it('should render three <Promotion /> elements if authenticated', () => {
//     //     // wrapper = shallow(<NavigationItems isAuthenticated />);
//     //     wrapper.setProps({isAuthenticated: true});
//     //     expect(wrapper.find(Promotion)).toHaveLength(3);
//     // });

//     // it('should an exact logout button', () => {
//     //     wrapper.setProps({isAuthenticated: true});
//     //     expect(wrapper.contains(<Promotion link="/logout">Logout</Promotion>)).toEqual(true);
//     // });
// });