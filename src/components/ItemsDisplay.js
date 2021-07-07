//import { Link } from "react-router-dom";
//import Details from "./Details";
import { useEffect, useState } from "react";
import styles from "../css/ItemsDisplay.module.css";

function ItemsDisplay(props) {
	const [displayData, setDisplayData] = useState([]);

	useEffect(
		() =>
			(async () => {
				const resp = await fetch("https://fakestoreapi.com/products");
				const data = await resp.json();
				setDisplayData(data);
			})(),
		[]
	);

	return (
		<div className={styles.ItemsDisplay}>
			{displayData.map((item) => {
				if (props.checkedItems[item.category]) {
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

export default ItemsDisplay;
