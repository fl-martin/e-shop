function CategoriesNav(props) {
	return (
		<nav>
			{props.categories.map((cat) => (
				<label key={cat.key}>
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
