// Made available by <script src="https://cdn.socket.io/socket.io-3.0.0.js"></script>
const socket = io("ws://localhost:8080"); // Makes a connection to the webserver via ws

socket.on("message", (text) => {
    const el = document.createElement("li");
    el.innerHTML = text;
    document.querySelector("ul").appendChild(el);
});

document.querySelector("button").onclick = () => {
    const text = document.querySelector("input").value;
    socket.emit("message", text);
};
