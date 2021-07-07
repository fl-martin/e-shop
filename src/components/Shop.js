import CategoriesNav from "./CategoriesNav";
import ItemsDisplay from "./ItemsDisplay";
import ChooseCategory from "./ChooseCategory";
import { useState } from "react";
import styles from "../css/Shop.module.css";

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
			[category.name]: true,
		}));
		const mergedProp = Object.assign({}, ...twoObj);
		return mergedProp;
	});

	/*useEffect(()=> {

	},[checkedItems])*/ //iterar por el objeto y si todas son falsas devolver cartel de choose category, si hay alguna verdadera devolver null (hacer esto adentro de un componente que se llame asi, pasar como prop checkedItems)

	const handleChange = (e) => {
		setCheckedItems({
			...checkedItems,
			[e.target.name]: e.target.checked,
		});
	};

	return (
		<div className={styles.shop}>
			<CategoriesNav
				handleChange={handleChange}
				checkedItems={checkedItems}
				categories={categories}
			/>
			<ItemsDisplay checkedItems={checkedItems} />
			<ChooseCategory checkedItems={checkedItems} />
		</div>
	);
}

export default Shop;
