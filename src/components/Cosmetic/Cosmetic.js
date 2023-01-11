import React from 'react';
import { addToDb } from '../utilities/Fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id);
    }

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for ${price}</p>
            <p>It has id: {id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;