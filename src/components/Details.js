import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../css/Details.module.css";

function Details({ addProd }) {
	const [displayData, setDisplayData] = useState({});
	const { id } = useParams();

	useEffect(
		() =>
			(async () => {
				console.log("fetchin");
				const resp = await fetch(
					`https://fakestoreapi.com/products/${id}`
				);
				const data = await resp.json();
				setDisplayData(data);
			})(),
		[id]
	);

	return (
		<div className={styles.details}>
			<img
				src={displayData.image}
				alt={displayData.title}
				className={styles.prodImg}
			/>
			<div>
				<Link to="/shop" className={styles.backToShop}>
					Back to Shop
				</Link>
			</div>
			<div className={styles.prodInfo}>
				<div>
					<h1 className={styles.prodTitle}>{displayData.title}</h1>
					<button
						className={styles.buyButton}
						onClick={addProd}
						id={displayData.id}
					>
						Add to Cart
					</button>
				</div>
				<h2 className={styles.prodPrice}>${displayData.price}</h2>
				<p className={styles.prodDescr}>{displayData.description}</p>
			</div>
		</div>
	);
}

export default Details;
