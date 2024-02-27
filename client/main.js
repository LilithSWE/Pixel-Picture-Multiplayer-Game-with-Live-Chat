import { io } from "socket.io-client";
const socket = io("http://localhost:3000")

// TinyMCE har installerats i frontend

let sendMessage = document.getElementById("sendMessage");
let sendBtn = document.getElementById("sendBtn");
let chatList = document.getElementById("chatList");

let user = "Janne";  // Byt till local storage 

sendBtn.addEventListener("click", () => {
  console.log("send chat", sendMessage.value);
  socket.emit("chat", { message: sendMessage.value, user: user });
});

socket.on("chat", (arg) => {
  console.log("socket", arg);
  updateChat(arg);
})

function updateChat(chat) {
  let li = document.createElement("li");
  li.innerText = chat.user + ": " + chat.message;
  chatList.appendChild(li);
}