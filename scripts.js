const cake = 'Cake';
var chatbox = document.getElementById('chatbox');
var startButton = document.getElementById('startButton');
chatbox.innerHTML = `Hello ${cake}`;

// Scene 1
startButton.addEventListener('click', () => {
    chatbox.style.display = 'block';
    startButton.style.display = 'none';
})