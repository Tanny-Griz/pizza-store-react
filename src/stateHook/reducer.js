import { Types } from './actionTypes';

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case Types.INIT:
            return {
                ...state,
                pizzas: payload.pizzas
            }
        case Types.SET_PIZZAS:
            return {
                ...state,
                pizzas: payload
            }
        case Types.ADD_PIZZA:
            const newPizzaArr = [...state.pizzas, action.payload];
            localStorage.setItem('pizzas', JSON.stringify(newPizzaArr))
            return {
                ...state,
                pizzas: newPizzaArr
            }
    }
} 