/* eslint-disable import/no-unresolved */
import {
  collection, addDoc, onSnapshot, doc, deleteDoc, getDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js';
import { db } from './firebaseConfig.js';

export const createPost = (text) => addDoc(collection(db, 'posts'), { text });

export const onGetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const updatePost = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);
