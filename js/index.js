// Your code goes here
const signBtn = document.querySelectorAll(".btn");
signBtn.forEach(button => {
    button.addEventListener("click", () => {
        console.log(`Sign up button fired`)});
});

const logoImage = document.querySelector(".logo-heading");
logoImage.addEventListener("click", (event) => {
    console.log(`Logo Has Been Clicked: ${event}`)
});

const massaeBox = document.createElement('h2');
massaeBox.textContent = '   TIME TO TAKE THE FUN BUS! ';

const underLogo = document.querySelector('.intro');
underLogo.addEventListener('click', () => {
    console.log(`hello`)
    underLogo.prepend(massaeBox);
});


/*
const massaeBox = document.createElement("p");
massaeBox.textContent = 'ready to sign up';

const underLogo = document.querySelectorAll(".btn");
underLogo.forEach(button => {
    button.addEventListener('click', () => {
    console.log(`a`)
    underLogo.prepend(massaeBox)});
});
*/