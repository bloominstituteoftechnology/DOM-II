// Your code goes here
const welcomeTo = document.querySelector(".intro h2")

welcomeTo.addEventListener("mouseover", (event) => {
    event.target.style.color = "orange"

    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
}, false)

document.addEventListener("keydown", (event) => {
    if(event.key === "f") {
        welcomeTo.style.color = "purple"

        setTimeout(function() {
            welcomeTo.style.color = "";
          }, 500);
    }
}, false)

document.addEventListener("wheel", () => {
    welcomeTo.style.color = "red"

    setTimeout(function() {
        welcomeTo.style.color = "";
      }, 500);
}, false)

welcomeTo.addEventListener("dblclick", (event) => {
    event.target.style.background = "pink"

    setTimeout(function() {
        event.target.style.background = "";
      }, 500);
}, false)

document.addEventListener("keyup", (event) => {
    if (event.key === "k") {
    
    welcomeTo.style.background = "orange"

    setTimeout(function() {
        welcomeTo.style.background = "";
      }, 500)}
}, false)

document.addEventListener('copy', () => {
    welcomeTo.textContent = 'dont copy please'
    welcomeTo.style.background = 'green'
})

document.addEventListener('cut', () => {
    welcomeTo.textContent = 'dont cut please'
    welcomeTo.style.background = 'yellow'
})

document.addEventListener('paste', () => {
    welcomeTo.textContent = 'Nice pasting skills!'
    welcomeTo.style.background = 'red'
})

welcomeTo.addEventListener('click', () => {
    welcomeTo.textContent = 'You clicked me!'
})

document.addEventListener('DOMContentLoaded', (event) => {
    welcomeTo.textContent = 'dom fully loaded'

    setTimeout(function() {
        welcomeTo.textContent = 'Welcome To Fun Bus!'
      }, 500);
}, false);

document.querySelector(".intro img").addEventListener("click", function(event) {
    welcomeTo.innerHTML = "sorry you cannot click on that picture!";
    event.stopPropagation();
}, false);

document.querySelector(".nav a").addEventListener("click", function(event) {
    event.preventDefault();
}, false);
