import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../utilities/Fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id);
    }

    const removeFromCart = id => {
        removeFromDb(id);
    }

    const deleteItem = () => {
        deleteShoppingCart()
    }

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for ${price}</p>
            <p>It has id: {id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
};

export default Cosmetic;