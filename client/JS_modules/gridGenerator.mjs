import timer from "./timerStart.mjs";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000"); //https://squid-app-cg7rw.ondigitalocean.app/

export default function gridGenerator(picture, containerName) {
  const container = document.getElementById(containerName);

  let playerColor = localStorage.getItem("color");
  let gridRow = picture[0].pictureRows;
  let gridColumn = picture[0].pictureColumns;

  let table = document.createElement('table');
  table.classList.add("grid-table", "w-[90%]", "h-[90%]", "border-dotted", "opacity-75"); // Tailwind classes

  for (let row = 1; row <= gridRow; row++) {
    let tr = document.createElement('tr');

    for (let col = 1; col <= gridColumn; col++) {
      let th = document.createElement('th');
      th.classList.add('grid-item', "border-dotted", "border");
      th.id = `x${col}y${row}`;

      // Very much not optimised ... 
      picture.forEach(object => {
        if (object.pictureCoordinate == th.id) {
          th.style.backgroundColor = object.pictureColor
          //console.log(object.pictureColor); // Removed when working with resetPicture
          return;
        }
      });

      th.addEventListener('click', () => {
        if (th.style.backgroundColor != playerColor) {
          let updatedCell = {
            "pictureName": picture[0].pictureName,
            "pictureCoordinate": th.id,
            "pictureColor": playerColor
          }

          socket.emit("paint", (updatedCell))

        }
      });
      tr.appendChild(th);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
  timer("start");
}