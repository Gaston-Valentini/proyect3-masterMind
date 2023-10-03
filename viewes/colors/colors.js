let difficulty = localStorage.getItem("difficulty")

let colorsSelection = document.querySelector(".colorsSelection")

let colorsDelete = document.querySelector(".colorsDelete")

let quantity = document.querySelector(".quantity")

let colorsOptions = document.querySelector(".colorsOptions")
let colorsOptionsColors = document.querySelectorAll(".colorsOptionsColor")

switch (difficulty) {
    case "Silly":
        quantity.innerHTML = "4"
        colorsOptionsColors.forEach(button => {
            button.addEventListener("click", () => {
                if (colorsSelection.childElementCount < 4)
                    colorsSelection.appendChild(button)
                })
        })
        break;
    case "Smart":
        quantity.innerHTML = "5"
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
    let last = colorsSelection.lastElementChild
    colorsOptions.appendChild(last)
})