import { database } from './firebaseConfig.js';
import { ref, get, set, update, remove } from 'firebase/database';

// Create a connection object that mimics the MySQL pool interface but uses Firebase
const connection = {
    // Function to get data from Firebase
    async execute(queryPath, params = null) {
        try {
            const dbRef = ref(database, queryPath);
            const snapshot = await get(dbRef);
            
            if (snapshot.exists()) {
                const data = snapshot.val();
                
                // Convert Firebase data structure to MySQL-like format
                if (typeof data === 'object' && data !== null) {
                    // If it's an object with keys, convert to array format similar to MySQL results
                    if (Object.keys(data).some(key => !isNaN(key))) {
                        return [Object.values(data), null];
                    } else {
                        // If it's a single object
                        return [[data], null];
                    }
                } else {
                    // If it's a primitive value
                    return [[{ value: data }], null];
                }
            } else {
                return [[], null];
            }
        } catch (error) {
            console.error('Firebase query error:', error);
            throw error;
        }
    },
    
    // Function to set/update data in Firebase
    async query(queryPath, params = null) {
        try {
            if (params && params.length > 0) {
                // This is an update/insert operation
                const dbRef = ref(database, queryPath);
                await set(dbRef, params[0]); // Assuming params[0] contains the data
                return [true, null];
            } else {
                // This is a select operation
                return this.execute(queryPath, params);
            }
        } catch (error) {
            console.error('Firebase query error:', error);
            throw error;
        }
    },
    
    // Additional utility functions
    async insertData(path, data) {
        try {
            const dbRef = ref(database, path);
            await set(dbRef, data);
            return true;
        } catch (error) {
            console.error('Firebase insert error:', error);
            throw error;
        }
    },
    
    async updateData(path, data) {
        try {
            const dbRef = ref(database, path);
            await update(dbRef, data);
            return true;
        } catch (error) {
            console.error('Firebase update error:', error);
            throw error;
        }
    },
    
    async deleteData(path) {
        try {
            const dbRef = ref(database, path);
            await remove(dbRef);
            return true;
        } catch (error) {
            console.error('Firebase delete error:', error);
            throw error;
        }
    }
};

export default connection;