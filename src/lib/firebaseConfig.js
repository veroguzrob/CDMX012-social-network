/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBWmRVwu31CWbMSpT_4wJYCOZIfO0g5SnQ',
  authDomain: 'book-lovers-9482b.firebaseapp.com',
  projectId: 'book-lovers-9482b',
  storageBucket: 'book-lovers-9482b.appspot.com',
  messagingSenderId: '801993614327',
  appId: '1:801993614327:web:30165cbeb97bad16d104f2',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth();

// Initialize Cloud Firestore
export const db = getFirestore();
