import React from 'react';
import { useState, useEffect } from 'react';
import Pizza from './Pizza'


const Cart = ({ items, total }) => {
    const [pizzas, setPizzas] = useState([]);

    const [cart, setCart] = useState({
        items: [],
        total: 0
    });
    const getPizza = async () => {
        const json = await fetch("http://localhost:1337/api/pizzas?populate=image")
            .then(response => response.json());

        setPizzas(json.data);
    }
    useEffect(() => {
        getPizza();
    }, []);

    const addToCart = (pizza) => {

        setCart({
            items: [...cart.items, pizza],
            total: Math.round((cart.total + pizza.attributes.price) * 100) / 100
        });

        // transformation du tableau en chaine
        let orderStringify = JSON.stringify(cart)
        localStorage.setItem("commandes", orderStringify);
    }



    const listpizza = pizzas.map(pizza => {
        return (
            <Pizza
                key={pizza.id}
                name={pizza.attributes.name}
                price={pizza.attributes.price}
                image={pizza.attributes.image.data.attributes.url}
                addToCart={() => addToCart(pizza)}
            />
        )
    });

    const cartItems = cart.items.map(item => {
        return (
            <div>{item.attributes.name} - {item.attributes.price}€</div>
        )
    });

    let orders = new Array();

    if (localStorage.getItem("cart")) {

        let orderString = localStorage.getItem("cart");
        orders = JSON.parse(orderString);

        console.log(orders);

    };


    return (

        <div>
            {listpizza}
            <div className="App-cart-total">
                {cartItems}
                Soit un total de {cart.total}€
            </div>
        </div>

    )
}

export default Cart