/* @flow */

import firebase from 'firebase/app';
import type { User } from 'firebase';

function checkAuth() {
  return (new Promise((res, rej) => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) rej();
      res(firebase.auth().currentUser);
    });
  }): Promise<User>);
}

export default checkAuth;
