import { socket } from "./socket.mjs"

export default function sendMessage(chatMessage) {
  console.log("send chat", chatMessage);
  socket.emit("chat", chatMessage);
};

