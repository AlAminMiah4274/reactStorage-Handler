import React from 'react';
import { add, substraction } from '../utilities/Calculate';

const Cosmetics = () => {
    const first = 56;
    const second = 45;
    const total = add(first, second);
    const sub = substraction(first, second);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Total: {total} and Result: {sub}</p>
        </div>
    );
};

export default Cosmetics;