const socket = new WebSocket("ws://localhost:8080/ws");

socket.onmessage = function(event) {
    const msg = JSON.parse(event.data);
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("p-2", "rounded-lg", "mb-1", msg.username === document.getElementById("username").value ? "bg-blue-100 self-end" : "bg-gray-200");
    messageElement.innerHTML = `<strong>${msg.username}:</strong> ${msg.text}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
    const username = document.getElementById("username").value;
    const message = document.getElementById("message").value;
    socket.send(JSON.stringify({ username, text: message }));
    document.getElementById("message").value = "";
}