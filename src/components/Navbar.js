import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";

function Navbar() {
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
			<div id="checkout-section">
				<button
					type="button"
					id="checkout"
					className={styles.checkoutButton}
				>
					<i className="fas fa-shopping-cart"></i>
				</button>
				<div id="items-counter"></div>
			</div>
		</header>
	);
}

export default Navbar;
