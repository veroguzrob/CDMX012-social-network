/* eslint-disable max-len */
// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';

import { auth } from './firebaseConfig.js';

export const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const singInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
