let pixels = new Array();
let selectedTool = "pen";

createGrid(16, 16);

function createGrid(size) {
    const container = document.querySelector(".gridContainer");
    for (let i = 0; i < size; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add('pixelLine');
        container.appendChild(newDiv);
        for (let j = 0; j < size; j++) {
            const newPixel = document.createElement('div');
            newPixel.classList.add('pixel');
            newPixel.setAttribute('draggable', 'false'); 
            newPixel.addEventListener("mouseenter", function(e) {
                if (e.buttons == 1) {
                    affectPixel(e);
                }
                if (selectedTool === "pen") {
                    this.classList.toggle('hover');
                }
            })
            newPixel.addEventListener("mouseleave", function(e) {
                if (selectedTool === "pen") {
                    this.classList.toggle('hover');
                }
            })
            newPixel.addEventListener("mousedown", (e) => affectPixel(e));
            newDiv.appendChild(newPixel);
            pixels.push(newPixel);
        }
    }
}

function pressNewGrid() {
    let desiredSize = prompt("New grid size (max 100): ");

    if (desiredSize > 100 || desiredSize < 1 || isNaN(desiredSize)) {
        alert("Size must be within 1 and 100 included");
        return;
    }

    let lines = document.querySelectorAll(".pixelLine");
    lines.forEach(line => line.remove());

    createGrid(desiredSize);
}

function clearGrid() {
    pixels.forEach(pixel => pixel.style.backgroundColor = null);
}

function selectPen() {
    selectedTool = "pen";
}

function selectEraser() {
    selectedTool = "eraser";
}

function affectPixel(e) {
    console.log("affecting");
    switch (selectedTool) {
        case "pen":
            e.target.style.backgroundColor = 'black';
        break;

        case "eraser":
            e.target.style.backgroundColor = null;
        break;
    }
}