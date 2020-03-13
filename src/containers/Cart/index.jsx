import React, { useState } from 'react';
import './style.scss';
import PizzaCart from '../../components/PizzaCart';
import { useSelector } from 'react-redux';
import { getItem } from '../../services/storageService';


const Cart = () => {

    const objFromLSCart = getItem('cart');
    const arrayFromLSCart = objFromLSCart.cart.pizzasInCart;
    let arrayOfPizzaCart = [];
    let totalCount = 0;
    let totalPrice = 0;
    for (let p of arrayFromLSCart) {
        if (p.count > 0) {
            arrayOfPizzaCart.push(p);
            totalCount += p.count;
            totalPrice += p.price;
        }
    }
    console.log(arrayOfPizzaCart);


    return (
        <main>
            <section>
                <div className="container">
                    <div className="out">
                        <p>Корзина: {totalCount} товаров на сумму <span> {totalPrice} грн.</span></p>
                    </div>
                    <div className="holder-cart">
                        {arrayOfPizzaCart.map(pizza => {
                            return <PizzaCart
                                pizza={pizza}
                                key={pizza.name + pizza.id}
                            />
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Cart