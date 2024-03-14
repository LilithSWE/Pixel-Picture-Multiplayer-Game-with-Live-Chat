//will clear localstorage on everything except player name
//import clearLocalStorage from './clearingLocalStorage.mjs';
export default function clearLocalStorage() {
  //add here if there are any more info in the future that needs to be claered
  localStorage.removeItem('color');
  localStorage.removeItem('game');
}
