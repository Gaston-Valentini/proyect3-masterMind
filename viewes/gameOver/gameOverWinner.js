let nickname = localStorage.getItem("nickname")
let gameTime = localStorage.getItem("gameTime")
let difficulty = localStorage.getItem("difficulty")
let attempts = localStorage.getItem("attempts")

let gameTimeFormat

const getFormat = () => {
    let seconds = Math.floor(gameTime / 1000);
    let minutes = Math.floor(seconds / 60);

    seconds %= 60;
    minutes %= 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    gameTimeFormat = `${minutes}:${seconds}`
}

getFormat()

let user = document.querySelector(".user")
user.innerHTML = nickname.replace(/["']/g, "")
let stadisticsTime = document.querySelector(".stadisticsTime")
stadisticsTime.innerHTML = gameTimeFormat
let stadisticsDifficulty = document.querySelector(".stadisticsDifficulty")
stadisticsDifficulty.innerHTML = difficulty.replace(/["']/g, "")
let stadisticsAttempts = document.querySelector(".stadisticsAttempts")
stadisticsAttempts.innerHTML = attempts