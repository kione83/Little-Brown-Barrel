
import React from "react";

function Salad({ items = [] }) {
	return (
		<div className="menu-section" id="salad-spacing">
			<h2>Salads</h2>
			{items.map((item, index) => (
				<div key={index} className="menu-item">
					<img src={item.image} alt={item.name} />
					<div className="food-price-desc">
					<h3>{item.name}</h3>
					<p>{item.description}</p>
					<p>${item.price}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Salad;