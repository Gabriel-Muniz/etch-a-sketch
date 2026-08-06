const gridContainer = document.querySelector('.grid-container');
const resizeBtn = document.querySelector('.resize-grid-btn');
const randomBtn = document.querySelector('.random-color-btn');
const darkenerBtn = document.querySelector('.cell-darkener-btn');

let randomMode = false;
let darkenerMode = false;

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
    const spanState = document.querySelector('.random-color-btn>.btn-state');

    randomMode = !randomMode;

    spanState.classList.toggle('state-on')

    spanState.textContent = (randomMode) ? 'ON' : "OFF";
})

darkenerBtn.addEventListener('click', (e) => {
    const spanState = document.querySelector('.cell-darkener-btn>.btn-state');
    darkenerMode = !darkenerMode;

    spanState.classList.toggle('state-on');
    spanState.textContent = (darkenerMode) ? 'ON' : 'OFF';
})

resizeBtn.addEventListener('click', (e) => {
    let newGridSize = prompt(`Insert size you want your grid:\nObs: Should be between 1 and 100`, 16);
    const VALID__GRID_SIZE = (newGridSize > 0 && newGridSize <= 100) ? true : false;

    if (VALID__GRID_SIZE) {
        makeGrid(newGridSize);
        return
    }

    alert(`That's not a valid number! Think about and try again!`)

    resizeBtn.dispatchEvent(new Event('click'))
})

gridContainer.addEventListener('mouseover', (e) => {
    if (!e.target.classList.contains('grid-cell')) return;

    if (randomMode) {
        let colorIndex = Math.floor(Math.random() * COLORS_RANDOM.length);
        e.target.style.backgroundColor = COLORS_RANDOM[colorIndex];
    } else {
        e.target.style.backgroundColor = '';

    }

    if (darkenerMode) {
        let aux = Number(e.target.style.opacity);
        if (aux == 1) return;
        e.target.style.opacity = aux + 0.1;
    } else {
        e.target.style.opacity = '';
    }

    e.target.classList.add('painted');
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