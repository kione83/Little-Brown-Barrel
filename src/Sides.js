
import React from "react";

function Sides({ items = [] }) {
	console.log(items)
	return (
		<div>
			<h2>Sides</h2>
			{items.map((item, index) => (
				<div key={index} className="menu-item">
					<h3>{item.name}</h3>
					<p>{item.description}</p>
					<p>${item.price}</p>
				</div>
			))}
		</div>
	);
}

export default Sides;