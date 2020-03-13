import React, {useState} from 'react';
// import './style.scss';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

const PizzaCart = ({ pizza }) => {

    const dispatch = useDispatch();

    // let value = pizza.count;

    const handleOnChange = (e, id) => {
        if (e > pizza.count) {
            dispatch({type: 'COUNT_ASC', payload: e, id})
        }

        // // else {
        // //     dispatch({type: 'COUNT_DESC', payload: e})
        // // }
        // if (e == 0) {
        //     // value = 0;
        // }
        // console.log(id)
    } 

    let url = "../../img/";

    // const handleOnChange = (e) => {
    //     console.log(e.target.value);
    // }

    return (
        <>
            <div className="holder-pizza">
                <div className="pizza-card">
                    <div className="visual">
                        <img src={url + pizza.img} alt={pizza.name} />
                    </div>
                    <div className="text">
                        <h2>{pizza.name}</h2>
                        <div className="count-price">
                            <input 
                                type="number" 
                                className="count" 
                                placeholder={pizza.count}
                                onInput={(e, id)=> handleOnChange(e.target.value, pizza.id)} />
                            <span> {pizza.count*pizza.price} грн.</span></div>
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