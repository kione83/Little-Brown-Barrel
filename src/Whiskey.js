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

	const handleClearSearch = () => {
		setSearchTerm("");
		setIsFeatured(false);
	};

	const filteredProducts = products.filter((product) => {
		const lowerCaseSearchTerm = searchTerm.toLowerCase();
		const name = product.name ? product.name.toLowerCase() : "";
		const description = product.description ? product.description.toLowerCase() : "";
		const key = product.key ? product.key.toLowerCase() : "";
		return (
			(name.includes(lowerCaseSearchTerm) ||
				description.includes(lowerCaseSearchTerm) ||
				key.includes(lowerCaseSearchTerm)) &&
			(!isFeatured || product.featured)
		);
	});

	return (
		<section id="whiskey-home">
			<div className="search-filter">
				<div className="search-input-wrapper">
					<input
						type="text"
						placeholder="Search for a whiskey..."
						value={searchTerm}
						onChange={handleSearchChange}
					/>
					{searchTerm && (
						<button className="clear-button" onClick={handleClearSearch}>
							X
						</button>
					)}
				</div>
				<label>
					<input
						type="checkbox"
						checked={isFeatured}
						onChange={handleFeaturedChange}
					/>
					Featured
				</label>
			</div>
			<Card products={searchTerm || isFeatured ? filteredProducts : products} />
		</section>
	);
}

export default Whiskey;