const gridContainer = document.querySelector('.grid-container');
const resizeBtn = document.querySelector('.resize-grid-btn');
const randomBtn = document.querySelector('.random-color-btn');

let randomMode = false;
const COLORS_RANDOM = [
    '#000',
    '#585858',
    '#c0c0c0',
    '#f0f0f0',
    '#b52',
    '#fd0',
    '#cf0',
    '#790',
    '#0dd',
    '#80f',
    '#f0d',
    '#f05',
    '#ffc',
    '#bb9'
]

randomBtn.addEventListener('click', (e) => {
    const spanState = document.querySelector('.btn-state');

    randomMode = !randomMode;

    spanState.classList.toggle('state-on')


    spanState.textContent = (randomMode) ? 'ON' : "OFF";
})

resizeBtn.addEventListener('click', (e) => {
    let newGridSize = prompt(`Insert size you want your grid:\nObs: Should be between 1 and 100`);
    const VALID__GRID_SIZE = (newGridSize > 0 && newGridSize <= 100) ? true : false;

    if (VALID__GRID_SIZE) {
        makeGrid(newGridSize);
        return
    }

    alert(`That's not a valid number! Think about and try again!`)

    resizeBtn.dispatchEvent('click')
})

gridContainer.addEventListener('mouseover', (e) => {
    e.target.classList.add('painted');

    if (randomMode) {
        let colorIndex = Math.floor(Math.random() * COLORS_RANDOM.length + 1);
        e.target.style.backgroundColor = COLORS_RANDOM[colorIndex];
    }
})

function makeGrid(gridDimensions = 16) {

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



makeGrid();