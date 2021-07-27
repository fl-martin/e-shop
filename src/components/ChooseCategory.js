import styles from "../css/ItemsDisplay.module.css";
import { Link } from "react-router-dom";

function ChooseCategory({ checkedItems }) {
	const checkedValues = Object.values(checkedItems);
	if (checkedValues.every((item) => item === false))
		return (
			<div className={styles.ChooseCategory}>
				<h1 className={styles.h1}>
					Choose a category to start shopping.
				</h1>
				<p className={styles.p}>
					Or check our products <Link to="/onsale">On sale</Link>!
				</p>
			</div>
		);
	else return null;
}

export default ChooseCategory;
