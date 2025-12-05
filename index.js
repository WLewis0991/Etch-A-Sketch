console.log("Etch-A-Sketch loaded.");
let boxes = 16; 
const gridButton = document.getElementById("gridSize");
const resetButton = document.getElementById("resetGrid");
const colorButton = document.getElementById("colorMode");
const etchContainer = document.getElementById("etchContainer");

//Function to create the grid
function createGrid(boxes) {
    // Clear previous grid if needed
    etchContainer.innerHTML = "";

    // Container uses flexbox
    etchContainer.style.display = "flex";
    etchContainer.style.flexWrap = "wrap";
    etchContainer.style.width = "400px";
    etchContainer.style.height = "400px";

    const boxSize = 400 / boxes;

    for (let i = 0; i < boxes * boxes; i++) {
        const box = document.createElement("div");
        box.classList.add("box");

        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.boxSizing = "border-box";
        box.style.border = "1px solid rgba(0, 0, 0, 0.07)";
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
            box.style.opacity = parseFloat(box.style.opacity || 0) + 0.3;
        });

        etchContainer.appendChild(box);
    }
}
//Grid Button Functionality
gridButton.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size (max 100):", boxes);
    newSize = parseInt(newSize);
    if (newSize > 0 && newSize <= 100) {
        boxes = newSize;
        createGrid(boxes);
    } else {
        alert("Invalid size. Please enter a number between 1 and 100.");
    }
});

//Reset Button Functionality
resetButton.addEventListener("click", () => {
    createGrid(boxes);
});

//Color Mode Button Functionality
colorButton.addEventListener("click", () => {
    const boxElements = document.querySelectorAll(".box");
    boxElements.forEach(box => {
        box.addEventListener("mouseover", () => {
            const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            box.style.backgroundColor = randomColor;
            box.style.opacity = parseFloat(box.style.opacity || 0) + 0.2;
        });
    });
});

//Initial Grid Creation

createGrid(16);
