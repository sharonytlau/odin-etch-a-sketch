const sketchPadDiv = document.querySelector("#sketch-pad");
const colorInput = document.querySelector("#color-picker");
const dimensionInput = document.querySelector("#dimension-range");
const dimensionDisplayDiv = document.querySelector("#dimension-display");
const clearBtn = document.querySelector("#clear-btn");

function changeColor(e) {
  const squares = Array.from(document.querySelectorAll(".pad-square"));
  squares.forEach(item => item.style.border = 'none');
  e.target.style['background-color'] = `${colorInput.value}`;
}

function makeRows(v){ 
  for(let i = 0; i < v; i++){ 
    let row = document.createElement("div"); 
    row.className = "pad-row"; 
    for(let x = 1; x <= v; x++){ 
        let cell = document.createElement("div"); 
        cell.className = "pad-square"; 
        row.appendChild(cell); 
    } 
    sketchPadDiv.appendChild(row); 
  }
  const squares = Array.from(document.querySelectorAll(".pad-square"));
  
  squares.forEach(item => item.addEventListener('mouseover', changeColor));
} 

function updatePad(e) {
  while (sketchPadDiv.firstChild) {
    sketchPadDiv.firstChild.remove();
}
  const dimension = dimensionInput.value;
  dimensionDisplayDiv.textContent = `${dimension} × ${dimension}`
  makeRows(dimension);
}

dimensionInput.addEventListener('input', updatePad);

clearBtn.addEventListener('click', updatePad);

function initialize () {
  makeRows(10);
}

initialize()