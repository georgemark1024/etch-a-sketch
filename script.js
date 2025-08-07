const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
container = document.querySelector("#main-container");

let length = (windowHeight < windowWidth)? windowHeight : windowWidth;
length = length - 100;

let SIZE_OF_GRID = 16

for (let i = 0; i < SIZE_OF_GRID; i++) {
    divsContainer = document.createElement("div");
    divsContainer.classList.add("divs-container");
    for (let j = 0; j < SIZE_OF_GRID; j++) {
        div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.setProperty("flex", `1 0 ${length/SIZE_OF_GRID}px`);
        div.style.setProperty("height", `${length/SIZE_OF_GRID}px`);
        divsContainer.appendChild(div);
    }
    container.appendChild(divsContainer);
}

divs = document.querySelectorAll(".grid-item");
divs.forEach(div => {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "red";
    })
    div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = "lightblue";
    })
});