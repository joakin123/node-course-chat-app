const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('createMessage', function (newMessage) {
        var message = {...newMessage, createdAt: 567};
        console.log('New Message:', message);
    });
    socket.emit('newMessage', {
        from: 'akinwole',
        text: 'Hey, I am akinwole',
        createdAt: 145
    });

    socket.on('disconnect', () => {
        console.log('user was disconnected');
    })
});

server.listen(port, () => {
    console.log(`App is running on port ${port}`);
})