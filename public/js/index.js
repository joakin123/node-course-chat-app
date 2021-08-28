var socket = io();

socket.on('connect', function () {
    console.log('connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.emit('createMessage', {
    from: 'joshua',
    text: 'Hello, how are you doing'
});

socket.on('newMessage', (newMessage) => {
    console.log('newMessage', newMessage);
});