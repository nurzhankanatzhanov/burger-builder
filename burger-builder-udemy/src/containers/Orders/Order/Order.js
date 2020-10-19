import React from 'react';

import classes from './Order.css';

const order = (props) => {
    const ingredients = [];

    for (let ingr in props.ingredients){
        ingredients.push({
            name: ingr, 
            amount: props.ingredients[ingr]
        });
    }

    const ingredientOutput = ingredients.map(ingr => {
        return <span 
            style={{
                textTransform: 'capitalize', 
                display: 'inline-block', 
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }} 
            key={ingr.name}>{ingr.name} ({ingr.amount})</span>;
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <span style={{fontWeight: 'bold', color: '#85bb65'}}>${props.price.toFixed(2)}</span></p>
        </div>
    );
};

export default order;