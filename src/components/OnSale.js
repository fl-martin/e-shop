import { useEffect, useState } from "react";
import styles from "../css/ItemsDisplay.module.css";
import { format, add, differenceInHours, hoursToMinutes } from "date-fns";

function OnSale() {
	const [displayData, setDisplayData] = useState([]);

	const date = new Date();
	const futureDate = add(date, {
		days: 1,
	});
	const remains = differenceInHours(futureDate, date);
	const remainsMinutes = hoursToMinutes(remains);

	const untilDate = format(futureDate, "dd/MM/yyyy");

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
		<div>
			<div className={styles.dateOnSale}>
				Products on sale until <br />
				{untilDate}!🔥
			</div>
			<div className={styles.ItemsDisplay}>
				{displayData.map((item) => {
					if (item.price < 50) {
						return (
							<div key={item.id} className={styles.Item}>
								<img
									alt={item.title}
									src={item.image}
									className={styles.ItemPhoto}
								/>
								<h2 className={styles.price}>${item.price}</h2>
								<h3 className={styles.ItemTitle}>
									{item.title}
								</h3>
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
		</div>
	);
}

export default OnSale;
