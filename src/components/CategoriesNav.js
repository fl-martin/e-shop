import styles from "../css/CategoriesNav.module.css";

function CategoriesNav(props) {
	return (
		<nav className={styles.categoriesNav}>
			{props.categories.map((cat) => (
				<label key={cat.key} className={styles.catButton}>
					{cat.label}
					<input
						type="checkbox"
						name={cat.name}
						onChange={props.handleChange}
						checked={props.checkedItems[cat.name]}
					/>
				</label>
			))}
		</nav>
	);
}

export default CategoriesNav;
