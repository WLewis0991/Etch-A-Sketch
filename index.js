console.log("Etch-A-Sketch loaded.");

let boxes = 16;

const gridButton = document.getElementById("gridSize");
const resetButton = document.getElementById("resetGrid");
const colorButton = document.getElementById("colorMode");
const etchContainer = document.getElementById("etchContainer");

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
        box.style.border = "1px solid #090909ff";
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });

        etchContainer.appendChild(box);
    }
}

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
