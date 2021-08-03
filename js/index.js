// Your code goes here

// 1.mouseover
let intro = document.querySelector(".intro");
intro.addEventListener("mouseover", function(event) {
    event.target.style.color = "purple";
})

// 2. keydown
let bgChange = document.querySelector("body");
bgChange.addEventListener("keydown", function(event) {
    event.target.style.backgroundColor = '#FBFBE4';
    console.log(event.target.style);
})

// 3. keyup
bgChange.addEventListener("keyup", function(event) {
    event.target.style.backgroundColor = 'white';
    console.log(event.target.style);
})

// 4. copy
let textColorChange = document.querySelector(".text-content");
textColorChange.addEventListener("copy", function(event) {
    event.target.style.color = 'pink';
})

// 5. dblclick
let imgAddBorder = document.querySelector(".intro img");
imgAddBorder.addEventListener("dblclick", function(event) {
    event.target.style.border = '10px dotted pink';
})

// 6. click
let newButton = document.createElement('button');
intro.appendChild(newButton);
newButton.textContent = 'What is your name?';

let textBox = document.createElement('input');
textBox.type = 'text';
let textSubmit = document.createElement('button');
textSubmit.textContent = 'Submit';
newButton.addEventListener('click', function(event) {
    intro.appendChild(textBox);
    intro.appendChild(textSubmit);
})

// 7. focusin
textBox.addEventListener('focusin', function(event) {
    event.target.style.backgroundColor = "pink";
})

// 8. focusout
textBox.addEventListener('focusout', function(event) {
    event.target.style.backgroundColor = '';
})

textSubmit.addEventListener('click', function(event) {
    alert(`Hi ${textBox.value}, Welcome to Fun Bus!`);
})

// 9. load
window.addEventListener('load', (event) => {
    alert('Page is fully loaded');
});

// 10. mousedown
document.addEventListener('mousedown', (event) => {
    bgChange.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

// 11. mouseup
document.addEventListener('mouseup', (event) => {
    bgChange.style.backgroundColor = '';
});

// 12. preventDefault()
let mulNav = document.querySelectorAll(".nav a");
mulNav.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
    });
})