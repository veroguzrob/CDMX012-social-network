/* eslint-disable max-len */
// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js';

import { auth } from './firebaseConfig.js';

export const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const singInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const singOutUser = () => signOut(auth);
