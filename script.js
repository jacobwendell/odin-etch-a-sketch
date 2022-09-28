const divHolder = document.querySelector("#grid-holder");
const gridChanger = document.querySelector("#grid-changer");

function setPadding(value) {
    if (value === 16) {
        return 10;
    } else if(value === 32) {
        return 7;
    } else if(value === 64) {
        return 3;
    }

}

function removeAllChildren() {
    while (divHolder.firstChild) {
        divHolder.removeChild(divHolder.lastChild);
    }
}

function createSquare(value) {
    removeAllChildren();
    var padding = setPadding(value);
    divHolder.style.cssText = `grid-template-columns: repeat(${value}, 1fr);`;
    for (var i=0; i < value; i++) {
        for (var x=0; x < value; x++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = `padding: ${padding};`;
            divHolder.appendChild(square);
        }
    }
}
createSquare(16);

divHolder.addEventListener("mouseover", function(e) {
    if (e.target.classList.contains("square")) {
        e.target.classList.add("colored-in");
    }
})

gridChanger.addEventListener("click", function() {
    var gridValue = Number(prompt("How big would you like the Grid too be? 16x16, 32x32, 64x64"));
    createSquare(gridValue);
})
