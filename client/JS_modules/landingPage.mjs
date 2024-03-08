import loginPage from "./loginPage.mjs";
import startPage from "./startPage.mjs";

export default function landingPage() {

    if (localStorage.getItem("userName")) {
        startPage();
    } else {
        loginPage();
    }
}