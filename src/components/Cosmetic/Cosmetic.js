import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const addToCart = (id) =>{
        console.log('Item added', id)
    }

    const addToCartWithParam = () => addToCart(id);
    return (
        <div className='product'>
            <h2>Buy this : {name}</h2>
            <p>Only for: $ {price}</p>
            <p>It has Id: {id}</p>
            <button onClick={addToCartWithParam}>Add to cart</button>
            <button onClick={() => addToCart(id) }>Add to cart: shortcut</button>
            
        </div>
    );
};

export default Cosmetic;