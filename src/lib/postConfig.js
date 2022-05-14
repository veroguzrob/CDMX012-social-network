/* eslint-disable import/no-unresolved */
import {
  collection, addDoc, getDocs, onSnapshot, doc, deleteDoc, getDoc,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';
import { db } from './firebaseConfig.js';

export const createPost = (text) => addDoc(collection(db, 'posts'), { text });

export const getPosts = () => getDocs(collection(db, 'posts'));

export const onGetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));
