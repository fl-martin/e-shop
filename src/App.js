import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import OnSale from "./components/OnSale";
import Details from "./components/Details";
import Cart from "./components/Cart";
import { auth, fStore, provider } from "./Firebase";
import styles from "./css/Body.module.css";
import { useState } from "react";

function App() {
	const [cartCounter, setCartCounter] = useState(0);
	const [cart, setCart] = useState([]);
	const [displayName, setDisplayName] = useState(null);
	const [photoURL, setPhotoURL] = useState(null);
	const [emailVerified, setEmailVerified] = useState();
	const [logState, setLogState] = useState(false);

	const signIn = () => {
		auth.signInWithPopup(provider);
	};

	const signOut = () => {
		auth.signOut();
	};

	const authStateObserver = (user) => {
		if (user) {
			setDisplayName(user.displayName);
			setPhotoURL(user.photoURL);
			setEmailVerified(user.emailVerified);
			setLogState(true);
		} else {
			setLogState(false);
		}
	};

	(function initFirebaseAuth() {
		auth.onAuthStateChanged(authStateObserver);
	})(); //todo el tiempo porque cuando es falso muestro boton sign in

	const addProduct = (e) => {
		setCartCounter(() => cartCounter + 1);
		setCart(() => {
			if (cart.every((item) => item.id !== e.target.id)) {
				return [...cart, { id: e.target.id, amount: 1 }];
			} else {
				const itemIndex = cart.findIndex(
					(item) => item.id === e.target.id
				);
				return [
					...cart,
					(cart[itemIndex].amount = cart[itemIndex].amount + 0.5),
				];
			}
		});
	};

	const removeProd = (e) => {
		setCartCounter(() => cartCounter - 1);
		setCart(() => cart.filter((item) => item.id !== e.target.id));
	};

	return (
		<HashRouter>
			<div className={styles.App}>
				<Navbar
					cartCounter={cartCounter}
					signIn={signIn}
					signOut={signOut}
					displayName={displayName}
					photoURL={photoURL}
					logState={logState}
				/>
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
						<Cart cart={cart} removeProd={removeProd} />
					</Route>
				</Switch>
			</div>
		</HashRouter>
	);
}

export default App;
