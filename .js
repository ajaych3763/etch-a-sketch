const div = document.querySelector(".container");
let gridDimension = 16;
for (let i = 0; i < gridDimension * gridDimension; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-cell");
    grid.style.height = `${600/gridDimension}px`;
    grid.style.width = `${900/gridDimension}px`;
    div.appendChild(grid);
}

const gridCells = document.querySelectorAll(".grid-cell");
gridCells.forEach(element => {
    let randomRed = ((Math.random().toFixed(3) * 1000) % 256);
    let randomGreen = ((Math.random().toFixed(3) * 1000) % 256);
    let randomBlue = ((Math.random().toFixed(3) * 1000) % 256);
    element.addEventListener("mouseenter", (Event) => {
        let target = Event.target;
        target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        target.style.opacity = `${Number(target.style.opacity) + 0.1}`; 
    })
});

let resizeBtn = document.querySelector("button");
resizeBtn.addEventListener('click', () => {
    let gridDimension = prompt("Enter new Grid Dimension (Max : 100) : ");
    gridDimension = Math.min(100, gridDimension);
    const gridCells = document.querySelectorAll(".grid-cell");
    div.innerHTML = '';
    for (let i = 0; i < gridDimension * gridDimension; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid-cell");
        grid.style.height = `${600/gridDimension}px`;
        grid.style.width = `${900/gridDimension}px`;
        div.appendChild(grid);
    }
    const newGridCells = document.querySelectorAll(".grid-cell");
    newGridCells.forEach(element => {
        let randomRed = ((Math.random().toFixed(3) * 1000) % 256);
        let randomGreen = ((Math.random().toFixed(3) * 1000) % 256);
        let randomBlue = ((Math.random().toFixed(3) * 1000) % 256);
        element.addEventListener("mouseenter", (Event) => {
            let target = Event.target;
            target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            target.style.opacity = `${Number(target.style.opacity) + 0.1}`; 
        })
    });
});