const container = document.getElementById('grid-container');
//spelarens namn
let colorPlayer = 'red';
//Grid-Size ändras här
let gridSize = 15;
for (let row = 0; row < gridSize; row++) {
  for (let col = 0; col < gridSize; col++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.id = `Row-${row}-Column-${col}`;

    cell.addEventListener('click', () => {
      if (cell.style.backgroundColor != colorPlayer) {
        cell.style.backgroundColor = colorPlayer;
      }
    });
    container.appendChild(cell);
  }
}
