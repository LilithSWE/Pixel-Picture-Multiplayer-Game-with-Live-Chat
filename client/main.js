import updateChat from "./JS_modules/updateChat";

import { io } from "socket.io-client";
const socket = io("http://localhost:3000")  // ändra till DO 

// TinyMCE har installerats i frontend

let sendMessage = document.getElementById("sendMessage");
let sendBtn = document.getElementById("sendBtn");
let chatList = document.getElementById("chatList");


// spara namn 
let user = "Janne";  // Byt till local storage 


// skicka meddelanden 
sendBtn.addEventListener("click", () => {
  console.log("send chat", sendMessage.value);
  socket.emit("chat", { message: sendMessage.value, user: user });
});

socket.on("chat", (arg) => {
  console.log("socket", arg);
  updateChat(arg);
})

