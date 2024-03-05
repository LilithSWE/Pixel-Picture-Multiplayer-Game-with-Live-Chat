import loginPage from './JS_modules/loginPage.mjs';

import { io } from 'socket.io-client';
const socket = io('http://localhost:3000'); //https://squid-app-cg7rw.ondigitalocean.app/

// Kör login page funktionen vid start
loginPage();

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('grid-container');
  let gridSize = 15; // Size of the grid (15x15)
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      let cell = document.createElement('div');
      cell.classList.add('grid-item');
      // Assign a unique ID to each cell based on its row and column
      cell.id = `cell-${row}-${col}`;
      container.appendChild(cell);
    }
  }
});
