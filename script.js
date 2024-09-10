const contentContainer = document.querySelector(".content");

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

for (let i = 0; i < 16; i++) {
  const gridLine = document.createElement("div");
  gridLine.classList.add("grid-line");
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    gridLine.appendChild(cell);
  }
  gridContainer.appendChild(gridLine);
}

contentContainer.appendChild(gridContainer);
