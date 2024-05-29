
import React from "react";

function Sandwich({ items = [] }) {
	console.log(items)
	return (
		<div>
			<h2>Sandwiches</h2>
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

export default Sandwich;