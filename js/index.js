// Your code goes here
// Random color to "Fun Bus" text when clicked
let headingAnimation = document.querySelector(".logo-heading");
function colorGenerator() {
    let min = 0;
    let max = 300;

    let colorR = Math.floor(Math.random() * (max-min + 1)) + min;
    let colorG = Math.floor(Math.random() * (max-min + 1)) + min;
    let colorB = Math.floor(Math.random() * (max-min + 1)) + min;

    return `rgb(${colorR}, ${colorG}, ${colorB})`;
}

headingAnimation.addEventListener('click', () => {
    headingAnimation.style.transitionProperty = 'color';
    headingAnimation.style.transition = 'ease-in';
    headingAnimation.style.color = colorGenerator()
})

headingAnimation.addEventListener('click', () => {
    headingAnimation.style.transitionProperty = 'color';
    headingAnimation.style.transition = '5s ease-out';
    headingAnimation.style.color = colorGenerator();
})