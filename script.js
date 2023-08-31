
const openModalButton = document.querySelectorAll("[data-modal-target]");
const closeModalButton = document.querySelectorAll("[data-close-modal]");
const createGridButton = document.querySelectorAll("[data-create-grid]");
const backdrop = document.getElementById("backdrop");
const gridElement = document.getElementById("grid");
const changeGrid = document.getElementById("create-grid");
const randomColor = document.getElementById("random-colour");
const toggleGridLines = document.getElementById("toggle-grid-lines");




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

        

        gridElement.appendChild(cells);

        cells.addEventListener("mouseenter", ()=>{
            cells.style.backgroundColor = randomColor.classList.contains("active") ? getRandomColor() : "rgba(0, 234, 255, 1)"
        })

    }
}


changeGrid.addEventListener("click", () => {
    gridElement.innerHTML = "";
    updateGrid();
    randomColor.classList.remove("active");
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

    if(widthInput > 100 || heightInput > 100){
        alert("The Grid Cannot Be Bigger Than 100 x 100");
        return;
    } 

    createGrid(widthInput, heightInput);

}


function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgba(${r}, ${g}, ${b})`;
}


randomColor.addEventListener("click", () =>{
        randomColor.classList.add("active");
     })



toggleGridLines.addEventListener("click", () => {
        toggleGridLines.classList.toggle("active"); 
        const cells = document.querySelectorAll(".cells");

        cells.forEach(cell =>{
            if(toggleGridLines.classList.contains("active")){
                cell.classList.add("show-grid-lines");
            }else {
                cell.classList.remove("show-grid-lines");
            }
        })
        
        console.log("toggle grid lines")

    })









createGrid();
