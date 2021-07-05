//import { Link } from "react-router-dom";
//import Details from "./Details";
import { useEffect, useState } from "react";

function ItemsDisplay(props) {
	const [displayData, setDisplayData] = useState([]);

	useEffect(() => console.log(displayData), [displayData]);

	useEffect(
		() =>
			(async () => {
				const resp = await fetch("https://fakestoreapi.com/products");
				const data = await resp.json();
				setDisplayData(data);
			})(),
		[]
	);

	return (
		<div>
			<ul>
				{displayData.map((item) => {
					if (props.checkedItems[item.category]) {
						return <li key={item.id}>{item.title}</li>;
					} else return null;
				})}
			</ul>
		</div>
	);
}

export default ItemsDisplay;
