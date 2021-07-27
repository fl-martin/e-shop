import ChooseCategory from "./ChooseCategory";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/ItemsDisplay.module.css";

function ItemsDisplay(props) {
	const [displayData, setDisplayData] = useState([]);

	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;
		(async () => {
			const resp = await fetch("https://fakestoreapi.com/products", {
				signal,
			});
			const data = await resp.json();
			setDisplayData(data);
		})();
		return () => {
			abortController.abort();
		};
	}, []);
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
							<h2 className={styles.price}>
								${item.price.toFixed(2)}
							</h2>
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
			<ChooseCategory checkedItems={props.checkedItems} />
		</div>
	);
}

export default ItemsDisplay;
