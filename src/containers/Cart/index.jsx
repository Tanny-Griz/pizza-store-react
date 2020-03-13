import React, { useState } from 'react';
import './style.scss';
import PizzaCart from '../../components/PizzaCart';
import { useSelector } from 'react-redux';
import { getItem } from '../../services/storageService';


const Cart = () => {

    let totalCount = 0;
    let totalPrice = 0;

    const objFromLSCart = getItem('cart');
    let arrayOfPizzaCart = [];

    if (objFromLSCart) {
        const arrayFromLSCart = objFromLSCart.cart.pizzasInCart;
        totalCount = objFromLSCart.cart.totalCount;
        totalPrice = objFromLSCart.cart.totalPrice;

        for (let p of arrayFromLSCart) {
            if (p.count > 0) {
                arrayOfPizzaCart.push(p);

            }
        }
    }

    const string = " ";

    return (
        <main>
            <section>
                <div className="container">
                    <div className="out">
                        <p>Корзина: {totalCount} товаров на сумму <span> {totalPrice} грн.</span></p>
                    </div>
                    <div className="holder-cart">
                        {string && arrayOfPizzaCart.map(pizza => {
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