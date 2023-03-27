import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    // const first = 55;
    // const second = 66;
    // const total = add( first, second);

    const cosmetics = [
        {id: 1, name: 'Alta', price: 100},
        {id: 2, name: 'Alta2', price: 200},
        {id: 3, name: 'Alta3', price: 300},
        {id: 4, name: 'Alta4', price: 400},
        {id: 5, name: 'Alta5', price: 500},
        {id: 6, name: 'Alta6', price: 600},
    ]
    return (
        <div>
            <h1>Wlcome to my store</h1>
            {
                cosmetics.map(cosmetic =><Cosmetic 
                    
                    key= {cosmetic.id}
                    cosmetic = {cosmetic}
                    
                    ></Cosmetic>)
            }
           
        </div>
    );
};

export default Cosmetics;