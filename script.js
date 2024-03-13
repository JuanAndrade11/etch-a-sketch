const container = document.getElementById("container");
const items = [];

function validateInput(input) {
    const num = Number(input);
    if (isNaN(num)) {
        return 16;
    } else if (num < 1) {
        return 1;
    } else if (num > 100) {
        return 100;
    } else {
        return num;
    }
};

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

function createGrid(itemsPerRow){
    container.innerHTML = '';
    for (let i = 0; i < itemsPerRow * itemsPerRow; i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("gridElement");
        gridElement.setAttribute(
            "style",
            `width: ${800 / itemsPerRow}px; height: ${800 / itemsPerRow}px`
          );
        container.appendChild(gridElement);
        items.push(gridElement);
    };

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const color = getRandomRgbColor();
            item.style.backgroundColor = color;
        });
    });
};

createGrid(16);

const create = document.getElementById('create');

create.addEventListener('click', () => {
    const desiredRows = prompt('please write desired #of rows', 16);
    createGrid(validateInput(desiredRows));
});

const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    items.forEach( item => {
        const color = 'rgb(0,0,0)';
        item.style.backgroundColor = color;
    });
});
