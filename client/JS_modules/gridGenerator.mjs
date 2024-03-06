// document.addEventListener('DOMContentLoaded', () => gridGenerator());

export default function gridGenerator() {
  const container = document.getElementById('main');
  //spelarens färg
  let colorPlayer = 'red';

  //Grid-Size ändras här
  let gridRow = 15;
  let gridColumn = 15;
  let table = document.createElement('table');
  table.classList.add('grid-table');
  for (let row = 0; row < gridRow; row++) {
    let tr = document.createElement('tr');
    for (let col = 0; col < gridColumn; col++) {
      let th = document.createElement('th');
      th.classList.add('grid-item');
      th.id = `Row-${row}-Column-${col}`;

      th.addEventListener('click', () => {
        if (th.style.backgroundColor != colorPlayer) {
          th.style.backgroundColor = colorPlayer;
        }
      });
      tr.appendChild(th);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
}
