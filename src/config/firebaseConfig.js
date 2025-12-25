import admin from 'firebase-admin';

// Initialize the Firebase Admin SDK
// Using only database URL without credentials for public access

try {
  // Check if already initialized to prevent multiple initializations
  if (admin.apps.length === 0) {
    admin.initializeApp({
      databaseURL: "https://bdgwin-9b9da-default-rtdb.firebaseio.com"
    });
  }
} catch (error) {
  console.error('Firebase initialization error:', error);
}

const database = admin.database();

export { database };