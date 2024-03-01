import { io } from "socket.io-client";
const socket = io("http://localhost:3000"); //https://squid-app-cg7rw.ondigitalocean.app/

export default function sendMessage(arg) {
  console.log("send chat", arg);
  socket.emit("chat", arg);
};