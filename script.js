const contentContainer = document.querySelector(".content");

function makeGrid(gridSize) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  for (let i = 0; i < gridSize; i++) {
    const gridLine = document.createElement("div");
    gridLine.classList.add("grid-line");
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.style.width = `${850 / gridSize}px`;
      cell.style.height = `${850 / gridSize}px`;
      gridLine.appendChild(cell);
    }
    gridContainer.appendChild(gridLine);
  }

  contentContainer.appendChild(gridContainer);

  addHoverListener();
}

function addHoverListener() {
  const cells = document.querySelectorAll(".grid-cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    });
  });
}

function getRandomColor() {
  let aux = Math.floor(Math.random() * 255);
  return aux;
}

function removeGrid() {
  const gridToRemove = document.querySelector(".grid-container");

  gridToRemove.remove();
}

const resetButton = document.querySelector('.btn-reset');
console.log(resetButton);

resetButton.addEventListener('click', () => {
  removeGrid();
  let aux = prompt('New grid dimensions');
  makeGrid(aux);
})

addHoverListener();

makeGrid(25);
