import React from 'react';
// import './style.scss';

const PizzaCart = ({ pizza }) => {
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
                            <button>delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PizzaCart