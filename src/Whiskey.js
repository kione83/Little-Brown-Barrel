import React, { useState } from "react";
import Card from "./Card";
import products from "../src/products.json";

function Whiskey() {
	const [searchTerm, setSearchTerm] = useState("");
	const [isFeatured, setIsFeatured] = useState(false);
	const [selectedOrigin, setSelectedOrigin] = useState("");

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleFeaturedChange = (event) => {
		setIsFeatured(event.target.checked);
	};

	const handleOriginChange = (event) => {
		setSelectedOrigin(event.target.value);
	};

	const handleClearSearch = () => {
		setSearchTerm("");
		setIsFeatured(false);
		setSelectedOrigin("");
	};

	const filteredProducts = products.filter((product) => {
		const lowerCaseSearchTerm = searchTerm.toLowerCase();
		const name = product.name ? product.name.toLowerCase() : "";
		const description = product.description ? product.description.toLowerCase() : "";
		const key = product.key ? product.key.toLowerCase() : "";
		const origin = product.origin ? product.origin.toLowerCase() : "";

		return (
			(name.includes(lowerCaseSearchTerm) ||
				description.includes(lowerCaseSearchTerm) ||
				key.includes(lowerCaseSearchTerm)) &&
			(!isFeatured || product.featured) &&
			(!selectedOrigin || product.key === origin)
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
				<select value={selectedOrigin} onChange={handleOriginChange}>
					<option value="">All Origins</option>
					<option value="Rye">Rye</option>
					<option value="Bourbon">Bourbon</option>
					<option value="American">American</option>
					<option value="Canadian">Canadian</option>
					<option value="Islay">Islay</option>
					<option value="Scottish">Scottish</option>
					<option value="Irish">Irish</option>
				</select>
			</div>
			<Card products={searchTerm || isFeatured || selectedOrigin ? filteredProducts : products} />
		</section>
	);
}

export default Whiskey;