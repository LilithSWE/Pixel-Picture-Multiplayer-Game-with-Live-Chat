import { io } from "socket.io-client";
const socket = io("http://localhost:3000"); //  https://squid-app-cg7rw.ondigitalocean.app/

export { socket }; 