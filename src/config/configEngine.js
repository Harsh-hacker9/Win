import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name (equivalent to __dirname in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configViewEngine = (app) => {
    // Set the view engine to EJS
    app.set('view engine', 'ejs');
    
    // Set the views directory to the views folder in src
    app.set('views', path.join(__dirname, '../views'));
    
    // Serve static files from the public directory
    app.use(express.static(path.join(__dirname, '../public')));
};

export default configViewEngine;