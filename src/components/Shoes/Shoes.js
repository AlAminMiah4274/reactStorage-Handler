import React from 'react';
import { multiply } from '../utilities/Calculate';

const Shoes = () => {
    const first = 15;
    const second = 12;
    const result = multiply(first, second);
    return (
        <div>
            <h1>This is Shoes components</h1>
            <p>Result: {result}</p>
        </div>
    );
};

export default Shoes;