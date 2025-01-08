const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(`${__dirname}/public`));

io.on('connection', (socket) => {
  console.log('New WebSocket connection');

  socket.on('chat', (message) => {
    console.log('Message:', message);
    io.emit('chat', `{message} from ${socket.id}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(8080, () => {
  console.log('Server started on http://localhost:8080');
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});