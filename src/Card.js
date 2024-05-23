import products from '../src/products.json';
import React from 'react';
import StarIcon from './StarIcon';


function Card() {
    
    return(
        <div id="whiskey-container">
            {products.map((product) => (
                <a key={product.name} href={product.website} target="_blank" rel="noopener noreferrer">
                <div className='whiskey-card'>
                    <div className="whiskey-title" key={product.name}>
                    {product.featured && <StarIcon/>}
                    <h2>{product.name}</h2>
                    </div>
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