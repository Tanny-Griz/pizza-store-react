import React from 'react';
import './style.scss';
import Button from '@material-ui/core/Button';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const PizzaCard = ({ pizza, handleAddCart }) => {

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
                        <p className="caloricity">{pizza.caloricity}<WhatshotIcon/></p>
                        
                        <p></p>
                        <div className="btn-group">
                            <Button variant="contained" color="primary" onClick={() => handleAddCart(pizza.name, pizza.id,pizza.price, 'cart')}>Заказать
                            </Button>
                        {/* <button className="edit" onClick={() => handleSetId(user.id, 'edit')}>Edit</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PizzaCard