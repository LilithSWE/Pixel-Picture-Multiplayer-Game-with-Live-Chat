// uppdaterar chatflödet 
export default function updateChat(chat) {
  let li = document.createElement("li");
  li.innerText = chat.user + ": " + chat.message;
  chatList.appendChild(li);

  // Lägg till en del i denna funktion som gör att användarens chattmeddelande ser annorlunda ut mot de andra när det laddar. 
  // Kasnke en IF sats med en add to classlist kombination?
}