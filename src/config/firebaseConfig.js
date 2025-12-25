import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNyWveM_EzQmWQ4Cid1q6JUM4BQR7Fv6M",
  authDomain: "bdgwin-9b9da.firebaseapp.com",
  databaseURL: "https://bdgwin-9b9da-default-rtdb.firebaseio.com",
  projectId: "bdgwin-9b9da",
  storageBucket: "bdgwin-9b9da.firebasestorage.app",
  messagingSenderId: "599664410972",
  appId: "1:599664410972:web:c10512b38964b8d582c199",
  measurementId: "G-C3TQNP9M4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };