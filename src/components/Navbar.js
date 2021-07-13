import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";

function Navbar(props) {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>myShop</h1>
			<nav className={styles.navigation}>
				<Link to="/" className={styles.navButton}>
					Home
				</Link>
				<Link to="/shop" className={styles.navButton}>
					Shop
				</Link>
				<Link to="/onsale" className={styles.navButton}>
					On Sale!
				</Link>
			</nav>
			<Link to="cart" className={styles.checkoutSection}>
				<button
					type="button"
					id="checkout"
					className={styles.checkoutButton}
				>
					<i className="fas fa-shopping-cart"></i>
				</button>
				<div id="items-counter">{props.cartCounter}</div>
			</Link>
		</header>
	);
}

export default Navbar;
