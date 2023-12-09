function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValue = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const newBoxes = document.getElementById('boxes');

function createBoxes(amount) {
    newBoxes.innerHTML = '';
    let size = 30; 
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.classList.add("boxes-item");
        newBoxes.appendChild(box);
        size += 10; 
    }
}

function destroyBoxes() {
    newBoxes.innerHTML = '';
    inputValue.value = '';
}

createBtn.addEventListener('click', () => {
    const amount = inputValue.value;
    inputValue.value = '';
    amount >= 1 && amount <= 100 ? createBoxes(amount) : alert('Please enter a number between 1 and 100.');
});

destroyBtn.addEventListener('click', destroyBoxes);