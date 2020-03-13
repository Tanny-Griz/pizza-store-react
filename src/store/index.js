import { combineReducers, createStore, applyMiddleware } from 'redux';
import { pizzas } from './pizzas/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const redusers = combineReducers({
    pizzas,
})

export const store = createStore(redusers, composeWithDevTools(
    applyMiddleware()
));
  
