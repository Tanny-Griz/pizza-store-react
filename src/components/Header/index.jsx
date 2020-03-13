import React, { useEffect, useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './style.scss';
import Button from '../Button';
import {Link} from "react-router-dom";
import { store } from '../../store';
import { useSelector } from 'react-redux';
import { pizzas } from '../../store/pizzas/reducer';

const Header = () => {

    const totalCount = useSelector(state => state.pizzas.cart.totalCount)
    console.log(totalCount);

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