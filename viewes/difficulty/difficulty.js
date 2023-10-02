const nickname = document.querySelector(".nicknameInput")

const silly = document.querySelector(".silly")
const smart = document.querySelector(".smart")
const prodigy = document.querySelector(".prodigy")
const xray = document.querySelector(".x-ray")

const difficults = document.querySelectorAll(".difficultyButtonsButton")
let difficulty

const next = document.querySelector(".next")

difficults.forEach(button => {
    button.addEventListener("click", (e) => {
        difficulty = e.target.innerHTML
    })
})

next.addEventListener("click", (e) => {
    localStorage.setItem("nickname", nickname.value)
    localStorage.setItem("difficulty", difficulty)
    window.location.href = "../colors/colors.html"
})