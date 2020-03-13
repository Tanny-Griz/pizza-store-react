import React, { useEffect, useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './style.scss';
import Button from '../Button';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {

    const totalCount = useSelector(state => state.pizzas.cart.totalCount)

    // const objFromLSCart = getItem('cart');
    // let totalCount = 0;
    // if (objFromLSCart) {
    //     totalCount = objFromLSCart.cart.totalCount;
    // }

    return (
        <header>
            <div className="container">
               <div className="holder-header">
               <h1><Link to="/">Pizza store</Link></h1>
                <Button>
                    <Link to="/cart">
                        <ShoppingCartIcon>
                        </ShoppingCartIcon>
                    </Link>
                    <span className="total-count">{!totalCount || totalCount}</span>
                </Button>
            </div>
            </div>
            
        </header>
    )
}

export default Header