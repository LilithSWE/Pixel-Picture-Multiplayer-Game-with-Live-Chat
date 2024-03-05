import startPage from "./startPage.mjs";

// Kopplar till index.html, main taggar. 
let mainContainer = document.getElementById("main");

export default function loginPage() {
  // Genererar html för inloggning 
  mainContainer.innerHTML = `
  <p>Welcome to</p>
  <h2>WAR OF THE PALETTES</h2>
  <input
    type="text"
    id="userNameInput"
    placeholder="Enter your player name"
  />
  <button id="saveUserNameBtn" style =
  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
  }
  ><span class="material-symbols-outlined">
  arrow_forward
  </span></button>`;

  // Kopplar till ovan genererad html
  let userNameInput = document.getElementById('userNameInput');
  let saveUserNameBtn = document.getElementById('saveUserNameBtn');

  // Error meddelande som skrivs ut om man inte valt ett användarnamn men försöker trycka på logga in knappen
  let errorMsg = "You need to pick a name"

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