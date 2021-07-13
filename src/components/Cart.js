import { useEffect, useState } from "react";

function Cart({ cart }) {
	const [displayData, setDisplayData] = useState([]);

	useEffect(() => {
		cart.map(async (item) => {
			const resp = await fetch(
				`https://fakestoreapi.com/products/${item}`
			);
			const itemData = await resp.json();
			setDisplayData((displayData) => [...displayData, itemData]);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(displayData);

	return <div>DISPLAY ITEMS IN CART REMAINING (SHOWED IN CONSOLE)</div>;
}

export default Cart;
