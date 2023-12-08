'use strict'

const loginForm = document.querySelector(".login-form");

const register = {};

loginForm.addEventListener("submit", enter => {
    enter.preventDefault();
    const data = new FormData(enter.target);
    const emailValue = loginForm.elements.email.value.trim();
    const passwordValue = loginForm.elements.password.value.trim();

    if (!emailValue || !passwordValue) {
        alert("All form fields must be filled in!");
    } else {
        data.forEach((value, key) => {
            register[key] = value;
        });

        console.log(register);
        loginForm.reset();
    };

});