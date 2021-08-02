import { useState } from "react";
import styles from "../css/Navbar.module.css";

function LoginSection({ logState, displayName, photoURL, signIn, signOut }) {
	//agregar sign out en photouser

	const [isVisible, setIsVisible] = useState(false);

	const showHideMenu = () => {
		console.log("showhide");
		const menuContent = document.getElementById("signOutMenu").children;
		for (let i = 0; i < menuContent.length; i++) {
			setTimeout(() => {
				setIsVisible(isVisible ? false : true);
			}, i * 50);
		}
	};

	if (logState) {
		const firstName = displayName.split(" ")[0];
		return (
			<div className={styles.logSection} onClick={showHideMenu}>
				<div className={styles.user}>
					<div className={styles.displayName}>{firstName}</div>
					<button className={styles.signOut} id="menuButn">
						<img
							src={photoURL}
							alt="profile"
							className={styles.userPhoto}
						></img>
					</button>
				</div>
				<div id="signOutMenu">
					<button
						onClick={signOut}
						className={`${styles.hidden} ${
							isVisible ? styles.visible : null
						}`}
					>
						Sign out
					</button>
				</div>
			</div>
		);
	} else
		return (
			<div>
				<button className={styles.signIn} onClick={signIn}>
					Sign In
				</button>
			</div>
		);
}

export default LoginSection;
