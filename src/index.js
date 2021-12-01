import './less/index.less'

// Your code goes here!

//display secret message when user clicks map photo
const mapPhoto = document.querySelector('.img-content');
mapPhoto.addEventListener('click', displayMessage)

function displayMessage() {
    alert ("Congratulations! You found the secret code. Use the promo code 'Secret Message' for 15% off")
} 

//navigate through Nav Bar with keyboard
const nav = document.querySelector('nav');

const home = nav.firstElementChild;
const about = home.nextElementSibling;
const blog = about.nextElementSibling;
const contact = blog.nextElementSibling;

//nav to home 
document.addEventListener('keydown', pressOneForHome)

function pressOneForHome (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (evt.key === '1') {
        window.location.href = home.getAttribute('href');
    }
}

//nav to about
document.addEventListener('keydown', pressTwoForAbout)

function pressTwoForAbout (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (evt.key === '2') {
        window.location.href = about.getAttribute('href');
    }
}

//nav to blog
document.addEventListener('keydown', pressThreeForBlog)

function pressThreeForBlog (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (evt.key === '3') {
        window.location.href = blog.getAttribute('href');
    }
}

//nav to contact
document.addEventListener('keydown', pressFourForContact)

function pressFourForContact (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (evt.key === '4') {
        window.location.href = contact.getAttribute('href');
    }
}

//add push sign-up popup

const popUp = document.querySelector('p.pop-up');
const signUpButton = document.querySelector('#btn')

signUpButton.addEventListener('mouseenter', getPopUp)

function getPopUp () {
   popUp.classList.remove('off');
}
//get rid of push sign-up popup

signUpButton.addEventListener('mouseout', removePopUp)

function removePopUp () {
   popUp.classList.add('off');
}

//make pictures bigger or smaller with mouse wheel
const busPicture = document.querySelector('.intro img');
let scale = 1;

function zoom(event) {

    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    busPicture.style.transform = `scale(${scale})`;

}

busPicture.onwheel= zoom;

//header background turns blue
const input = document.querySelector('.input');

input.addEventListener('focus', (event) => {
    event.target.style.background = 'blue';
});

//doubleclick function

const button1 = document.querySelector('.btn');

button1.addEventListener('dblclick', (event) => {
    event.target.textContent = 'you know you want to!'

})

//