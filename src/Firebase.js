import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA3JD4hGy5oE0gP7dC94cMfSL_WBjqlCrs",
	authDomain: "myshop-fl-martin.firebaseapp.com",
	projectId: "myshop-fl-martin",
	storageBucket: "myshop-fl-martin.appspot.com",
	messagingSenderId: "765268810851",
	appId: "1:765268810851:web:7dac2a34f89eeee286ac56",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fStore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export { auth, provider, fStore };
