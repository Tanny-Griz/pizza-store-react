import React, { useEffect, useState } from 'react';
import './style.scss';
import PizzaCard from '../../components/PizzaCard';
import Search from '../../components/Search';
import { Context } from '../../App';
import { useContext } from 'react';
import { useReducer } from 'react';
import { useStateHook } from '../../stateHook';


const PizzaContainer = ({data}) => {

    const context = useContext(Context);

    const [filtredPizzas, setfiltredPizzas] = useState([]);

    useEffect(() => {
        setfiltredPizzas([...context.state.pizzas]);
    }, [context.state.pizzas]);

    const handleSearchPizzas = (e) => {
        let result = data.pizzas.filter((pizza => {
            let eTargetValue = e.target.value.toLowerCase();
            let pizzaNameIncludes = pizza.name.toLowerCase().includes(eTargetValue);
            return pizzaNameIncludes;
        }));
        setfiltredPizzas(result);
    }

    const handleAddCart = (name, id, price) => {
        let count = 0;
        const cart = {
            name: name,
            id: id,
            price: price,
            count: count+1
        }
        console.log(cart)
    }


    return (
        <>
        <Search onChange={handleSearchPizzas}>>
                Search
        </Search>
        <div className="container">
            <div className="holder-cards">
            {filtredPizzas.map(pizza => {
                        return <PizzaCard
                        pizza={pizza}
                        key={pizza.name + pizza.id}
                        handleAddCart={handleAddCart}
                        />
                    })}
            </div>
        </div>
       </> 
    )
}

export default PizzaContainer