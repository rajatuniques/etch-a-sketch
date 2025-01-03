const container = document.querySelector(".container");
const cell = document.querySelector(".cell");

function adjustGrid(n) {
    let size_calc = 100/n;
    cell.style.height = `${size_calc}%`;
    cell.style.width = `${size_calc}%`;
    for(let i=1; i<n*n; i++) {
        const childCell = document.createElement("div");
        childCell.classList.add("cell");
        childCell.style.height = `${size_calc}%`;
        childCell.style.width = `${size_calc}%`;
        container.appendChild(childCell);
    }
}

adjustGrid(100);

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.style.background = "black";
    })

    cell.addEventListener("mouseleave", () => {
            cell.style.background = "#1F2428";
    })
});
