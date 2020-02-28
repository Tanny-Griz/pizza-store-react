import React from 'react';
import './style.scss';

const PizzaCard = ({ pizza, handleAddCart }) => {

    


    return (
        <>
            <div className="holder-pizza">
                <div className="pizza-card">
                    <div className="visual">
                        <img src={pizza.img} alt="pizza" />
                    </div>
                    <div className="text">
                        <h1>Name: {pizza.name}</h1>
                        <p>{pizza.caloricity}</p>
                        <p>{pizza.price}</p>
                        <p></p>
                        <div className="btn-group">
                            <button onClick={() => handleAddCart(pizza.name, pizza.id,pizza.price, 'cart')}>add cart</button>
                        {/* <button className="edit" onClick={() => handleSetId(user.id, 'edit')}>Edit</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PizzaCard