import { useEffect, useState } from "react";
import styles from "../css/ItemsDisplay.module.css";
import { Link } from "react-router-dom";
import { format, nextDay, formatDuration, intervalToDuration } from "date-fns";

function OnSale({ addProd }) {
	const [displayData, setDisplayData] = useState([]);

	const [counter, setCounter] = useState();

	useEffect(
		() =>
			setInterval(() => {
				setCounter(() => {
					const date = new Date();
					const futureDate = nextDay(date, 1).setHours(0, 0, 0, 0);
					const duration = intervalToDuration({
						start: date,
						end: futureDate,
					});
					const formatedDuration = formatDuration(duration, {
						format: ["days", "hours", "minutes", "seconds"],
					});
					return formatedDuration;
				});
			}),
		[]
	);

	const date = new Date();
	const futureDate = nextDay(date, 1).setHours(0, 0, 0, 0);
	const untilDate = format(futureDate, "dd/MM");

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
		<div className={styles.OnSale}>
			<div className={styles.dateOnSale}>
				Products on sale until <br />
				{untilDate}🔥
				<br />
				<div className={styles.timeCounter}>{counter} to go!</div>
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
										onClick={addProd}
										id={item.id}
									>
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
