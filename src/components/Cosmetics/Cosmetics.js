import React from 'react';
import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add( first, second);
    return (
        <div>
            <h1>Wlcome to my store</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetics;