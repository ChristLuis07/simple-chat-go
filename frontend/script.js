const socket = new WebSocket("ws://localhost:8080/ws");
let currentUser = "";

socket.onopen = function () {
    console.log("Connected to WebSocket server");
};

socket.onmessage = function (event) {
    const msg = JSON.parse(event.data);
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");

    messageElement.classList.add("p-2", "rounded-lg", "mb-1", "max-w-[75%]");

    if (msg.username === currentUser) {
        messageElement.classList.add("bg-blue-100", "text-right", "ml-auto");
    } else {
        messageElement.classList.add("bg-green-100", "text-left", "mr-auto");
    }

    messageElement.innerHTML = `<strong>${msg.username}:</strong> ${msg.text}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
    const username = document.getElementById("username").value;
    const message = document.getElementById("message").value;

    if (username.trim() === "" || message.trim() === "") {
        alert("Username dan pesan tidak boleh kosong!");
        return;
    }

    if (!currentUser) {
        currentUser = username; 
    }

    socket.send(JSON.stringify({ username, text: message }));
    document.getElementById("message").value = "";
}
