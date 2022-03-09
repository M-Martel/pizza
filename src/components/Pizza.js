import React from 'react'

const Pizza = ({ name, price, image, addToCart }) => {
  return (
    <div className="App-pizza" onClick={addToCart}>
        <img src={`http://localhost:1337${image}`} alt="" />
        <span>{name}</span>
        <span>{price}€</span>
    </div>
  )
}

export default Pizza