import React from 'react';
import './style.scss';
import PizzaCart from '../../components/PizzaCart';


const Cart = () => {

    const pizzasFromLS = JSON.parse(localStorage.getItem('pizzasInCart'));

    const pizzas = [...pizzasFromLS];
    console.log(pizzas)

    // // const ids = 
    // const pizzasCart = pizzas.reduce((tally, pizza) => {
    //     let id = pizza.id
    //     tally[id] = (tally[id] || 0) + 1
    //     return tally;
    // }, {})
    // console.log(pizzasCart)


    let totalCount = 0;
    let totalPrice = 0;
    pizzas.forEach(p => {
        // totalCount += p.count
        totalPrice += p.price
    } );
    console.log(totalPrice)



    return (
        <main>
            <section>
                <div className="container">
                    <h2>Cart</h2> <button className="b">button</button>
                    <div className="holder-cart">
                        {pizzasFromLS.map(pizza => {
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