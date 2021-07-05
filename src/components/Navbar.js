import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header>
			<h1>myShop</h1>
			<nav>
				<Link to="/home">Home</Link>
				<Link to="/shop">Shop</Link>
			</nav>
			<div id="checkout-section">
				<button type="button" id="checkout">
					<i className="fas fa-shopping-cart"></i>
				</button>
				<div id="items-counter"></div>
			</div>
		</header>
	);
}

export default Navbar;
