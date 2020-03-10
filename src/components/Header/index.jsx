import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './style.scss';
import Button from '../Button';
import {Link} from "react-router-dom";

const Header = () => {
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
                </Button>
            </div>
            </div>
            
        </header>
    )
}

export default Header