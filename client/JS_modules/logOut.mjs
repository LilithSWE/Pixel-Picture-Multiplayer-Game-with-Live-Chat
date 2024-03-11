import loginPage from "./loginPage.mjs";

export default function logOut() {
    localStorage.clear();
    loginPage();
}