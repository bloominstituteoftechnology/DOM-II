import './less/index.less'


// Your code goes here!
//display secret message when user clicks map photo
const logoHead = document.querySelector('.logo-heading');

const mousePink = () => {
    logoHead.style.backgroundColor = 'pink';
}

logoHead.addEventListener('mouseover', mousePink)

const mouseOut = () => {
    logoHead.style.backgroundColor = '';
}

logoHead.addEventListener('mouseout', mouseOut);

const mapPhoto = document.querySelector('.img-content');
mapPhoto.addEventListener('click', displayMessage)

function displayMessage() {
    alert ("Congratulations! Secret Found!")
}

//navigate through Nav Bar with Keyboard
const nav = document.querySelector('nav');

const home = nav.firstElementChild;
const about = home.nextElementSibling;
const blog = about.nextElementSibling;
const contact = blog.nextElementSibling;

// //nav to home
// document.addEventListener('keydown', pressOneForHome)

// function pressOneForHome (evt) {
//     evt.preventDefault();
//     evt.stopPropagation();
//     if (evt.key === '1') {
//         window.location.href = home.getAttribute('href');
//     }
// }
// function pressTwoForAbout (evt) {
//     evt.preventDefault();
//     evt.stopPropagation();
//     if (evt.key === '2') {
//         window.location.href = about.getAttribute('href');
//     }
// }
// //nav to blog
// document.addEventListener('keydown', pressThreeForBlog)

// function pressThreeForBlog (evt) {
//     evt.preventDefault();
//     evt.stopPropagation();
//     if (evt.key === '3') {
//         window.location.href = blog.getAttribute('href');
//     }
// }

// //nav to contact
// document.addEventListener('keydown', pressFourForContact)

// function pressFourForContact (evt) {
//     evt.preventDefault();
//     evt.stopPropagation();
//     if (evt.key === '4') {
//         window.location.href = contact.getAttribute('href');
//     }
// }



//wheel
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('img');
el.onwheel = zoom;

//load

el.addEventListener('load', function(){
    alert('Page is loaded loaded')
})

const images =  document.querySelectorAll('.img-content img')

const bigger = (event,img) => {
    img.style.width = '60%';
}

images.forEach(img => {
    img.addEventListener('dblclick', (event) => bigger(event,img))
});
