//import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
							<h2 className={styles.price}>${item.price}</h2>
							<h3 className={styles.ItemTitle}>{item.title}</h3>
							<div className={styles.itemButtons}>
								<Link
									to={{
										pathname: `/shop/${item.id}`,
										state: {
											title: item.title,
											price: item.price,
											description: item.description,
											image: item.image,
											id: item.id,
										},
									}}
									className={styles.detailButton}
								>
									Details
								</Link>
								<button
									className={styles.buyButton}
									onClick={props.addProd}
									id={item.id}
								>
									Add to Cart
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
