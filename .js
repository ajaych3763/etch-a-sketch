const div = document.querySelector(".container");
let gridDimension = 16;
for (let i = 0; i < gridDimension * gridDimension; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-cell");
    grid.style.height = `${600/gridDimension}px`;
    grid.style.width = `${900/gridDimension}px`;
    div.appendChild(grid);
}

