localStorage.clear()

const music = document.getElementById('music')
music.volume = 0.5
music.addEventListener('canplaythrough', () => {});

let hover = new Audio
hover.src = "./audio/hover.mp3"
let buttonsSound = document.querySelector(".buttons")
let arrayButtonsSound = buttonsSound.querySelectorAll("a")
arrayButtonsSound.forEach(button => {
    button.addEventListener("mouseenter", () => {
        hover.currentTime = 0.285
        hover.play()
    })
})