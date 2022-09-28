const divHolder = document.querySelector("#grid-holder");
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

// Initial Grid Created

gridChanger.addEventListener("click", function() {
    var gridValue = Number(prompt("How big would you like the Grid too be? 16x16, 32x32, 64x64"));
    if (gridValue > 100) {
        alert("Too High, Changed to 100");
        gridValue = 100;
    }
    createSquare(gridValue);
})

// Coloring
divHolder.addEventListener("mouseover", function(e) {
    if (e.target.classList.contains("square")) {
        e.target.classList.add("colored-in");
    }
})

// TO DO 
// Make Buttons for Erasing, Changing Color, etc