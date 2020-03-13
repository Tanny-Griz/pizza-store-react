import React, { useState } from 'react';
import './style.scss';
import Button from '@material-ui/core/Button';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { useSelector, useDispatch } from 'react-redux';

const PizzaCard = ({ pizza }) => {
    const dispatch = useDispatch();
    let url = "../../img/";

    const handleAddToCart = (pizza) => dispatch({type: 'ADD_TO_CART', payload: pizza})

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
                            <Button variant="contained" color="primary" onClick={() => handleAddToCart(pizza)}>Заказать
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PizzaCard