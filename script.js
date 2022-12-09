let pixels = new Array();

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
            newPixel.addEventListener("mouseenter", function(e) {
                this.classList.toggle('hover');
            })
            newPixel.addEventListener("mouseleave", function(e) {
                this.classList.toggle('hover');
            })

            newDiv.appendChild(newPixel);
            pixels.push(newDiv);
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
    // Turn all pixels white;
}