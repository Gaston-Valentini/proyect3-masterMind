let colors = JSON.parse(localStorage.getItem("info")).colors
let difficulty = JSON.parse(localStorage.getItem("info")).difficulty
let difficultyNum = JSON.parse(localStorage.getItem("info")).difficultyNum
let quantity = JSON.parse(localStorage.getItem("info")).quantity

let winnerCombination = []
let userCombination = []

for (let i = 0; i < quantity; i++) {
    winnerCombination.push(colors[Math.floor(Math.random() * colors.length)])
}

let colorPicker = document.querySelector(".colorPicker")
let board = document.querySelector(".board")

colors.forEach(e => {
    let colorPickerButton = document.createElement("div")
    colorPickerButton.style.backgroundColor = e
    colorPickerButton.classList.add("colorPickerButton")
    colorPicker.appendChild(colorPickerButton)
});

const createRow = (id) => {
    let boardRow = document.createElement("div")
    boardRow.classList.add("boardRow")
    boardRow.id = id
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
    createRow(i)
}

let actualRowId = 0
let actualColorNum = 0

let colorPickerButtons = document.querySelectorAll(".colorPickerButton")
colorPickerButtons.forEach(button => button.addEventListener("click", (e) => {
    let actualRow = document.getElementById(actualRowId)
    let actualSelector = actualRow.querySelectorAll("div")[0]
    let actualSelectorColor = actualSelector.querySelectorAll("div")[actualColorNum]
    if ((actualColorNum < quantity) && (actualSelectorColor.style.backgroundColor === "")) {
        actualSelectorColor.style.backgroundColor = e.target.style.backgroundColor
        actualColorNum++
        if (actualColorNum == quantity) {
            check.removeAttribute("disabled");
        }
    }
}))

let remove = document.querySelector(".remove")
remove.addEventListener("click", () => {
    let actualRow = document.getElementById(actualRowId)
    let actualSelector = actualRow.querySelectorAll("div")[0]
    let actualSelectorColor = actualSelector.querySelectorAll("div")[actualColorNum - 1]
    if (actualColorNum > 0) {
        actualSelectorColor.style.backgroundColor = ""
        actualColorNum--
        if (actualColorNum != quantity) {
            check.setAttribute("disabled", "true");
        }
    }
})

let check = document.querySelector(".check")
check.addEventListener("click", () => {

    let actualRow = document.getElementById(actualRowId)
    let actualSelectors = actualRow.querySelectorAll(".boardRowSelectionColor")
    let actualComprobations = actualRow.querySelectorAll(".boardRowComprobationColor")

    for (let i = 0; i < actualSelectors.length; i++) {
        let actualSelectorColor = actualSelectors[i]
        userCombination.push(actualSelectorColor.style.backgroundColor)
    }

    const areArraysEqual = (arr1, arr2)  => {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                userCombination = []
                return false;
            }
        }
        return true;
    }

    if (areArraysEqual(winnerCombination, userCombination)) {
        window.location.href = "../gameOver/gameOver.html"
    } else {
        for (let i = 0; i < quantity; i++) {
            if (actualSelectors[i].style.backgroundColor === winnerCombination[i]) {
                actualComprobations[i].style.backgroundColor = "rgb(0,0,0)"
            } else if (winnerCombination.includes(actualSelectors[i].style.backgroundColor)) {
                actualComprobations[i].style.backgroundColor = "rgb(255,255,255)"
            }
        }

        actualRowId++
        actualColorNum = 0
        check.setAttribute("disabled", "true");
    }

})