import React from 'react';
import { add } from '../utilities/Calculate';

const Cosmetics = () => {
    const first = 56;
    const second = 45;
    const total = add(first, second);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetics;