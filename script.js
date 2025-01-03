const container = document.querySelector(".container");
const dimension_btn = document.querySelector(".select");
const grid_toggle = document.querySelector(".grid-toggle");

function adjustGrid(n) {
    const cell = document.querySelector(".cell");
    let size_calc = 100/n;
    cell.style.height = `${size_calc}%`;
    cell.style.width = `${size_calc}%`;
    for(let i=1; i<n*n; i++) {
        const childCell = document.createElement("div");
        childCell.classList.add("cell");
        childCell.classList.add("show");
        childCell.style.height = `${size_calc}%`;
        childCell.style.width = `${size_calc}%`;
        container.appendChild(childCell);
    }
    const cells = document.querySelectorAll(".cell");
    
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.background = "black";
        })
    
        cell.addEventListener("mouseleave", () => {
            cell.style.background = "#1F2428";
        })
    });
}

// grid toggle
grid_toggle.addEventListener("click", (e) => {
    const cells = document.querySelectorAll(".cell");
    const cell = document.querySelector(".cell");
    if(grid_toggle.id==="on") {
        grid_toggle.id = "off";
        grid_toggle.textContent = "Show grid";
        cells.forEach((cell) => {
            if(cell.classList.contains("show")) {
                cell.classList.remove("show");
            }
            cell.classList.add("hide");
        })
    }
    else {
        grid_toggle.id = "on";
        grid_toggle.textContent = "Hide grid";
        cells.forEach((cell) => {
            if(cell.classList.contains("hide")) {
                cell.classList.remove("hide");
            }
            cell.classList.add("show");
        })
        
    }
});

// modulate grid size through button
dimension_btn.addEventListener("click", (e) => {
    const cell = document.querySelector(".cell");
    let side = 64;
    do {
        side = +prompt("Enter side : ", 64);
    } while(side>100);

    while(container.firstChild) {
        console.log("You're either me or you're not perfect");
        container.removeChild(container.lastChild);
    }
    const childCell = document.createElement("div");
    childCell.classList.add("cell");
    childCell.classList.add("show");
    let size_calc = 100/side;
    childCell.style.height = `${size_calc}%`;
    childCell.style.width = `${size_calc}%`;
    container.appendChild(childCell);
    adjustGrid(side);
});

adjustGrid(100);



