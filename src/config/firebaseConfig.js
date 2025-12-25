import admin from 'firebase-admin';

// Initialize the Firebase Admin SDK
// For server-side applications, we can initialize with database URL only
// This is simpler and doesn't require a service account for basic operations

// Check if already initialized to prevent multiple initializations
if (admin.apps.length === 0) {
  admin.initializeApp({
    databaseURL: "https://bdgwin-9b9da-default-rtdb.firebaseio.com"
  });
}

const database = admin.database();

export { database };