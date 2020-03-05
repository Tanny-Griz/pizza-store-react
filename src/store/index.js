import { combineReducers, createStore } from 'redux';
import { pizzas } from './pizzas/reducer';

const redusers = combineReducers({
    pizzas,
})

export const store = createStore(redusers); 