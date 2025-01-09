const socket = io();

function onChatMessage(text) {
    var message = document.createElement('li');
    message.textContent = text;
    document.getElementById('chat').appendChild(message);    
}

function onChatSubmit(event) {
    event.preventDefault();
    var input = document.getElementById('chat-input');
    var text = input.value;
    input.value = '';
    // onChatMessage(text);
    socket.emit('msg', text);
}

document.getElementById('say-button').addEventListener('click', onChatSubmit);
document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        onChatSubmit(event);
    }
});

socket.on('msg', onChatMessage);