import React, { useEffect, useState } from 'react';
import './style.scss';
import PizzaCard from '../../components/PizzaCard';
import Search from '../../components/Search';
import Select from '../../components/Select'
import { useSelector } from 'react-redux';


const PizzaContainer = () => {

    const pizzas = useSelector(state => state.pizzas);

    const [filtredPizzas, setfiltredPizzas] = useState([]);

    useEffect(() => {
        setfiltredPizzas([...pizzas]);
    }, [pizzas]);

    const handleSearchPizzas = (e) => {
        e.target.value
            ? setfiltredPizzas(pizzas.filter(pizza => {
                return pizza.name.toLowerCase().includes(e.target.value),
                    pizza.composition.join(' ').toLowerCase().includes(e.target.value);

            }))
            : setfiltredPizzas([...pizzas]);
    }

    const handleSortByPrice = (e) => {
        const newSort = [...pizzas].sort((a, b) => {
            if (e.target.value === 'Цена: по возростанию') return a.price - b.price;
            if (e.target.value === 'Цена: по убыванию') return b.price - a.price;
            if (e.target.value === 'Калории: по возростанию') return a.caloricity - b.caloricity;
            if (e.target.value === 'Калории: по убыванию') return b.caloricity - a.caloricity;
        });
        e.target.value === 'Фильтр'
            ? setfiltredPizzas([...pizzas])
            : setfiltredPizzas([...newSort])
    }

    // const cartArray = [];

    // const handleAddCart = (name, id, price) => {
    //     const pizzaObj = {
    //         name: name,
    //         id: id,
    //         price: price,
    //         count: 1
    //     }
    //     cartArray.push(pizzaObj);
    //     localStorage.setItem('pizzasInCart', JSON.stringify(cartArray));
    //     console.log(pizzaObj);
    //     console.log(cartArray);
    // }

    return (
        <>
            <main>
                <section className="filters">
                    <div className="container">
                        <div className="filters-group">
                            <Search
                                onChange={handleSearchPizzas}
                                placeholder="Название или ингредиент"
                            >
                            </Search>
                            <div className="select-price">
                                <Select
                                    onChange={(e) => handleSortByPrice(e)}
                                    children
                                >
                                    <option>Фильтр</option>
                                    <option>Цена: по возростанию</option>
                                    <option>Цена: по убыванию</option>
                                    <option>Калории: по возростанию</option>
                                    <option>Калории: по убыванию</option>
                                </Select>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container">
                        <div className="holder-cards">
                            {filtredPizzas.map(pizza => {
                                return <PizzaCard
                                    pizza={pizza}
                                    key={pizza.name + pizza.id}
                                />
                            })}
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}

export default PizzaContainer
