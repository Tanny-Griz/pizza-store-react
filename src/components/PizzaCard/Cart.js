import React from 'react';

// посылаем в локал обьект
const setToLocalStorage = () => {
    const obj = {
        cartArr: Cart.cartArrLS,
        totalPrice: Cart.totalPrice,
        totalCount: Cart.totalCount,
    }
    
    localStorage.setItem('cart', JSON.stringify(obj));
}

class Cart extends React.Component {
    static cartArrLS = newArrPizzaList.map(pizza => {
        return {
            id: pizza.id,
            img: pizza.img,
            name: pizza.name,
            count: 0,
            price: pizza.price,
            totalPrice: 0,
        }
    })

    static totalPrice = 0

    static totalCount = 0

    // сюда передаем id 
    static setPizza(idOfCurrentPizza) {
        const pizzaModel = newArrPizzaList.find(p => p.id === idOfCurrentPizza);

        for (let pizza of Cart.cartArrLS) {
            if (pizza.id === idOfCurrentPizza) {
                pizza.count += 1;
                pizza.img = pizzaModel.img;
                pizza.price = pizzaModel.price;
                pizza.totalPrice += pizzaModel.price;
                Cart.totalPrice += pizzaModel.price;
                Cart.totalCount++;

                setToLocalStorage();
                break;
            }
        }
    }
}

export default Cart