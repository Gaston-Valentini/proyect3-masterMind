let colors = JSON.parse(localStorage.getItem("info")).colors
let difficulty = JSON.parse(localStorage.getItem("info")).difficulty
let difficultyNum = JSON.parse(localStorage.getItem("info")).difficultyNum
let quantity = JSON.parse(localStorage.getItem("info")).quantity

let colorPicker = document.querySelector(".colorPicker")
let board = document.querySelector(".board")

colors.forEach(e => {
    let colorPickerButton = document.createElement("div")
    colorPickerButton.style.backgroundColor = e
    colorPickerButton.classList.add("colorPickerButton")
    colorPicker.appendChild(colorPickerButton)
});

const createRow = () => {
    let boardRow = document.createElement("div")
    boardRow.classList.add("boardRow")
    let boardRowSelection = document.createElement("div")
    boardRowSelection.classList.add("boardRowSelection")
    let boardRowComprobation = document.createElement("boardRowComprobation")
    boardRowComprobation.classList.add("boardRowComprobation")

    boardRow.appendChild(boardRowSelection)
    boardRow.appendChild(boardRowComprobation)

    board.appendChild(boardRow)

    for (let i = 0; i < quantity; i++) {
        let boardRowSelectionColor = document.createElement("div")
        boardRowSelectionColor.classList.add("boardRowSelectionColor")
        let boardRowComprobationColor = document.createElement("div")
        boardRowComprobationColor.classList.add("boardRowComprobationColor")
        boardRowSelection.appendChild(boardRowSelectionColor)
        boardRowComprobation.appendChild(boardRowComprobationColor)
    }
}

for (let i = 0; i < difficultyNum; i++) {
    createRow()
}