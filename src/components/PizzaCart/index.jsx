import React, {useState} from 'react';
// import './style.scss';
import Button from '@material-ui/core/Button';

const PizzaCart = ({ pizza }) => {

    let url = "../../img/";

    return (
        <>
            <div className="holder-pizza">
                <div className="pizza-card">
                    <div className="visual">
                        <img src={url + pizza.img} alt={pizza.name} />
                    </div>
                    <div className="text">
                        <h2>{pizza.name}</h2>
                        <input type="number" className="count" placeholder={pizza.count}  />
                        <span> грн.</span>
                        <div className="btn-group">
                            <Button>delete</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PizzaCart