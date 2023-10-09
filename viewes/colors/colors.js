const music = document.getElementById('music')
music.volume = 0.5
music.addEventListener('canplaythrough', () => {});

let hover = new Audio
hover.src = "../../audio/hover.mp3"
let select = new Audio
select.src = "../../audio/select.mp3"
let remove = new Audio
remove.src = "../../audio/remove.mp3"

let colorsOptionsArraySound = document.querySelector(".colorsOptions")
let colorsOptionsSound = colorsOptionsArraySound.querySelectorAll("div")
colorsOptionsSound.forEach(button => {
    button.addEventListener("mouseenter", () => {
        hover.currentTime = 0.285
        hover.play()
    })
})

colorsOptionsSound.forEach(button => {
    button.addEventListener("click", () => {
        select.currentTime = 0.12
        select.play()
    })
})

let colorsDeleteSound = document.querySelector(".colorsDelete")
colorsDeleteSound.addEventListener("click", () => {
    remove.play()
})

let nickname = localStorage.getItem("nickname")
let difficulty = localStorage.getItem("difficulty")
let difficultyNum
let quantity = document.querySelector(".quantity")

let colorsSelection = document.querySelector(".colorsSelection")

let colorsDelete = document.querySelector(".colorsDelete")

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
        difficultyNum = 4
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

    let colors = []
    const colorsSelectionToExport = colorsSelection.querySelectorAll("div")
    colorsSelectionToExport.forEach(e => {
        colors.push(window.getComputedStyle(e).backgroundColor)
    })

    if (quantity.innerHTML == colorsSelectionToExport.length) {
        localStorage.setItem("nickname", JSON.stringify(nickname))
        localStorage.setItem("difficulty", JSON.stringify(difficulty))
        localStorage.setItem("difficultyNum", JSON.stringify(difficultyNum))
        localStorage.setItem("quantity", JSON.stringify(quantity.innerHTML))
        localStorage.setItem("colors", JSON.stringify(colors))
        
        window.location.href = "../play/play.html"
    } else {
        alert(`You must choose ${quantity.innerHTML} colors.`)
    }

})

console.log(localStorage);