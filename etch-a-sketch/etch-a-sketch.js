let color = 'black';
let background = 'white';
let click = false;

function createGrid(size) {
    let myGrid = document.querySelector('#gridDiv');
    let squares = myGrid.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    myGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    myGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let oneSquare = document.createElement('div');
        oneSquare.addEventListener('mouseover', colorSquare);
        oneSquare.style.backgroundColor = background;
        myGrid.insertAdjacentElement('beforeend', oneSquare);
        
    };
};
createGrid (16);

function changeSize(input) {
    createGrid(input);
};

function colorSquare() {
    if(click) {
        if (color == 'random') {
            randomArctic()
        }
        else {
            this.style.backgroundColor = color;
        }  
    };
};

function changeColor(choice) {
    color = choice;
}

function arcticGrid(cleanBoard) {
    let myGrid = document.querySelector('#gridDiv');
    let squares = myGrid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = cleanBoard);
};

document.getElementById('colorSelector').oninput = (e) => changeColor(e.target.value);


function randomArctic() {
    color = 'rgb(50, 50, ' + (Math.floor(Math.random() * 256)) + ')';
};

/* making this work only when the click button is down */

document.querySelector('#gridDiv').addEventListener('click', () => {
    click = !click;
})
