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
		console.log(e.target.id);
		setCartCounter(() => cartCounter + 1);
		setCart(() => [...cart, e.target.id]);
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
