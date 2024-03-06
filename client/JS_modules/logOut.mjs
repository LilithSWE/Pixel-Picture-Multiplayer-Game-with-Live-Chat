import loginPage from "./loginPage.mjs";

export default function logOut() {
    localStorage.clear(); // Clear local storage to remove current user
    loginPage(); // Fire loginPage function to get back to that page
}