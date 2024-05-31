import React, { useState } from "react";
import Card from "./Card";
import products from "../src/products.json";

function Whiskey() {
	const [searchTerm, setSearchTerm] = useState("");
	const [isFeatured, setIsFeatured] = useState(false);

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleFeaturedChange = (event) => {
		setIsFeatured(event.target.checked);
	};

	const filteredProducts = products.filter((product) => {
		const lowerCaseSearchTerm = searchTerm.toLowerCase();
		return (
			(product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
				product.description.toLowerCase().includes(lowerCaseSearchTerm)) &&
			(!isFeatured || product.featured)
		);
	});

	return (
		<section id="whiskey-home">
			<div className="search-filter">
				<input
					type="text"
					placeholder="Search for a whiskey..."
					value={searchTerm}
					onChange={handleSearchChange}
				/>
				<label>
					<input
						type="checkbox"
						checked={isFeatured}
						onChange={handleFeaturedChange}
					/>
					Featured
				</label>
			</div>
			<Card products={filteredProducts} />
		</section>
	);
}

export default Whiskey;
