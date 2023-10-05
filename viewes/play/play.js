let colors = JSON.parse(localStorage.getItem("info")).colors
let difficulty = JSON.parse(localStorage.getItem("info")).difficulty
let difficultyNum = JSON.parse(localStorage.getItem("info")).difficultyNum

let colorPicker = document.querySelector(".colorPicker")
let board = document.querySelector(".board")

colors.forEach(e => {
    let colorSelector = document.createElement("div")
    colorSelector.style.backgroundColor = e
    colorSelector.classList.add("colorPickerButton")
    colorPicker.appendChild(colorSelector)
});

for (let i = 0; i < difficultyNum; i++) {
    let row = document.createElement("div")
    row.classList.add("boardRow")
    row.innerHTML = `
        <div class="boardRowSelection">
            <div class="boardRowSelectionColor"></div>
            <div class="boardRowSelectionColor"></div>
            <div class="boardRowSelectionColor"></div>
            <div class="boardRowSelectionColor"></div>
        </div>
        <div class="boardRowComprobation">
            <div class="boardRowComprobationColor"></div>
            <div class="boardRowComprobationColor"></div>
            <div class="boardRowComprobationColor"></div>
            <div class="boardRowComprobationColor"></div>
        </div>
    `
    board.appendChild(row)
}