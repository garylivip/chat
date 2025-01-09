process.env.DEBUG = 'app';

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const winston = require('winston');
const debug = require('debug')('app');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set up winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [WINSTON] [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

app.use(express.static(`${__dirname}/public`));

io.on('connection', (socket) => {
  const socketId = socket.id;
  logger.info(`New WebSocket connection: ${socketId}`);
  debug(`New WebSocket connection: ${socketId}`);

  socket.on('msg', (message) => {
    logger.info(`Message from ${socketId}: ${message}`);
    debug(`Message from ${socketId}: ${message}`);
    io.emit("msg", `[User: ${socketId}] ${message}`);
  });

  socket.on('disconnect', () => {
    logger.info(`User disconnected: ${socketId}`);
    debug(`User disconnected: ${socketId}`);
  });
});

server.listen(8080, () => {
  logger.info('Server started on http://localhost:8080');
  debug('Server started on http://localhost:8080');
}).on('error', (err) => {
  logger.error('Failed to start server:', err);
  debug('Failed to start server:', err);
});
