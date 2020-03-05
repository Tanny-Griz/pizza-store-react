import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Cart from './containers/Cart';
import PizzaContainer from './containers/PizzaContainer';
import { pizzaList } from './data/listOfPizzasAndCompozitions';
import { Provider } from 'react-redux';
import { store } from './store';



const App = () => {

  useEffect(() => {
    store.dispatch({ type: 'INIT', payload: pizzaList })
  }, [])

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
