const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

let length = (windowHeight < windowWidth)? windowHeight : windowWidth;
length = length - 100;

container = document.querySelector("#main-container");
body = document.querySelector("body");


btn = document.createElement("button");
btn.textContent = "Change number of squares";
btn.classList.add("button");
body.insertBefore(btn, container);


btn.addEventListener("click", () => {
    let squares = 0;
    while (1) {
        squares = prompt("Enter number of squares per row and column");
        if (squares < 1 || squares > 100) {
            alert("0 < squares <= 100");
            continue;
        }
        break;
    }

    mainContainer = document.querySelector("#main-container");
    mainContainer.innerHTML = ""
    drawGrid(squares);
})


const SIZE_OF_GRID = 16;

function drawGrid(size) {
    for (let i = 0; i < size; i++) {
        divsContainer = document.createElement("div");
        divsContainer.classList.add("divs-container");
        for (let j = 0; j < size; j++) {
            div = document.createElement("div");
            div.classList.add("grid-item");
            div.style.setProperty("flex", `1 0 ${length/size}px`);
            div.style.setProperty("height", `${length/size}px`);
            divsContainer.appendChild(div);
        }
        container.appendChild(divsContainer);
    }
    addEventListenersToDivs();
}

function addEventListenersToDivs() {
    divs = document.querySelectorAll(".grid-item");
    divs.forEach(div => {
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "yellow";
        })
        div.addEventListener("mouseleave", () => {
            div.style.backgroundColor = "black";
        })
    });
}

drawGrid(SIZE_OF_GRID);