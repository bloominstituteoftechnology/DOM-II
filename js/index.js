
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', () => {
    logoHeading.classList.toggle('change-color');
});

logoHeading.addEventListener('mouseout', () => {
    logoHeading.classList.toggle('change-color-again')
})
 
document.querySelector('body').addEventListener('keydown', myKeydownFunc);
 function myKeydownFunc() {
    alert('UH-OH, you pressed a button!');
}
 
document.querySelector('.home').addEventListener('wheel', myWheelFunc);
 function myWheelFunc() {
    this.style.color = 'dodgerblue';
 }

document.querySelector('.text-content h2').addEventListener('click', myClick)
 function myClick() {
    document.querySelector(".text-content h2").textContent = "CLICK BAIT!!!"
}

window.addEventListener('load', function(event) {
   alert('Hurry and jump on in. The bus is loaded!');
})

const introHeading = document.querySelector('.intro h2');
 introHeading.addEventListener('dblclick', (event) => {
    introHeading.classList.toggle('display-none');
});

window.addEventListener('scroll', () => {
    console.log('scrolled!')
    document.querySelector('header').style.backgroundColor = 'yellow';
})
 
window.addEventListener('resize', myResizeFunc)
function myResizeFunc() {
    alert('window has been resize')
}

const destination = document.querySelector('.content-destination');
destination.addEventListener('mouseover', () => {
    destination.classList.toggle('change-color');
});

myBtn= document.querySelector('.btn')
myHome= document.querySelector('.home')
 myBtn.addEventListener('click', (event) => {
    console.log('btn was clicked')
    event.stopPropagation()
    event.target.style.color = 'blue'
})
 myHome.addEventListener('click', () => {
    console.log('home was clicked')
})

mainNav = document.querySelector('.nav')
mainNav.addEventListener('click', (event) => {
    event.preventDefault();
}) 