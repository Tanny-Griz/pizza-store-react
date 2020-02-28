import React from 'react';
import {pizzaList} from '../config/listOfPizzasAndCompozitions';

let pizzasFromLS = JSON.parse(localStorage.getItem('pizzas'));

export const initialState = {
    pizzas: pizzasFromLS || pizzaList,
    cart: []
}