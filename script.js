function makeGrid(gridDimensions) {
    const gridContainer = document.querySelector('.grid-container');

    gridContainer.innerHTML = '';

    for (let i = 0; i < gridDimensions; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');

        for (let j = 0; j < gridDimensions; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');

            gridRow.appendChild(gridCell);
        }

        gridContainer.appendChild(gridRow);

    }

}

makeGrid(16);