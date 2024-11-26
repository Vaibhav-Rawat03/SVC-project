const button = document.getElementById('magicButton');
const message = document.getElementById('message');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Change the text and style of the message
    message.textContent = "Ta-da! You've clicked the magic button!";
    message.style.color = "#6200ea";
    message.style.fontSize = "20px";
});