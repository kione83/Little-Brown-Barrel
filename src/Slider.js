
import React from "react";

function Slider({ items = [] }) {
	console.log(items)
	return (
		<div className="menu-section">
			<h2>Sliders</h2>
			{items.map((item, index) => (
				<div key={index} className="menu-item">
					<img src={item.image} alt={item.name} />
					<div className='food-price-desc'>
					<h3>{item.name}</h3>
					<p>{item.description}</p>
					<p>${item.price}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Slider;