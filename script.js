const divHolder = document.querySelector("#grid-holder");
const colorChanger = document.querySelector("#color-changer");
const eraser = document.querySelector("#eraser");
const clearGrid = document.querySelector("#clear-grid");
const gridChanger = document.querySelector("#grid-changer");
const removeGridLines = document.querySelector("#remove-lines");
const rainbowButton = document.querySelector("#rainbow");
var rainbowMode = false;
var eraserOn = false;

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
        var newColor = randomColor();
        e.target.style.backgroundColor = newColor;
    }
})

eraser.addEventListener("click", function() {
    colorChanger.value = "#ffffff";
    borderColorChange();
    if (eraserOn === false) {
        eraser.style.borderColor = "rgb(184, 115, 51)";
        eraserOn = true;
    } else {
        eraser.style.borderColor = "rgb(228, 227, 227)";
        colorChanger.value = randomColor();
        eraserOn = false;
    }
    if (rainbowMode === true) {
        rainbowMode = false;
        rainbowButton.style.borderColor = "rgb(228, 227, 227)";
    }
})

clearGrid.addEventListener("click", function() {
    var children = document.querySelectorAll(".grid-object");
    children.forEach(element => {   
        element.style.backgroundColor = "#ffffff";
    })
})

function borderColorChange() {
    colorChanger.style.borderColor = colorChanger.value;
}

colorChanger.addEventListener("input", function() {
    borderColorChange();
    eraser.style.borderColor = "rgb(228, 227, 227)";
    rainbowButton.style.borderColor = "rgb(228, 227, 227)";
    rainbowMode = false;
});

rainbowButton.addEventListener("click", function() {
    eraser.style.borderColor = "rgb(228, 227, 227)";
    if (rainbowMode === false) {
        eraserOn = false;
        rainbowMode = true;
        rainbowButton.style.borderColor = "rgb(184, 115, 51)";
    } else {
        rainbowMode = false;
        rainbowButton.style.borderColor = "rgb(228, 227, 227)";
    }
})

window.onload = createSquare(16);
window.onload = borderColorChange();