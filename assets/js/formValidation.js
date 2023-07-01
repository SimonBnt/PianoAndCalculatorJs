const forms = document.querySelectorAll(".form")

const emailInputs = document.querySelectorAll("input[type='email']")
const emailErrorMessage = document.querySelectorAll(".emailError")

const nameInputs = document.querySelectorAll(".nameInput")
const nameErrorMessage = document.querySelectorAll(".nameError")

const messageInputs = document.querySelectorAll(".messageInput")
const messageErrorMessage = document.querySelectorAll(".messageError")

emailInputs.forEach((input, index) => {
    input.addEventListener("mouseleave", () => {
        if(input.value === "" || input.value == null) {
            emailErrorMessage[index].innerHTML = "Your mail have to be complete"
            emailErrorMessage[index].style.color = "red"
            
        } else if(!input.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            emailErrorMessage[index].innerHTML = "Your mail must be in correct format"
            emailErrorMessage[index].style.color = "red"
        } else {
            emailErrorMessage[index].innerHTML = "<i class='fas fa-check-circle'></i>"
            emailErrorMessage[index].style.color = "green"
            emailErrorMessage[index].style.position = "absolute"
            emailErrorMessage[index].style.top = "50%"
            emailErrorMessage[index].style.right = "1rem"
            emailErrorMessage[index].style.transform = "translateY(-50%)"
            emailErrorMessage[index].style.padding = "0.5rem"
        }
    })
})

nameInputs.forEach((input, index) => {
    input.addEventListener("mouseleave", () => {
        if(input.value === "" || input.value == null) {
            nameErrorMessage[index].innerHTML = "Your name must be complete to be complete"
            nameErrorMessage[index].style.color = "red"
        } else if(!input.value.match(/^[A-Za-z]*$/)) {
            nameErrorMessage[index].innerHTML = "The mail must be in correct format"
            nameErrorMessage[index].style.color = "red"
        } else {
            nameErrorMessage[index].innerHTML = "<i class='fas fa-check-circle'></i>"
            nameErrorMessage[index].style.color = "green"
            nameErrorMessage[index].style.position = "absolute"
            nameErrorMessage[index].style.top = "50%"
            nameErrorMessage[index].style.right = "1rem"
            nameErrorMessage[index].style.transform = "translateY(-50%)"
            nameErrorMessage[index].style.padding = "0.5rem"
        }
    })
})

const validateMessage = () => {
    if(textArea.value === "" || textArea.value == null) {
        messageError.innerHTML = "Un message nous est nécessaire pour comprendre votre besoin"
        return false
    }
    if(!textArea.value.match(/^[A-Za-z]*[0-9]*$/)) {
        messageError.innerHTML = "Votre message ne doit contenir que des lettres et des chiffres"
        return false
    }
    if(textArea.lenght > 255) {
        messageError.innerHTML = "Votre message ne doit pas dépasser 255 caractères"
        return false
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true
} 

// forms.addEventListener("submit", () => {
//     e.preventDefault()
    
//     // if(validateFirstName() && validateLastName() && validateMessage() && validateNumber()) {
//     //     submitError.style.display = "block"
//     //     submitError.innerHTML = "Votre formulaire a bien été envoyé."
//     //     setTimeout(function(){submitError.style.display = "none"}, 3000)
//     //     document.forms["form"].submit()
//     //     return true
//     // } else {
//     //     submitError.style.display = "block"
//     //     submitError.innerHTML = "Remplissez correctement le formulaire avant d'envoyer"
//     //     setTimeout(function(){submitError.style.display = "none"}, 3000)
//     //     return false
//     // }
// })