import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for ${price}</p>
            <p>It has id: {id}</p>
        </div>
    );
};

export default Cosmetic;