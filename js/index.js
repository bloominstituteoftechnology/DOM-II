// Your code goes here

//Mouseover
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', (event) => {
    console.log('change color')
    logoHeading.classList.toggle('change-color');
});

//Keydown
document.querySelector('body').addEventListener('keydown', myKeydownFunc);

function myKeydownFunc() {
    alert('UH-OH, you pressed a button!');
}


//Wheel
document.querySelector('.home').addEventListener('wheel', myWheelFunc);

function myWheelFunc() {
    this.style.color = 'dodgerblue';
}
