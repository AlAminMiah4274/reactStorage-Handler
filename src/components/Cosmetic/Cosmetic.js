import React from 'react';

const Cosmetic = (props) => {
    return (
        <div>
            <h2>Buy this: {props.cosmetic.name}</h2>
            <p>Only for ${props.cosmetic.price}</p>
        </div>
    );
};

export default Cosmetic;