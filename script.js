const container = document.querySelector(".container");
const cell = document.querySelector(".cell");

for(let i=1; i<16; i++) {
    const childCell = document.createElement("div");
    childCell.classList.add("cell");
    container.appendChild(childCell);
}