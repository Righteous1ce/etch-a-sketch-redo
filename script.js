
const openModalButton = document.querySelectorAll("[data-modal-target]");
const closeModalButton = document.querySelectorAll("[data-close-modal]");
const createGridButton = document.querySelectorAll("[data-create-grid]");
const backdrop = document.getElementById("backdrop");
const gridElement = document.getElementById("grid");
const changeGrid = document.getElementById("create-grid");


//let cellSize = Math.floor(600 / gridElement);





openModalButton.forEach(button => {
    button.addEventListener("click", () =>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButton.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal")
        closeModal(modal);
    })
})



function openModal(modal){
    if(modal == null) return;
    modal.classList.add("active");
    backdrop.classList.add("active");
}


function closeModal(modal){
    if(modal == null) return
    modal.classList.remove("active");
    backdrop.classList.remove("active");
}





function createGrid(widthInput, heightInput){
    const cellSize = 600 / Math.max(widthInput, heightInput);

    gridElement.style.width = "600px";
    gridElement.style.height = "600px";
    

    gridElement.style.gridTemplateColumns = `repeat(${widthInput}, ${cellSize}px)`;
    gridElement.style.gridTemplateRows = `repeat(${heightInput}, ${cellSize}px`;

    for (let i = 0; i < widthInput * heightInput; i++){
        const cells = document.createElement("div");
        cells.classList.add("cells");
        //cells.style.width = `${cellSize}px`;
        //cells.style.height = `${cellSize}px`;
        gridElement.appendChild(cells);

        cells.addEventListener("mousedown", ()=>{
            cells.style.backgroundColor = "rgba(0, 234, 255, 1)";
        })

    }
}


changeGrid.addEventListener("click", () => {
    gridElement.innerHTML = "";
    updateGrid();
    closeModal(modal);
})


function updateGrid(){
    const widthInput = parseInt(document.querySelector('input[name = width]').value);
    const heightInput = parseInt(document.querySelector('input[name = height').value);
    if(!widthInput || !heightInput) return;

    if(widthInput != heightInput){
        alert("Grid must have equal width and height");
        return;
    }

    let gridElement = Math.min(widthInput, heightInput);

    if(widthInput > 100 || heightInput > 100){
        alert("The Grid Cannot Be Bigger Than 100 x 100");
        return;
    } 

    createGrid(widthInput, heightInput);

}







createGrid();
