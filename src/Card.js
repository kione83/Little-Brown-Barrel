import products from '../src/products.json';
import React from 'react';


function Card() {
    
    return(
        <div id="whiskey-container">
            {products.map((product) => (
                <a href={product.website} target="_blank" rel="noopener noreferrer">
                <div className='whiskey-card'>
                    <h2>{product.name}</h2>
                    <div><img src={product.image} alt={product.name} /> 
                    </div>
                    <div>
                    <p>${product.price}</p>
                    <p id="whiskey-description-font" >{product.description}</p>
                    </div>
                </div>
                </a>
                          
            ))}
            
        </div>
    )

}
export default Card;