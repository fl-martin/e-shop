import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import OnSale from "./components/OnSale";
import Details from "./components/Details";
import Cart from "./components/Cart";
import { auth, fStore, provider } from "./Firebase";
import styles from "./css/Body.module.css";
import { useEffect, useState } from "react";

function App() {
	const [cartCounter, setCartCounter] = useState(0);
	const [cart, setCart] = useState([]);
	const [displayName, setDisplayName] = useState(null);
	const [photoURL, setPhotoURL] = useState(null);
	const [userUID, setUserUID] = useState();
	const [email, setEmail] = useState();
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
			setUserUID(user.uid);
			setEmail(user.email);
			setLogState(true);
		} else {
			setLogState(false);
		}
	};

	(function initFirebaseAuth() {
		auth.onAuthStateChanged(authStateObserver);
	})();

	//OBTENER DATOS PARA CART INICIAL SI YA TENIA EL USER

	useEffect(() => {
		if (logState)
			fStore
				.collection("carts")
				.doc(email)
				.get()
				.then((snapshot) => {
					if (snapshot.data().cart) {
						//corregir para cuando no hay cart
						setCart(snapshot.data().cart);
						setCartCounter(
							snapshot
								.data()
								.cart.reduce(
									(valorAnt, valorAct) =>
										valorAnt + valorAct.amount,
									0
								)
						);
					}
				});
	}, [logState, email]);

	useEffect(() => {
		if (logState) {
			//esto es garantia de que ya estan cargados los datos del user? No, set es async
			fStore.collection("carts").doc(email).set({ cart });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cart, email]);

	const addProduct = (e) => {
		setCartCounter(() => cartCounter + 1);
		if (cart.every((item) => item.id !== e.target.id)) {
			setCart([...cart, { id: e.target.id, amount: 1 }]);
		} else {
			const itemIndex = cart.findIndex((item) => item.id === e.target.id);
			const id = cart[itemIndex].id;
			setCart(
				cart.map((it) =>
					it.id === id ? { ...it, amount: it.amount + 1 } : it
				)
			);
		}
	};

	const removeProd = (e) => {
		setCartCounter(() => cartCounter - 1 * e.target.dataset.amount);
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
