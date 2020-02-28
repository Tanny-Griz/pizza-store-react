import React from 'react';
import './style.scss';
import Button from '../Button';
import Search from '../Search';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="holder-header">
               <h1><Link to="/">Pizza store</Link></h1>
                <Button><Link to="/cart">Cart</Link></Button>
            </div>
            
            <div className="holder-button">
                
            </div>
        </header>
    )
}

export default Header