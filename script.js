const container = document.querySelector(".container");
const dimension_btn = document.querySelector(".select");
const grid_toggle = document.querySelector(".grid-toggle");
const rgb_btn = document.querySelector(".random-rgb");
const opaque_btn = document.querySelector(".opaque");

let pen_color = "#1F2428";
let current_pen = opaque_btn;

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
            if(current_pen===opaque_btn) {
                cell.style.background = pen_color;
            }
            else if(current_pen===rgb_btn) {
                cell.style.background = generateRandomRGB();
            }
        })
    });
}

// grid toggle
grid_toggle.addEventListener("click", (e) => {
    const cells = document.querySelectorAll(".cell");
    const cell = document.querySelector(".cell");
    if(grid_toggle.id==="on") {
        grid_toggle.id = "off";
        grid_toggle.textContent = "Show Grid";
        cells.forEach((cell) => {
            if(cell.classList.contains("show")) {
                cell.classList.remove("show");
            }
            cell.classList.add("hide");
        })
    }
    else {
        grid_toggle.id = "on";
        grid_toggle.textContent = "Hide Grid";
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

// pen color toggles
rgb_btn.addEventListener("click", (e) => {
    current_pen = rgb_btn;
    pen_color = generateRandomRGB();
});

opaque_btn.addEventListener("click", (e) => {
    current_pen = opaque_btn;
    pen_color = "#1F2428";
});

// generate random color
function randomColorNo() {
    return Math.floor(Math.random() * 256);
}

function generateRandomRGB() {
    let a = `${randomColorNo()}`;
    let b = `${randomColorNo()}`;
    let c = `${randomColorNo()}`;
    return `rgb(${a}, ${b}, ${c})`;
}

adjustGrid(100);



