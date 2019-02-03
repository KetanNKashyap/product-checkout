import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CheckoutProducts from './CheckoutProducts';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';

configure({adapter: new Adapter()});

describe('<CheckoutProducts />', () => {

    it('should render one <CheckoutProduct /> element', () => {
        const checkoutProductsProps = [{ price: 199.99, pid: 'wf', qty:2},
             { price: 9.99, pid: 'docgen', qty:3}]
       let wrapper = shallow(<CheckoutProducts {[...checkoutProductsProps]}/>);
       expect(wrapper.find(CheckoutProduct)).toHaveLength(2);
    });
});
