import 'dotenv/config';

import express from 'express';
import configViewEngine from './config/configEngine.js';
import routes from './routes/web.js';
import cronJobContronler from './controllers/cronJobContronler.js';
import socketIoController from './controllers/socketIoController.js';
import path from 'path';
import cookieParser from 'cookie-parser';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const publicPath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');

// console.log("Setting up static files path:", publicPath);

const app = express();
import { createServer } from 'http';

const server = createServer(app);
import { Server } from 'socket.io';

const io = new Server(server);

const port = process.env.PORT || 3000;

app.use(cookieParser());
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup viewEngine
configViewEngine(app);
// init Web Routes
routes.initWebRouter(app);

// Cron game 1 Phut
cronJobContronler.cronJobGame1p(io);

// Check xem ai connect vào sever
socketIoController.sendMessageAdmin(io);

// Rendering the index.ejs view in a route
app.get('/', (req, res) => {
    res.render('home/index'); // Ensure 'home/index' matches the actual path to the view file
});

server.listen(port, () => {
    console.log("Connected success port: " + port);
});

