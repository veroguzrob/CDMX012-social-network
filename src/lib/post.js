/* eslint-disable import/no-unresolved */
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';
import { db } from './firebaseConfig.js';

export const createPost = (text) => addDoc(collection(db, 'posts'), { text });
