import { useEffect, useState } from "react";
import styles from "../css/Cart.module.css";

function Cart({ cart, removeProd }) {
	const [displayData, setDisplayData] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		setDisplayData([]);
		if (cart.length > 0) {
			cart.map(async (item) => {
				const abortController = new AbortController();
				const signal = abortController.signal;
				const resp = await fetch(
					`https://fakestoreapi.com/products/${item.id}`,
					{ signal }
				);
				const itemData = await resp.json();
				itemData.amount = item.amount;
				setDisplayData((displayData) => [...displayData, itemData]);
				return () => {
					abortController.abort();
				};
			});
		} else if (cart.length === 0) return null;
	}, [cart]);

	useEffect(() => {
		if (displayData.length > 0) {
			setTotalPrice(() =>
				displayData
					.reduce((sum, item) => sum + item.price * item.amount, 0)
					.toFixed(2)
			);
		} else setTotalPrice(0);
	}, [displayData]);

	return (
		<div className={styles.cartDisplay}>
			{displayData.map((item) => {
				return (
					<div key={item.id} className={styles.cartItem}>
						<h1 className={styles.cartTitle}>{item.title}</h1>
						<h2 className={styles.cartPrice}>
							${item.price.toFixed(2)}
						</h2>
						<div className={styles.cartAmount}>X {item.amount}</div>
						<button
							className={styles.deleteItem}
							onClick={removeProd}
							id={item.id}
							data-amount={item.amount}
						>
							<i className="far fa-trash-alt"></i>
						</button>
					</div>
				);
			})}
			<div className={styles.totalPrice}>Total: ${totalPrice}</div>
			<button className={styles.payButton}>Checkout</button>
		</div>
	);
}

export default Cart;
