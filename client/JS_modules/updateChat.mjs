// Updates chat

export default function updateChat(chatMessage) {
  let chatList = document.getElementById("chatList");
  console.log("mottaget chatmeddelande: ", chatMessage); // ta bort sen
  let loggedInUser = localStorage.getItem("userName");


  let liMessage = document.createElement("li");
  liMessage.innerText = chatMessage.message;
  liMessage.classList.add("chatMessage") // For CSS
  if (chatMessage.userName = loggedInUser) {
    liMessage.classList.add("userNameMessage")  // For CSS differentiating between own and others
  }

  let liUserName = document.createElement("li");
  liUserName.innerText = "Sent by " + chatMessage.userName;
  liMessage.classList.add("chatSender") // For CSS

  chatList.append(liMessage, liUserName)
}