import React, {useState} from 'react';
import './style.scss';
import PizzaCart from '../../components/PizzaCart';


const Cart = () => {
    const pizzasFromLS = JSON.parse(localStorage.getItem('pizzasInCart'));
    const pizzas = [...pizzasFromLS];

    const pizzasBye = pizzas.filter(p => p.count > 0)

    let count = 0;
    let sum = 0;
    pizzasBye.forEach(p => {
        count += p.count;
        sum += +p.price;
        console.log(sum)
    })

    const [countInCart, setCountInCart] = useState(count);
    const [sumInCart, setSumInCart] = useState(sum);


    return (
        <main>
            <section>
                <div className="container">
                    {/* <div className="out">
                        <p>Корзина: {countInCart} товаров на сумму <span> {sumInCart} грн.</span></p>
                    </div> */}
                    <div className="holder-cart">
                        {pizzasBye.map(pizza => {
                            return <PizzaCart
                                countInCart={countInCart}
                                setCountInCart={setCountInCart}
                                setSumInCart={setSumInCart}
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