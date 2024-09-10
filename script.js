const contentContainer = document.querySelector(".content");

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

let dimension = 25;

for (let i = 0; i < dimension; i++) {
  const gridLine = document.createElement("div");
  gridLine.classList.add("grid-line");
  for (let j = 0; j < dimension; j++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.style.width = `${900/dimension}px`;
    cell.style.height = `${900/dimension}px`;
    gridLine.appendChild(cell);
  }
  gridContainer.appendChild(gridLine);
}

contentContainer.appendChild(gridContainer);

function addHoverListener(){
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
      
    })
  })
}

function getRandomColor() {
  let aux = Math.floor(Math.random() * 255);
  return aux;
}

addHoverListener()