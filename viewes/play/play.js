let info = JSON.parse(localStorage.getItem("info"))

let colorPicker = document.querySelector(".colorPicker")

info.colors.forEach(e => {
    let colorSelector = document.createElement("div")
    colorSelector.style.backgroundColor = e
    colorSelector.classList.add("colorPickerButton")
    colorPicker.appendChild(colorSelector)
});