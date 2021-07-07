import { useEffect, useState } from "react";
import styles from "../css/ItemsDisplay.module.css";

function OnSale() {
	const [displayData, setDisplayData] = useState([]);

	const untilDate = new Date().toString();

	useEffect(
		() =>
			(async () => {
				const resp = await fetch("https://fakestoreapi.com/products");
				const data = await resp.json();
				setDisplayData(data);
				console.log(data);
			})(),
		[]
	);

	return (
		<div className={styles.ItemsDisplay}>
			<h1 className={styles.dateOnSale}>
				Products on sale until {untilDate}!🔥
			</h1>
			{displayData.map((item) => {
				if (item.price < 50) {
					return (
						<div key={item.id} className={styles.Item}>
							<img
								alt={item.title}
								src={item.image}
								className={styles.ItemPhoto}
							/>
							<h2>${item.price}</h2>
							<h3 className={styles.ItemTitle}>{item.title}</h3>
							<div className={styles.itemButtons}>
								<button className={styles.detailButton}>
									Details
								</button>
								<button className={styles.buyButton}>
									Add to cart
								</button>
							</div>
						</div>
					);
				} else return null;
			})}
		</div>
	);
}

export default OnSale;
