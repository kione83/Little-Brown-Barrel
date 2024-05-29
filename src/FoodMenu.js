import React from "react";
import Entree from "./Entree";
import Sandwich from "./Sandwich";
import Appetizers from "./Appetizers";
import Salad from "./Salad";
import Slider from "./Slider";
import Side from "./Sides";
import menuData from '../src/menu.json'

function FoodMenu() {
	const menu = menuData.sections;

	return (
		<div id="food-menu">
			<Entree items={menu.Entrees} />
			<Sandwich items={menu.Sandwiches} />
			<Appetizers items={menu.Appetizers} />
			<Salad items={menu.Salads} />
			<Slider items={menu.Sliders} />
			<Side items={menu.Sides} />
		</div>
	);
}

export default FoodMenu;