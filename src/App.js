import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ProductSelection from './containers/ProductSelection/ProductSelection'
import Checkout from './containers/Checkout/Checkout'

class App extends Component {
  render() {
    return (
      <Switch>
      <Route path="/checkout" component={Checkout} />
      <Route path="/" exact component={ProductSelection} />
    </Switch>
    );
  }
}

export default App;
