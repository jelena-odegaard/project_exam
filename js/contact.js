const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
let nameHasError = false;

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
let lastNameHasError = false;

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
let messageHasError = false;

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
let emailHasError = false;

const submitMessage = document.querySelector("#submitMessage");

form.addEventListener("submit", validateForm);

function validateForm() {
    event.preventDefault();

    // check the name value
    const nameValue = name.value;

    if (validateLength(nameValue, 1) === true) {
        nameError.style.display = "none";
        nameHasError = false;
    } else {
        nameError.style.display = "block";
        nameHasError = true;
    }

    // check the last name value
    const lastNameValue = lastName.value;

    if (validateLength(lastNameValue, 2) === true) {
        lastNameError.style.display = "none";
        lastNameHasError = false;
    } else {
        lastNameError.style.display = "block";
        lastNameHasError = true;
    }

    // check the message value
    const messageValue = message.value;

    if (validateLength(messageValue, 6) === true) {
        messageError.style.display = "none";
        messageHasError = false;
    } else {
        messageError.style.display = "block";
        messageHasError = true;
    }

    // check the email value
    const emailValue = email.value;

    if (validateEmail(emailValue)) {
        emailError.style.display = "none";
        emailHasError = false;
    } else {
        emailError.style.display = "block";
        emailHasError = true;
    }

    // display the submitted message
    if (nameHasError === true || lastNameHasError === true || messageHasError === true || emailHasError === true) {
        submitMessage.style.display = "none";
    } else {
        submitMessage.style.display = "block";
    }
}

function validateLength(value, lengthToCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lengthToCheck) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}