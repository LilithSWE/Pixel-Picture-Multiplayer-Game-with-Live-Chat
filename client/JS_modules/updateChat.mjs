export default function updateChat(chatMessage) {
  console.log("updateChat:", chatMessage);

  let chatList = document.getElementById("chatList");
  let loggedInUser = localStorage.getItem("userName");

  let liMessage = document.createElement("li");
  liMessage.innerText = chatMessage.message;
  liMessage.classList.add("chatMessage", "list-none", "bg-white", "border-dotted", "p-3", "rounded-full", "border-2", "text-center", "mt-2") // For CSS

  if (chatMessage.userName === loggedInUser) {
    liMessage.classList.add("userNameMessage", "list-none", "bg-white", "border-dotted", "p-3", "rounded-full", "border-2", "text-center", "mt-2")  // For CSS differentiating between own and others
  }

  let liUserName = document.createElement("li");
  liUserName.innerText = "Sent by " + chatMessage.userName;
  liUserName.classList.add("chatSender", "list-none", "text-xs", "text-center", "chatSender", "userNameSender") // For CSS
  if (chatMessage.userName === loggedInUser) {
    liUserName.classList.add("userNameSender", "list-none", "text-xs", "text-center", "chatSender", "userNameSender")  // For CSS differentiating between own and others
  }

  chatList.append(liMessage, liUserName)
}