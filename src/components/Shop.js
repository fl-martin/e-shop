import CategoriesNav from "./CategoriesNav";
import ItemsDisplay from "./ItemsDisplay";
import { useState } from "react";

function Shop() {
	const categories = [
		{
			name: "electronics",
			key: "electronics",
			label: "Electronics",
		},
		{
			name: "jewelery",
			key: "jewlery",
			label: "Jewlery",
		},
		{
			name: "men's clothing",
			key: "men's clothing",
			label: "Masculine Clothing",
		},
		{
			name: "women's clothing",
			key: "women's clothing",
			label: "Feminin Clothing",
		},
	];

	const [checkedItems, setCheckedItems] = useState(() => {
		const twoObj = categories.map((category) => ({
			[category.name]: false,
		}));
		const mergedProp = Object.assign({}, ...twoObj);
		return mergedProp;
	});

	const handleChange = (e) => {
		setCheckedItems({
			...checkedItems,
			[e.target.name]: e.target.checked,
		});
	};

	return (
		<div id="shop">
			<CategoriesNav
				handleChange={handleChange}
				checkedItems={checkedItems}
				categories={categories}
			/>
			<ItemsDisplay checkedItems={checkedItems} />
		</div>
	);
}

export default Shop;
