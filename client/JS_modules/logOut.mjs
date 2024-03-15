import loginPage from "./loginPage.mjs";
import resetPictureColors from "./resetPictureColors.mjs";

export default function logOut() {
    localStorage.clear();
    loginPage();
    resetPictureColors();
}