import updateChat from "./JS_modules/updateChat";
import loginPage from "./JS_modules/loginPage.mjs";

import { io } from "socket.io-client";
const socket = io("http://localhost:3000"); //https://squid-app-cg7rw.ondigitalocean.app/

// TinyMCE har installerats i frontend

let sendMessage = document.getElementById("sendMessage");
let sendBtn = document.getElementById("sendBtn");
let chatList = document.getElementById("chatList");

// Kör login page funktionen vid start
loginPage()

// spara namn
let user = localStorage.getItem("userName");  // Byt till local storage 

// skicka meddelanden 
sendBtn.addEventListener("click", () => {
  console.log("send chat", sendMessage.value);
  socket.emit("chat", { message: sendMessage.value, user: user });
});

socket.on("chat", (arg) => {
  console.log("socket", arg);
  updateChat(arg);
})

