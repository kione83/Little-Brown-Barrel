import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
	const [message, setMessage] = useState("");

	async function addProduct(e) {
		e.preventDefault();

		const newProduct = {
			name: document.getElementById("newWhiskeyName").value,
			description: document.getElementById("newWhiskeyDesc").value,
			price: document.getElementById("newWhiskeyPrice").value,
			image: document.getElementById("newWhiskeyImage").value,
			featured: document.getElementById("newWhiskeyFeatured").checked,
			website: document.getElementById("newWhiskeyWebsite").value,
		};

		try {
			const response = await fetch("http://localhost:3000/api/products", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newProduct),
			});
			const result = await response.json();
			setMessage(result.message);
			// Clear the form
			document.getElementById("newProductForm").reset();
			if (onAddProduct) onAddProduct();
		} catch (error) {
			console.error("Error:", error);
			setMessage("Failed to add product");
		}
	}

	return (
		<div>
			<form id="newProductForm" className="admin-form">
				<h2>Add Whiskey</h2>
				<input type="text" id="newWhiskeyName" placeholder="Name" />
				<input type="text" id="newWhiskeyDesc" placeholder="Description" />
				<input type="text" id="newWhiskeyPrice" placeholder="Price" />
				<input type="text" id="newWhiskeyImage" placeholder="Image" />
				<label htmlFor="newWhiskeyFeatured">Featured</label>
				<input type="checkbox" id="newWhiskeyFeatured" placeholder="Featured" />
				<input type="text" id="newWhiskeyWebsite" placeholder="Website" />
				<button type="submit" onClick={addProduct}>
					Add Whiskey
				</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
};

export default AddProductForm;
