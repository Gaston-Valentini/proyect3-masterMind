localStorage.clear()

let nickname = document.querySelector(".nicknameInput")

let silly = document.querySelector(".silly")
let smart = document.querySelector(".smart")
let prodigy = document.querySelector(".prodigy")
let xray = document.querySelector(".x-ray")

let difficults = document.querySelectorAll(".difficultyButtonsButton")
let difficulty

let next = document.querySelector(".next")

nickname.addEventListener("change", e => {
    localStorage.setItem("nickname", e.target.value)
})

const classToggle = (button, difficults, difficulty) => {
    button.classList.toggle("selected")
        difficults.forEach(button2=> {
        if (button2.classList.contains("selected") && (button2.innerHTML !== difficulty)) {
            button2.classList.remove("selected")
        }
    })
}

difficults.forEach(button => {
    button.addEventListener("click", (e) => {
        if (button.innerHTML == difficulty) {
            localStorage.removeItem("difficulty")
            classToggle(button, difficults, difficulty)
            console.log(localStorage);
        } else {
            difficulty = e.target.innerHTML
            localStorage.setItem("difficulty", difficulty)
            classToggle(button, difficults, difficulty)
            console.log(localStorage);
        }
    })
})

next.addEventListener("click", () => {
    if (localStorage.length < 2) {
        alert("You must fill out all the fields.")
    } else {
        window.location.href = "../colors/colors.html"
    }
})