const div = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-cell");
    div.appendChild(grid);
}

