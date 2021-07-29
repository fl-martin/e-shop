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

	/*useEffect(() => {
		if (logState)
			setCart([
				fStore
					.collection("carts")
					.doc(email)
					.get()
					.then((doc) => doc.data()),
			]);
	}, [logState, email]);*/

	useEffect(() => {
		if (logState) {
			//esto es garantia de que ya estan cargados los datos del user? No, set es async
			fStore.collection("carts").doc(email).set({ cart });
		}
	}, [cart, email, logState]);

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
					(cart[itemIndex].amount = cart[itemIndex].amount + 0.5), //mal, agrega numeros al array y suma el doble de lo que codee
				];
			}
		});
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
