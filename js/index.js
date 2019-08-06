// Your code goes here

const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        alert("Thank you!!!");
    });
});

const logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', (event) => {
    logo.style.display = "none";
});

const pics = document.querySelectorAll('img');
pics.forEach(img => {
    img.addEventListener('keypress', (event) => {
        img.style.opacity = "0.5";
    });
});

const bus = document.querySelector('img');

console.log(pics);
console.log(bus);