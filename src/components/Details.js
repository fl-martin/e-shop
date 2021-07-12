import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../css/Details.module.css";

function Details({ match }) {
	console.log(match);
	const location = useLocation();
	const props = location.state;
	console.log(props);
	return (
		<div className={styles.details}>
			<img
				src={props.image}
				alt={props.title}
				className={styles.prodImg}
			/>
			<div>
				<Link to="/shop" className={styles.backToShop}>
					Back to Shop
				</Link>
			</div>
			<div className={styles.prodInfo}>
				<div>
					<h1 className={styles.prodTitle}>{props.title}</h1>
					<button className={styles.buyButton}>Add to Cart</button>
				</div>
				<h2 className={styles.prodPrice}>${props.price}</h2>
				<p className={styles.prodDescr}>{props.description}</p>
			</div>
		</div>
	);
}

export default Details;
