const container = document.querySelector("#container");
let numberOfSquaresSide = 16;


//creating a number of lines equal to numberOfSquaresSide
for (let i=1; i <= numberOfSquaresSide; i++) {
    const createLine = document.createElement("div");
    createLine.setAttribute("id", "line");
    container.appendChild(createLine);
}

//converting all lines into array
const line = document.querySelectorAll("#line");
let lineArr = Array.prototype.slice.call(line);

//creating number of squares in each line equal to numberOfSquaresSide
for (elem of lineArr) {
    for(let j=1; j <= numberOfSquaresSide; j++) {
        const createDiv = document.createElement("div");
        createDiv.setAttribute("id", "square-item");
        elem.appendChild(createDiv);
    }   
}




