createGrid();

function createGrid() {
    const container = document.querySelector(".gridContainer");
    for (let i = 0; i < 16; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add('pixelLine');
        container.appendChild(newDiv);
        for (let j = 0; j < 16; j++) {
            const newPixel = document.createElement('div');
            newPixel.classList.add('pixel');
            newDiv.appendChild(newPixel);
        }
    }
}