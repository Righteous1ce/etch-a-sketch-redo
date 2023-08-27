const craftGrid = document.getElementById("grid-popup"); 
const gridElement = document.getElementById("grid");




function createGrid(rows, cols){
    const gridElement = document.getElementById("grid");
    

    gridElement.style.gridTemplateRows = `repeat(${rows}, 30px)`;
    gridElement.style.gridTemplateColumns = `repeat(${cols}, 30px)`;

    for (let i = 0; i < rows * cols; i++){
        const cells = document.createElement("div");
        cells.classList.add("cells");
        gridElement.appendChild(cells);

        cells.addEventListener("mousedown", ()=>{
            cells.style.backgroundColor = "red";
        })

    }
}






createGrid(16, 16);