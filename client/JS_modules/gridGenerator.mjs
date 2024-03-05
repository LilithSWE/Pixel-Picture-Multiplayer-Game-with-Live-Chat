export default function gridGenerator() {
const container = document.getElementById('main');
//spelarens färg
let colorPlayer = 'red';
//Grid-Size ändras här
let gridRow = 15;
let gridColumn = 15;
for (let row = 0; row < gridRow; row++) {
  for (let col = 0; col < gridColumn; col++) {
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
}};
