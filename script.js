const divHolder = document.querySelector("#grid-holder");
const colorChanger = document.querySelector("#color-changer");
const eraser = document.querySelector("#eraser");
const clearGrid = document.querySelector("#clear-grid");
const gridChanger = document.querySelector("#grid-changer");

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
        divHolder.appendChild(square);
    }
}

// Changing Grid Size via input
gridChanger.addEventListener("input", function() {
    var gridValue = gridChanger.value;
    removeAllChildren();
    createSquare(gridValue);
})


// Coloring
divHolder.addEventListener("mouseover", function(e) {
    var color = colorChanger.value;
    if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = color;
    }
})

eraser.addEventListener("click", function() {
    colorChanger.value = "#ffffff";
})

clearGrid.addEventListener("click", function() {
    var children = document.querySelectorAll(".square");
    children.forEach(element => {   
        element.style.backgroundColor = "#ffffff";
    })
})


window.onload = createSquare(16);