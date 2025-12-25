import admin from 'firebase-admin';

// For server-side usage with Firebase
// Initialize Firebase Admin SDK with only database URL, without credentials for public access

let database;

try {
  // Check if already initialized to prevent multiple initializations
  if (admin.apps.length === 0) {
    // Initialize without credentials for public database access
    admin.initializeApp({
      databaseURL: "https://bdgwin-9b9da-default-rtdb.firebaseio.com"
    });
  }
  
  // Get the default database instance
  database = admin.database();
} catch (error) {
  console.error('Firebase initialization error:', error);
  throw error;
}

export { database };