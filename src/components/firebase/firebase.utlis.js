import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDuDMux8NyG-13qCLEZUNEKjpGvM8RXRJ4',
	authDomain: 'red-onion-6de15.firebaseapp.com',
	databaseURL: 'https://red-onion-6de15.firebaseio.com',
	projectId: 'red-onion-6de15',
	storageBucket: 'red-onion-6de15.appspot.com',
	messagingSenderId: '1061409350155',
	appId: '1:1061409350155:web:6b6600d78003089d15dd0e',
	measurementId: 'G-33D4P8B7F8',
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: 'Select a Account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
