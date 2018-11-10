// Your code goes here

//Mouseover
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', () => {
    logoHeading.classList.toggle('change-color');
});

//Mouseout
logoHeading.addEventListener('mouseout', () => {
    logoHeading.classList.toggle('change-color-again')
})

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

//Click
document.querySelector('.text-content h2').addEventListener('click', myClick)

function myClick() {
    document.querySelector(".text-content h2").textContent = "CLICK BAIT!!!"
}

//Load
window.addEventListener('load', function(event) {
   alert('Hurry and jump on in. The bus is loaded!');
})

//dblclick
const introHeading = document.querySelector('.intro h2');

introHeading.addEventListener('dblclick', (event) => {
    introHeading.classList.toggle('display-none');
});

//scroll
window.addEventListener('scroll', () => {
    console.log('scrolled!')
    document.querySelector('header').style.backgroundColor = 'yellow';
})


//resize
window.addEventListener('resize', myResizeFunc)
function myResizeFunc() {
    alert('window has been resize')
}