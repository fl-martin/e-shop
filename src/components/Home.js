import styles from "../css/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className={styles.Home}>
			<h1 className={styles.h1}>Welcome to myShop!</h1>
			<p className={styles.p}>
				Click <Link to="/shop">here</Link> to start. Or check our
				products <Link to="/onsale">On sale</Link>!
			</p>
		</div>
	);
}

export default Home;
