import React, { Provider, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Cart from './containers/Cart';
import PizzaContainer from './containers/PizzaContainer';
import { useStateHook } from './stateHook';

export const Context = React.createContext();

const App = () => {
  
  const [state, dispatch] = useStateHook();

  useEffect(() => console.log(state));

  return (
    <>
      <Context.Provider value={{state, dispatch}}>
        <Header />
        <Switch>
          <Route path="/" render={() => <PizzaContainer data={state} />} />
          <Route path="/cart" render={() => <Cart />} />
        </Switch>
      </Context.Provider>
    </>
  );
}

export default App;
