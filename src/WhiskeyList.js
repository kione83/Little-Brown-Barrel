import React, { useEffect, useState } from "react";
import whiskeysData from "./products.json"; // Import the JSON file

const WhiskeyList = () => {
	const [whiskeys, setWhiskeys] = useState([]);

	useEffect(() => {
		setWhiskeys(whiskeysData);
	}, []);

	const handleUpdate = async (id, field, value) => {
		const updatedWhiskeys = whiskeys.map((whiskey) =>
			whiskey.id === id ? { ...whiskey, [field]: value } : whiskey
		);
		setWhiskeys(updatedWhiskeys);

		try {
			const response = await fetch(`http://localhost:5000/api/products/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ [field]: value }),
			});
			const result = await response.json();
			console.log(result.message);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const handleDelete = async (id) => {
		const updatedWhiskeys = whiskeys.filter((whiskey) => whiskey.id !== id);
		setWhiskeys(updatedWhiskeys);

		try {
			const response = await fetch(`http://localhost:5000/api/products/${id}`, {
				method: "DELETE",
			});
			const result = await response.json();
			console.log(result.message);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="whiskey-list">
			<h2>Current Whiskeys</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>ID</th>
						<th>Price</th>
						<th>Featured</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{whiskeys.map((whiskey) => (
						<tr key={whiskey.id}>
							<td>
								<input
									type="text"
									value={whiskey.name}
									onChange={(e) =>
										handleUpdate(whiskey.id, "name", e.target.value)
									}
								/>
							</td>
							<td>
								<input
									type="text"									
									value={whiskey.id}
									onChange={(e) =>
										handleUpdate(whiskey.id, "id", e.target.value)
									}
								/>
							</td>
							<td>
								<input
									type="text"
									value={whiskey.price}
									onChange={(e) =>
										handleUpdate(whiskey.id, "price", e.target.value)
									}
								/>
							</td>
							<td>
								<input
									type="checkbox"
									checked={whiskey.featured}
									onChange={(e) =>
										handleUpdate(whiskey.id, "featured", e.target.checked)
									}
								/>
							</td>
							<td>
								<button
									className="deleteBtn"
									onClick={() => handleDelete(whiskey.id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default WhiskeyList;
