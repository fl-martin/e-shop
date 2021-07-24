import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import OnSale from "./components/OnSale";
import Details from "./components/Details";
import Cart from "./components/Cart";
import styles from "./css/Body.module.css";
import { useState } from "react";

function App() {
	const [cartCounter, setCartCounter] = useState(0);
	const [cart, setCart] = useState([]);

	const addProduct = (e) => {
		setCartCounter(() => cartCounter + 1);
		setCart(() => {
			if (cart.some((item) => item.id === e.target.id)) {
				const itemIndex = cart.findIndex(
					(item) => item.id === e.target.id
				);
				console.log("adding");
				return [
					...cart,
					(cart[itemIndex].amount = cart[itemIndex].amount + 0.5),
				];
			} else return [...cart, { id: e.target.id, amount: 1 }];
		});
	};

	return (
		<HashRouter>
			<div className={styles.App}>
				<Navbar cartCounter={cartCounter} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/shop">
						<Shop addProd={addProduct} />
					</Route>
					<Route path="/onsale">
						<OnSale addProd={addProduct} />
					</Route>
					<Route path="/shop/:id">
						<Details addProd={addProduct} />
					</Route>
					<Route path="/cart">
						<Cart cart={cart} />
					</Route>
				</Switch>
			</div>
		</HashRouter>
	);
}

export default App;
