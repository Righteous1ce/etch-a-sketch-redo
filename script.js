
const openModalButton = document.querySelectorAll("[data-modal-target]");
const closeModalButton = document.querySelectorAll("[data-close-modal]");
const createGridButton = document.querySelectorAll("[data-create-grid]");
const backdrop = document.getElementById("backdrop");
const gridElement = document.getElementById("grid");
const changeGrid = document.getElementById("create-grid");






openModalButton.forEach(button => {
    button.addEventListener("click", () =>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
        console.log(openModalButton);

    })
})

closeModalButton.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal")
        closeModal(modal);
    })
})



function openModal(modal){
    console.log(modal);
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
    const gridElement = document.getElementById("grid");
    

    gridElement.style.gridTemplateRows = `repeat(${widthInput}, 30px)`;
    gridElement.style.gridTemplateColumns = `repeat(${heightInput}, 30px)`;

    for (let i = 0; i < widthInput * heightInput; i++){
        const cells = document.createElement("div");
        cells.classList.add("cells");
        gridElement.appendChild(cells);

        cells.addEventListener("mousedown", ()=>{
            cells.style.backgroundColor = "red";
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
    let gridElement = Math.min(widthInput, heightInput);

    createGrid(widthInput, heightInput);

}







createGrid();
