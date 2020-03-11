import React, { useState } from 'react';
import './style.scss';
import Button from '@material-ui/core/Button';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { useSelector } from 'react-redux';

const PizzaCard = ({ pizza }) => {

    const pizzas = useSelector(state => state.pizzas);

    const cartObj = pizzas.map(item => {
        return {
            id: item.id,
            img: item.img,
            name: item.name,
            price: item.price,
            count: 0,
        }
    });

    const handleAddCart = pizza => {

        const arrParse = JSON.parse(localStorage.getItem('pizzasInCart'));
        const newArr = arrParse || cartObj;
        
        const {id: pizzaId} = pizza;
        const pizzaModel = newArr.find(item => item.id === pizzaId);
        pizzaModel.count += 1;
        console.log(newArr);
        localStorage.setItem('pizzasInCart', JSON.stringify(newArr))
    }

    const cartArr = [...pizzas].map(pizza => {
        return {
            id: pizza.id,
            img: pizza.img,
            name: pizza.name,
            price: pizza.price,
            count: 0,
            totalPrice: 0,
        }
    })

    // const handleAddCart = (name, id, price) => {

    //     const arrParse = JSON.parse(localStorage.getItem('pizzasInCart'));
    //     const newArr = arrParse || [];

    //     const pizzaModel = pizzas.find(p => p.id === id);

    //     for (let pizza of cartArr) {
    //         if (pizza.id === id) {
    //             pizza.price = pizzaModel.price;
    //             pizza.count += 1;

    //             pizza.totalPrice += pizzaModel.price;
    //             newArr.push(pizza);
    //             localStorage.setItem('pizzasInCart', JSON.stringify(newArr))
    //             console.log(newArr);

    //             break;
    //         }
    //     }

    // }

    let url = "../../img/";

    return (
        <>
            <div className="holder-pizza">
                <div className="pizza-card">
                    <div className="visual">
                        <img src={url + pizza.img} alt="pizza" />
                    </div>
                    <div className="text">
                        <h1>{pizza.name}</h1>
                        <p className="comp">Composition: {pizza.composition.join(', ')} </p>
                        <p className="price">Price: {pizza.price} грн.</p>
                        <p className="caloricity">{pizza.caloricity}<WhatshotIcon /></p>

                        <p></p>
                        <div className="btn-group">
                            <Button variant="contained" color="primary" onClick={() => handleAddCart(pizza)}>Заказать
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PizzaCard