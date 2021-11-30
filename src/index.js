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

//add push sign up popup

const popUp = document.querySelector('p.pop-up');
const signUpButton = document.querySelector('#btn')

signUpButton.addEventListener('mouseenter', getPopUp)

function getPopUp () {
   popUp.classList.remove('off');
}
