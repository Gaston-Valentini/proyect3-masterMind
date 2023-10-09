const music = document.getElementById('music')
music.volume = 0.5
music.addEventListener('canplaythrough', () => {});

let hover = new Audio
hover.src = "../../audio/hover.mp3"

let playAgain = document.querySelector(".playAgain")
playAgain.addEventListener("mouseenter", () => {
    hover.currentTime = 0.285
    hover.play()
})

let nickname = localStorage.getItem("nickname")

let user = document.querySelector(".user")
user.innerHTML = nickname.replace(/["']/g, "")

console.log(localStorage);