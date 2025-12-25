import axios from 'axios';
import { databaseUrl } from './firebaseConfig.js';

// Create a connection object that mimics the MySQL pool interface but uses Firebase REST API
const connection = {
    // Function to parse SQL-like queries and convert to Firebase paths
    async execute(queryPath, params = null) {
        try {
            // Check if this looks like a SQL query
            if (typeof queryPath === 'string' && (queryPath.toUpperCase().includes('SELECT') || queryPath.toUpperCase().includes('FROM'))) {
                // Parse simple SQL queries like 'SELECT `field` FROM table'
                const sqlMatch = queryPath.match(/SELECT\s+`?([^`\s,]+)`?\s+FROM\s+(\w+)/i);
                if (sqlMatch) {
                    const [, field, table] = sqlMatch;
                    const response = await axios.get(`${databaseUrl}/${table}.json`);
                    
                    if (response.data !== null && response.data !== undefined) {
                        let data = response.data;
                        
                        if (Array.isArray(data)) {
                            // If it's already an array, return with the requested field
                            return [data.map(item => ({ [field]: item[field] })), null];
                        } else if (typeof data === 'object') {
                            // If it's an object with Firebase-generated keys
                            const values = Object.keys(data).map(key => ({
                                id: key,
                                ...data[key]
                            }));
                            // Filter to only include the requested field
                            return [values.map(item => ({ [field]: item[field] })), null];
                        } else {
                            // If it's a primitive value
                            return [[{ [field]: data }], null];
                        }
                    } else {
                        return [[], null];
                    }
                }
            }
            
            // If not a SQL query, treat as direct path
            const response = await axios.get(`${databaseUrl}/${queryPath}.json`);
            
            if (response.data !== null && response.data !== undefined) {
                const data = response.data;
                
                // Convert Firebase data structure to MySQL-like format
                if (Array.isArray(data)) {
                    // If it's already an array
                    return [data, null];
                } else if (typeof data === 'object') {
                    // If it's an object with Firebase-generated keys
                    const values = Object.keys(data).map(key => ({
                        id: key,
                        ...data[key]
                    }));
                    return [values, null];
                } else {
                    // If it's a primitive value
                    return [[{ value: data }], null];
                }
            } else {
                // Return empty array when no data exists
                return [[], null];
            }
        } catch (error) {
            console.error('Firebase query error:', error);
            // Return empty array in case of error to match MySQL behavior
            return [[], null];
        }
    },
    
    // Function to handle SQL-like queries
    async query(sqlQuery, params = null) {
        try {
            // For SQL queries, pass to execute function
            if (typeof sqlQuery === 'string' && (sqlQuery.toUpperCase().includes('SELECT') || sqlQuery.toUpperCase().includes('FROM'))) {
                return await this.execute(sqlQuery, params);
            }
            
            // For direct path operations
            if (params && params.length > 0) {
                // This is an update/insert operation
                await axios.put(`${databaseUrl}/${sqlQuery}.json`, params[0]);
                return [true, null];
            } else {
                // This is a select operation
                return this.execute(sqlQuery, params);
            }
        } catch (error) {
            console.error('Firebase query error:', error);
            throw error;
        }
    },
    
    // Additional utility functions
    async insertData(path, data) {
        try {
            await axios.put(`${databaseUrl}/${path}.json`, data);
            return true;
        } catch (error) {
            console.error('Firebase insert error:', error);
            throw error;
        }
    },
    
    async updateData(path, data) {
        try {
            await axios.patch(`${databaseUrl}/${path}.json`, data);
            return true;
        } catch (error) {
            console.error('Firebase update error:', error);
            throw error;
        }
    },
    
    async deleteData(path) {
        try {
            await axios.delete(`${databaseUrl}/${path}.json`);
            return true;
        } catch (error) {
            console.error('Firebase delete error:', error);
            throw error;
        }
    }
};

export default connection;