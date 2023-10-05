let nickname = localStorage.getItem("nickname")
let difficulty = localStorage.getItem("difficulty")
let difficultyNum

let colorsSelection = document.querySelector(".colorsSelection")

let colorsDelete = document.querySelector(".colorsDelete")

let quantity = document.querySelector(".quantity")

let colorsOptions = document.querySelector(".colorsOptions")
let colorsOptionsColors = document.querySelectorAll(".colorsOptionsColor")

let colorsPlay = document.querySelector(".colorsPlay")

switch (difficulty) {
    case "Silly":
        quantity.innerHTML = "4"
        difficultyNum = 10
        colorsOptionsColors.forEach(button => {
            button.addEventListener("click", () => {
                if (colorsSelection.childElementCount < 4)
                    colorsSelection.appendChild(button)
                })
        })
        break;
    case "Smart":
        quantity.innerHTML = "5"
        difficultyNum = 8
        colorsOptionsColors.forEach(button => {
            button.addEventListener("click", () => {
                if (colorsSelection.childElementCount < 5) {
                    colorsSelection.appendChild(button)
                }
            })
        })
        break;
    case "Prodigy":
        quantity.innerHTML = "6"
        difficultyNum = 6
        colorsOptionsColors.forEach(button => {
            button.addEventListener("click", () => {
                if (colorsSelection.childElementCount < 6) {
                    colorsSelection.appendChild(button)
                }
            })
        })
        break;
    case "X-RAYS":
        quantity.innerHTML = "8"
        difficultyNum = 1
        colorsOptionsColors.forEach(button => {
            button.addEventListener("click", () => {
                if (colorsSelection.childElementCount < 8) {
                    colorsSelection.appendChild(button)
                }
            })
        })
        break;
    default:
        break;
}

colorsDelete.addEventListener("click", () => {
    if (colorsSelection.childElementCount > 0) {
        let last = colorsSelection.lastElementChild
        colorsOptions.appendChild(last)
    }
})

colorsPlay.addEventListener("click", () => {
    localStorage.clear()

    let colors = []
    const colorsSelectionToExport = colorsSelection.querySelectorAll("div")
    colorsSelectionToExport.forEach(e => {
        colors.push(window.getComputedStyle(e).backgroundColor)
    })

    localStorage.setItem("info", JSON.stringify({
        nickname,
        difficulty,
        difficultyNum,
        quantity: quantity.innerHTML,
        colors
    }))
    window.location.href = "../play/play.html"
})