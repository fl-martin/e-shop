import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
// eslint-disable-next-line no-unused-vars
import styles from "./css/Body.module.css";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/shop" component={Shop} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
