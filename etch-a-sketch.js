function createGrid(size) {
    let grid = document.querySelector('#gridDiv');
    let squares = grid.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1 fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1 fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let oneSquare = document.createElement('div');
        oneSquare.addEventListener('mouseover', () => {
            oneSquare.style.backgroundColor = "black"});
        oneSquare.style.backgroundColor = 'white';
        grid.insertAdjacentElement('beforeend', oneSquare);
    };
};

function changeSize(input) {
    createGrid(input);
};