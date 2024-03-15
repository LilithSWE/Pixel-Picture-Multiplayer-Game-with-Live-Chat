import { io } from "socket.io-client";
const socket = io("https://starfish-app-b6b63.ondigitalocean.app/");

export { socket }; 