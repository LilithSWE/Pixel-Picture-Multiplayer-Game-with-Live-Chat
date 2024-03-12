import startPage from "./startPage.mjs";

// Kopplar till index.html, main taggar. 
let mainContainer = document.getElementById("main");

export default function loginPage() {
  // Genererar html för inloggning  - OM tid finns, skriv om till append pga säkerhet. 
  
  mainContainer.innerHTML = `

  <div class="flex flex-col">
      <p class="flex flex-row justify-center align-middle font-inter">Welcome to</p>
      <h1 class="flex justify-center align-middle font-normal text-4xl leading-9 not-italic font-slab">
        <span class="text-red-600 mr-2">WAR</span>
        <span class="mr-2">OF</span>
        <span class="mr-2">THE</span>
        <span class="text-cyan-700">PALETTES</span>
      </h1>
    </div>

    <div class="flex flex-col items-center mt-40">
      <input type="text" id="userNameInput" placeholder="Enter your player name" class="bg-gray-100 rounded-full w-72 h-10 text-center font-inter border pt-2 pb-2 hover:bg-gray-200">
      <button id="saveUserNameBtn" class="w-16 h-16 mt-4 rounded-full border-none bg-cyan-700 hover:bg-cyan-800">
        <span class="material-symbols-outlined">
          arrow_forward
          </span>      
      </button>
    </div>

    <div>      
      <img src="bgSplash.png" alt="Splash of colors" class="fixed -z-10 bottom-0 left-0">
    </div>`;

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
      startPage();
    }
  })
}