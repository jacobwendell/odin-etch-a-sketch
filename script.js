const divHolder = document.querySelector("#grid-holder");
const colorChanger = document.querySelector("#color-changer");
const eraser = document.querySelector("#eraser");
const clearGrid = document.querySelector("#clear-grid");
const gridChanger = document.querySelector("#grid-changer");
const spanElement = document.querySelector("span");
const removeGridLines = document.querySelector("#remove-lines");
const rainbowButton = document.querySelector("#rainbow");
var rainbowMode = false;

function removeAllChildren() {
    divHolder.innerHTML = "";
}

// For changing the grid
function createSquare(value) {
    removeAllChildren();
    // var padding = setPadding(value);
    divHolder.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    divHolder.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    for (var i=0; i < value * value; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.classList.add("grid-object");
        square.style.backgroundColor = "#ffffff";
        divHolder.appendChild(square);
    }
}

// Changing Grid Size via input
gridChanger.addEventListener("input", function() {
    var gridValue = gridChanger.value;
    removeAllChildren();
    createSquare(gridValue);
})

removeGridLines.addEventListener("click", function() {
    var children = document.querySelectorAll(".grid-object");
    children.forEach(element => {
        element.classList.toggle("square");
    })
})


// Coloring
function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;

}

divHolder.addEventListener("mouseover", function(e) {
    var color = colorChanger.value;
    if (e.target.classList.contains("grid-object") && rainbowMode === false) {
        e.target.style.backgroundColor = color;
    } else if (e.target.classList.contains("grid-object") && rainbowMode === true) {
        e.target.style.backgroundColor = randomColor();
    }
})

eraser.addEventListener("click", function() {
    colorChanger.value = "#ffffff";
})

clearGrid.addEventListener("click", function() {
    var children = document.querySelectorAll(".grid-object");
    children.forEach(element => {   
        element.style.backgroundColor = "#ffffff";
    })
})

colorChanger.addEventListener("input", function() {
    spanElement.style.backgroundColor = colorChanger.value;
})

rainbowButton.addEventListener("click", function() {
    if (rainbowMode === false) {
        rainbowMode = true;
    } else {
        rainbowMode = false;
    }
})

window.onload = createSquare(16);