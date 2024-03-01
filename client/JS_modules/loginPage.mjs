import startPage from "./startPage.mjs";

// Kopplar till index.html, main taggar. 
let mainContainer = document.getElementById("main");

export default function loginPage() {

  // Genererar html för inloggning 
  mainContainer.innerHTML = `
  <h1>Välkommen till ChatRooms - gridSock6!</h1>
  <input
    type="text"
    id="userNameInput"
    placeholder="Skriv in ditt namn här..."
  />
  <button id="saveUserNameBtn">Logga In</button>`;

  // Kopplar till ovan genererad html
  let userNameInput = document.getElementById('userNameInput');
  let saveUserNameBtn = document.getElementById('saveUserNameBtn');

  // Error meddelande som skrivs ut om man inte valt ett användarnamn men försöker trycka på logga in knappen
  let errorMsg = "Du måste välja ett namn!"

  saveUserNameBtn.addEventListener("click", () => {
    // If sats för att se om användarnamn är ok eller ej. 
    if (userNameInput.value === "" || userNameInput.value === errorMsg) {
      // om användarnamn saknar eller är = errormeddelande, skriv ut error meddelande. 
      userNameInput.value = errorMsg;
      return;
    } else {
      // Spara username lokalt 
      localStorage.setItem("userName", userNameInput.value);
      // Nollställ main containern innan nästa sida laddas. 
      startPage();
    }
  })
}