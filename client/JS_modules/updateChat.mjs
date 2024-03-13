export default function updateChat(chatMessage) {
  console.log("updateChat:", chatMessage);

  let chatList = document.getElementById("chatList");
  let loggedInUser = localStorage.getItem("userName");

  let liMessage = document.createElement("li");
  liMessage.innerText = chatMessage.message;
  liMessage.classList.add("chatMessage") // For CSS
  if (chatMessage.userName === loggedInUser) {
    liMessage.classList.add("userNameMessage")  // For CSS differentiating between own and others
  }

  let liUserName = document.createElement("li");
  liUserName.innerText = "Sent by " + chatMessage.userName;
  liUserName.classList.add("chatSender") // For CSS
  if (chatMessage.userName === loggedInUser) {
    liUserName.classList.add("userNameSender")  // For CSS differentiating between own and others
  }

  chatList.append(liMessage, liUserName)
}