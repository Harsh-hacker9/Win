// For server-side usage with public Firebase Realtime Database
import { initializeApp } from 'firebase/app';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  databaseURL: "https://bdgwin-9b9da-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// In production, the database will connect to the URL specified in firebaseConfig
// Make sure your Firebase Realtime Database rules allow the operations your app needs

export { database };