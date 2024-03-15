import { io } from "socket.io-client";
const socket = io("https://squid-app-cg7rw.ondigitalocean.app/"); // http://localhost:3000

export { socket }; 