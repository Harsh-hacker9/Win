// For server-side usage with public Firebase Realtime Database
// We'll use the client-side Firebase SDK with minimal configuration
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  databaseURL: "https://bdgwin-9b9da-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };