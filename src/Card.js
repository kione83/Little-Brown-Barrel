import products from '../src/products.json';
import React from 'react';
import StarIcon from './StarIcon';


function Card() {
    
    return(
        <div id="whiskey-container">
            {products.map((product) => (
                <a href={product.website} target="_blank" rel="noopener noreferrer">
                <div className='whiskey-card'>
                    {product.featured && <StarIcon/>}
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