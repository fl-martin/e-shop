import { useEffect, useState } from "react";
import styles from "../css/ItemsDisplay.module.css";
import { format, nextDay, formatDuration, intervalToDuration } from "date-fns";

function OnSale() {
	const [displayData, setDisplayData] = useState([]);

	const date = new Date();
	const futureDate = nextDay(date, 1).setHours(0, 0, 0, 0);
	const untilDate = format(futureDate, "dd/MM");

	const duration = intervalToDuration({ start: date, end: futureDate });
	const formatedDuration = formatDuration(duration, {
		format: ["days", "hours", "minutes", "seconds"],
	});
	console.log(formatedDuration); //falta formating  hacerlo una funcion a cada segundo

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
				{untilDate}🔥
				<br />
				<div className={styles.timeCounter}>
					{formatedDuration} to go, don't loose your chance!
				</div>
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
