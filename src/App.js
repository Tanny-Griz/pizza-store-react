import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Cart from './containers/Cart';
import PizzaContainer from './containers/PizzaContainer';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/" component={PizzaContainer} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
