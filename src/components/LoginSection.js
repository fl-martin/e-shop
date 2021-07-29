import styles from "../css/Navbar.module.css";

function LoginSection({ logState, displayName, photoURL, signIn, signOut }) {
	//agregar sign out en photouser

	if (logState) {
		const firstName = displayName.split(" ")[0];
		return (
			<div className={styles.user}>
				<div className={styles.displayName}>{firstName}</div>
				<button onClick={signOut}>
					<img
						src={photoURL}
						alt="profile"
						className={styles.userPhoto}
					></img>
				</button>
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
