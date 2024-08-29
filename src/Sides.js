
import React from "react";

function Sides({ items = [] }) {
	console.log(items)
	return (
		<div className="menu-section" id="sides-spacing">
			<h2>Sides</h2>
			{items.map((item, index) => (
				<div key={index} className="menu-item">
					<img src={item.image} alt={item.name} />
					<div className="food-price-desc">
						<h3>{item.name}</h3>
						<p>{item.description}</p>

					</div>
				</div>
			))}
		</div>
	);
}

export default Sides;