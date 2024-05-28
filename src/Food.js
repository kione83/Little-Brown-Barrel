import appetizers from '../src/appetizers.json';
import React from 'react';

function Food() {
    
    return(
        <div id="appetizer-container">
            {appetizers.map((appetizer) => (
                <div key={appetizer.name}>
                    <h3>{appetizer.name}</h3>
                    <img src={appetizer.image} alt={appetizer.name} />
                    <span>${appetizer.price}</span>
                    <p>${appetizer.description}</p>
                </div>
            ))}
        </div>
    )

}
export default Food;