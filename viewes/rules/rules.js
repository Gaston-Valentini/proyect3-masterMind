const music = document.getElementById('music')
music.volume = 0.5
music.addEventListener('canplaythrough', () => {});

let hover = new Audio
hover.src = "../../audio/hover.mp3"
let play = document.querySelector(".play")
play.addEventListener("mouseenter", () => {
    hover.currentTime = 0.285
    hover.play()
})