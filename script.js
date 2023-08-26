const craftGrid = document.getElementById("craft-grid"); 

function createGrid(rows, cols){
    const gridElement = document.getElementById("grid");

    gridElement.style.gridTemplateRows = `repeat${rows}, 30px`;
    gridElement.style.gridTemplateColumns = `repeat${cols}, 30px`;

    for (let i = 0; i < rows * cols; i++){
        const cells = document.createElement("div");
        cells.classList.add("cells");
        gridElement.appendChild(cells);

    }
}

createGrid(16, 16);