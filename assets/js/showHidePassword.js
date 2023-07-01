const showIcons = document.querySelectorAll(".showIcon")
const hideIcons = document.querySelectorAll(".hideIcon")
const passwordInputs = document.querySelectorAll("input[type='password']")

showIcons.forEach((showIcon, index) => {showIcon.addEventListener("click", () => {
        passwordInputs[index].type = "text"
        showIcon.style.display = "none"
        hideIcons[index].style.display = "inline-block"
    })
})
  
hideIcons.forEach((hideIcon, index) => {hideIcon.addEventListener("click", () => {
        passwordInputs[index].type = "password"
        hideIcon.style.display = "none"
        showIcons[index].style.display = "inline-block"
    })
})