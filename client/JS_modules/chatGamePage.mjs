import sendMessage from "./sendMessage.mjs";
import updateChat from "./updateChat.mjs";
import { socket } from "./socket.mjs"


export default function generateChatGamePage() {
  let pictureName = localStorage.getItem("game")
  let errorMsg = "You can't send an empty message."
  const chatContainer = document.getElementById("chatContainer");
  // Creates necessary HTML elements for the chat function, sets ids and other attruibutes. 
  const allMessagesContainer = document.createElement("div");
  allMessagesContainer.setAttribute("id", "allMessagesContainer");
  allMessagesContainer.classList.add("overflow-auto", "max-h-[600px]") //Tailwind classes
  const chatList = document.createElement("ul");
  chatList.setAttribute("id", "chatList");

  allMessagesContainer.append(chatList);

  // Creates the part that can be used to send your own messages.
  const newMessageInput = document.createElement("input");
  newMessageInput.setAttribute("type", "text");
  newMessageInput.setAttribute("id", "newMessageInput");
  newMessageInput.classList.add("mb-4", "rounded-full", "border", "h-24", "w-[85%]", "text-center"); //Tailwind classes

  const sendNewMessageBtn = document.createElement("button");
  sendNewMessageBtn.textContent = "arrow_upward";
  sendNewMessageBtn.setAttribute("id", "sendNewMessageBtn");
  sendNewMessageBtn.classList.add("material-symbols-outlined", "text-center", "rounded-full", "bg-cyan-400", "hover:bg-cyan-500", "relative", "bottom-14"); //Tailwind classes

  chatContainer.append(allMessagesContainer, newMessageInput, sendNewMessageBtn)

  // Makes sure you can send a chatmessag by connecting to new html. 
  let newMessageText = document.getElementById("newMessageInput");
  let sendMessageBtn = document.getElementById("sendNewMessageBtn");

  // Error management for sending messages  
  sendMessageBtn.addEventListener("click", () => {
    if (newMessageText.value === "" || newMessageText.value === errorMsg) {
      newMessageText.value = errorMsg;
      return;
    } else {
      let msgObject = {
        message: newMessageText.value,
        userName: localStorage.getItem("userName"),
        game: pictureName
      }
      sendMessage(msgObject)
      newMessageText.value = "";
    }
  });

  // Listens after new chat messages and starts updateChat function if we are in the correct gameroom
  socket.on("chat", (chatMessage) => {
    // Interupts socket listener if not in a game currently 
    if (localStorage.getItem("game")) {
      console.log("socket", chatMessage);
      if (localStorage.getItem("game") === chatMessage.game)
        updateChat(chatMessage)
    }
    else {
      return;
    }
  })
}