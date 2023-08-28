
const openModalButton = document.querySelectorAll("[data-modal-target]");
const closeModalButton = document.querySelectorAll("[data-close-modal]");
const createGridButton = document.querySelectorAll("[data-create-grid]");
const backdrop = document.getElementById("backdrop");
const gridElement = document.getElementById("grid");





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



////////// OPEN & CLOSE THE MODAL \\\\\\\\\\

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
