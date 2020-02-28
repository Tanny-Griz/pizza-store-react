import React from 'react';
import './style.scss';
import PizzaCart from '../../components/PizzaCart';


const Cart = () => {

    const pizzasFromLS = JSON.parse(localStorage.getItem('pizzasInCart'));
    console.log(pizzasFromLS);

    let arr = pizzasFromLS.filter(item => {
        if(item.id === item.id) {
            item.price += item.price;
            item.count += item.count;
        }
    })


    return (
        <div className="holder-cart">
            <h2>Cart</h2>
            {pizzasFromLS.map(pizza => {
                        return <PizzaCart
                        pizza={pizza}
                        key={pizza.name + pizza.id}
                        />
                    })}
        </div>
    )
}

export default Cart