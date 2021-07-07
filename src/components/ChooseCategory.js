import styles from "../css/ItemsDisplay.module.css";
import { Link } from "react-router-dom";

function ChooseCategory(props) {
	let counter = 0;
	for (const item in props.checkedItems) {
		if (props.checkedItems[item] === true) {
			counter++;
		}
	}
	if (counter !== 0) return null;
	else
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
}

export default ChooseCategory;
