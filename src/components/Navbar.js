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
				<div className={styles.checkoutButton}>
					<i className="fas fa-shopping-cart"></i>
				</div>
				<div className={styles.itemsCounter}>{props.cartCounter}</div>
			</Link>
		</header>
	);
}

export default Navbar;
