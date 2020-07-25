import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA_eXfWoDepjtsINyxZyd8Gnt3xd1umbnw',
  authDomain: 'red-onion-7070.firebaseapp.com',
  databaseURL: 'https://red-onion-7070.firebaseio.com',
  projectId: 'red-onion-7070',
  storageBucket: 'red-onion-7070.appspot.com',
  messagingSenderId: '694123085199',
  appId: '1:694123085199:web:73e6e6b41c0331601a9ffa',
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: 'Select a Account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
