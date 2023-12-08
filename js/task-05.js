'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('button.change-color'); 

const colorForm = document.querySelector('span.color'); 

const bodyForm = document.querySelector('body'); 

button.addEventListener('click', changeColorFn); 

function changeColorFn() {
    bodyForm.style.backgroundColor = getRandomHexColor(); 
    colorForm.textContent = bodyForm.style.backgroundColor; 
}