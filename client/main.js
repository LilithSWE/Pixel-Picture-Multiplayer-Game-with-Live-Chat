// import loginPage from './JS_modules/loginPage.mjs';
import landingPage from './JS_modules/landingPage.mjs';
import generateColor from './JS_modules/generateColor.mjs';

import { io } from 'socket.io-client';
const socket = io('http://localhost:3000'); //https://squid-app-cg7rw.ondigitalocean.app/

// Kör login page funktionen vid start
// loginPage();

// Kör landing page vid start
landingPage();

