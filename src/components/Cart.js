import { useEffect, useState } from "react";
import styles from "../css/Cart.module.css";

function Cart({ cart }) {
	const [displayData, setDisplayData] = useState([]);

	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		cart.map(async (item) => {
			const resp = await fetch(
				`https://fakestoreapi.com/products/${item.id}`
			);
			const itemData = await resp.json();
			itemData.amount = item.amount;
			setDisplayData((displayData) => [...displayData, itemData]);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (displayData.length > 0) {
			setTotalPrice(() =>
				displayData.reduce(
					(sum, item) => sum + item.price * item.amount,
					0
				)
			);
		}
	}, [displayData]);

	return (
		<div className={styles.cartDisplay}>
			{displayData.map((item) => {
				return (
					<div key={item.id} className={styles.cartItem}>
						<h1 className={styles.cartTitle}>{item.title}</h1>
						<h2 className={styles.cartPrice}>${item.price}</h2>
						<div className={styles.cartAmount}>X {item.amount}</div>
					</div>
				);
			})}
			<div className={styles.totalPrice}>Total: ${totalPrice}</div>
			<button className={styles.payButton}>Buy</button>
		</div>
	);
}

export default Cart;
