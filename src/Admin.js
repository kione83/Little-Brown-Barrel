import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WhiskeyList from "./WhiskeyList"; // Import the new component
import AddProductForm from './AddProductForm'; // Import the new component

function Admin() {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("isAuthenticated");
		navigate("/login");
	};

	const [message, setMessage] = useState("");
	const [activeTab, setActiveTab] = useState("list");
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
		} catch (error) {
			console.error("Error:", error);
			setMessage("Failed to add product");
		}
	}

	return (
		<div className="admin-panel">
			<div className="admin-panel-head">
				<h1>Admin Panel</h1>
				<p>
					Manage your products here. If you want to delete an item, simply click
					the delete button next to the item in the table. If you want to update
					a product, you can update it within the table. If you want to{" "}
					<i>ADD</i> a product, click the Add Product button.
				</p>
				<button onClick={handleLogout}>Logout</button>
				{message && <p>{message}</p>}
			</div>
			<div className="admin-panel-tabs">
				<button
					className="admin-panel-button"
					onClick={() => setActiveTab("list")}
				>
					Product List
				</button>
				<button
					className="admin-panel-button"
					onClick={() => setActiveTab("add")}
				>
					Add Whiskey
				</button>
			</div>
			<div className="admin-panel-content">
				{activeTab === "list" && (
					<div className="whiskey-list-container">
						<WhiskeyList /> {/* Include the WhiskeyList component */}
					</div>
				)}

				{activeTab === "add" && (
					<div className="forms-container">
						<AddProductForm />
					</div>
				)}
			</div>
		</div>
	);
}

export default Admin;
