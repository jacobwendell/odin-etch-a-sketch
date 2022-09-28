const divHolder = document.querySelector("#grid-holder");
const gridChanger = document.querySelector("#grid-changer");
const colorChanger = document.querySelector("#color-changer");
const eraser = document.querySelector("#eraser");
const clearGrid = document.querySelector("#clear-grid");

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

gridChanger.addEventListener("click", function() {
    var gridValue = Number(prompt("How big would you like the Grid too be? 1-100"));
    if (gridValue > 100) {
        alert("Too High, Changed to 100");
        gridValue = 100;
    }
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

// TO DO 
// Make Buttons for Erasing, Changing Color, etc