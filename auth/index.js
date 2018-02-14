import firebase from 'firebase/app';
import 'firebase/auth';
import config from '../fb-conf';

firebase.initializeApp(config);

function auth () {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      location.href = '/';
    } else {
      const provider = new firebase.auth.TwitterAuthProvider();
      const result = firebase.auth().signInWithPopup(provider);
    }
  });
}

auth();
