import {pizzaList} from '../../data/listOfPizzasAndCompozitions';
import {getItem, setItem} from '../../services/storageService';

const initialPizzas = () => {
    const dataFromStorage = getItem('pizzas');
    if (dataFromStorage && dataFromStorage.length) {
        return dataFromStorage;
    }
    setItem('pizzas', pizzaList);
    return [...pizzaList];
}

const initialCart = () => {
    const dataFromStorage = getItem('cart');
    if (dataFromStorage && dataFromStorage.length) {
        return dataFromStorage;
    }
    const pizzasInCart = initialPizzas().map(item => {
        return {
            id: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
            count: 0,
        }
    })
    const cart = {
        pizzasInCart,
        totalCount: 0,
        totalPrice: 0,
    }
    // setItem('cart', cart);
    return cart;
}

const initialState = {
    pizzas: initialPizzas(),
    cart: initialCart(),
}

export const pizzas = (state=initialState, action) => {
    switch (action.type) {
        case 'INIT':
            return action.payload;
        case 'ADD_TO_CART':
            const newState = {...state};
            newState.cart.pizzasInCart = newState.cart.pizzasInCart.map(item => {
                if (action.payload.id === item.id) {
                    return {id: item.id, count: item.count + 1, name: item.name, img: item.img, price: item.price, }
                }
                return item;
            })
            newState.cart.totalCount++;
            newState.cart.totalPrice += action.payload.price;
            setItem('cart', newState);
            return newState
        default: 
            return state;
    }
}

