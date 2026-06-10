const container = document.querySelector('#the-container');
const button = document.querySelector('#the-button');
const size = 16;

function setCanvas(gridSize){
    const bigCanvas = document.createElement('div');
    bigCanvas.classList.add('container');
    for(let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('rowContainer');
        for(let j = 0; j < gridSize; j++){
            const column = document.createElement('div');
            column.classList.add('columnContainer');
            row.appendChild(column);
        }
        bigCanvas.appendChild(row);
    }
    container.appendChild(bigCanvas);
}


button.addEventListener('click', () => {
    container.innerHTML = '';
    let newSize = prompt('Enter a new grid size', 16);
    alert('wait a momment');
    if(newSize > 100){
        newSize = 100;
    } else if(newSize < 1){
        newSize = 1;
    }
    setCanvas(newSize);
    makeTrail()
})

function rng(){
    return Math.floor(Math.random() * 255)
}
function makeTrail(){
    const columnDiv = document.querySelectorAll('.columnContainer')
    columnDiv.forEach((div) => {
        div.addEventListener('mouseover', () => {
        let color = `rgb(${rng()}, ${rng()}, ${rng()})`
        div.style.backgroundColor = color;
        })
    })
}


setCanvas(size);
makeTrail();
