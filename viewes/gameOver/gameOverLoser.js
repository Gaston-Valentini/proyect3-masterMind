let nickname = localStorage.getItem("nickname")

let user = document.querySelector(".user")
user.innerHTML = nickname.replace(/["']/g, "")