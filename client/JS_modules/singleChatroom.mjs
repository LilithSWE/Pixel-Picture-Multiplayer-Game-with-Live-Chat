import sendMessage from "./sendMessage.mjs";
import updateChat from "./updateChat.mjs";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000"); //https://squid-app-cg7rw.ondigitalocean.app/

let mainContainer = document.getElementById("main");
let errorMsg = "Du kan inte skicka ett tomt meddelande."

export default function singleChatroom(room) {
  localStorage.setItem("room", room);

  mainContainer.innerHTML = `  
  <header>
  <h2>${room}</h2>
  </header>
  <div id="chatListContainer">
  <ul id="chatList"></ul>
  </div>
  <input type="text" id="newMessage" />
  <button id="sendBtn">Skicka</button>`;

  let newMessage = document.getElementById("newMessage");
  let sendBtn = document.getElementById("sendBtn");

  sendBtn.addEventListener("click", () => {
    if (newMessage.value === "" || newMessage.value === errorMsg) {
      // om msg saknar eller är = errormeddelande, skriv ut error meddelande. 
      newMessage.value = errorMsg;
      return;
    } else {
      let msgObject = {
        message: newMessage.value,
        user: localStorage.getItem("userName"),
        room: room
      }
      sendMessage(msgObject)
      newMessage.value = "";
    }
  });
}

socket.on("chat", (arg) => {
  if (localStorage.getItem("room")) {
    console.log("socket", arg);
    updateChat(arg)
  }
})

// Behöver vi sortera på rum eller ej? 


