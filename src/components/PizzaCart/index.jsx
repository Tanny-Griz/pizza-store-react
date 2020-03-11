import React, {useState} from 'react';
// import './style.scss';
import Button from '@material-ui/core/Button';

const PizzaCart = ({ pizza, countInCart, setCountInCart, setSumInCart }) => {

    const [sumItem, setSumItem] = useState(pizza.price*pizza.count);

    let url = "../../img/";

    // let summ = pizza.price*pizza.count;

    const handleOnChange = (e) => {
        // e.target.value = pizza.count;
        if (e.target.value < 0) {
            e.target.value = 0;
        }
        setSumItem(e.target.value * pizza.price);
        let a = +e.target.value + +countInCart
        setCountInCart(a)

    }
    // setSumInCart(11111)

    return (
        <>
            <div className="holder-pizza">
                <div className="pizza-card">
                    <div className="visual">
                        <img src={url + pizza.img} alt={pizza.name} />
                    </div>
                    <div className="text">
                        <h2>{pizza.name}</h2>
                        <input type="number" className="count" placeholder={pizza.count} onChange={(e) => handleOnChange(e)} />
                        <span>{sumItem} грн.</span>
                        {/* <div className="btn-group">
                            <Button>delete</Button>
                        </div> */}
                        {/* <button name="button" id="idi" data="Дата">тут валюэ</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PizzaCart