import React, { useState } from "react";
import Entree from "./Entree";
import Sandwich from "./Sandwich";
import Appetizers from "./Appetizers";
import Salad from "./Salad";
import Slider from "./Slider";
import menuData from "../src/menu.json";

function FoodMenu() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedSections, setSelectedSections] = useState({
		Entrees: true,
		Sandwiches: true,
		Appetizers: true,
		Salads: true,
		Sliders: true,
		Sides: true,
	});

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSectionChange = (event) => {
		const { name, checked } = event.target;
		setSelectedSections((prevSections) => ({
			...prevSections,
			[name]: checked,
		}));
	};

	const filterItems = (items) => {
		return items.filter(
			(item) =>
				item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				item.description.toLowerCase().includes(searchTerm.toLowerCase())
		);
	};

	const menu = menuData.sections;

	return (
		<div>
			<div className="search-filter">
				<input
					type="text"
					placeholder="Search for a menu item..."
					value={searchTerm}
					onChange={handleSearchChange}
				/>
				<label>
					<input
						type="checkbox"
						name="Entrees"
						checked={selectedSections.Entrees}
						onChange={handleSectionChange}
					/>
					Entrees
				</label>
				<label>
					<input
						type="checkbox"
						name="Sandwiches"
						checked={selectedSections.Sandwiches}
						onChange={handleSectionChange}
					/>
					Sandwiches
				</label>
				<label>
					<input
						type="checkbox"
						name="Appetizers"
						checked={selectedSections.Appetizers}
						onChange={handleSectionChange}
					/>
					Appetizers
				</label>
				<label>
					<input
						type="checkbox"
						name="Salads"
						checked={selectedSections.Salads}
						onChange={handleSectionChange}
					/>
					Salads
				</label>
				
				<label>
					<input
						type="checkbox"
						name="Sliders"
						checked={selectedSections.Sliders}
						onChange={handleSectionChange}
					/>
					Sliders
				</label>
				
			</div>
			<div id="food-menu">
				{selectedSections.Entrees && (
					<Entree items={filterItems(menu.Entrees)} />
				)}
				{selectedSections.Sandwiches && (
					<Sandwich items={filterItems(menu.Sandwiches)} />
				)}
				{selectedSections.Appetizers && (
					<Appetizers items={filterItems(menu.Appetizers)} />
				)}
				{selectedSections.Sliders && (
					<Slider items={filterItems(menu.Sliders)} />
				)}
				{selectedSections.Salads && (
					<Salad items={filterItems(menu.Salads)} />
				)}
			</div>
		</div>
	);
}

export default FoodMenu;
