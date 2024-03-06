import { io } from "socket.io-client";
const socket = io("http://localhost:3000"); //https://squid-app-cg7rw.ondigitalocean.app/

export default function sendMessage(chatMessage) {
  console.log("send chat", chatMessage);
  socket.emit("chat", chatMessage);
};

