import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import OnSale from "./components/OnSale";
// eslint-disable-next-line no-unused-vars
import styles from "./css/Body.module.css";

function App() {
	return (
		<BrowserRouter>
			<div className={styles.App}>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/shop" component={Shop} />
					<Route path="/onsale" component={OnSale} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
