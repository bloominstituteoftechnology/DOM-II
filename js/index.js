// Your code goes here
const aTags = document.querySelectorAll('a');
const buttons = document.querySelectorAll('.btn')
const funBus = document.querySelector('.fun');
const mainPic = document.querySelector('.main-pic');
const images = document.querySelector('.advpic');
const imageDiv = document.querySelector('.img-content');
const funFun = document.querySelector('.logo-heading');

for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener('mouseover', (e) => {
    buttons[i].classList.add('changeBackground');
    })
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseout', (e) => {
        buttons[i].classList.remove('changeBackground');
        })
    }

for (let i = 0; i < aTags.length; i++) {
aTags[i].addEventListener('click', (e) => {
    aTags[i].classList.add("greenText");
    aTags[i].preventDefault();
})
}

funBus.addEventListener('mouseover', (e) => {
    funBus.style.fontSize = '6em';
    funBus.style.color = 'red';
})

funBus.addEventListener('mouseout', (e) => {
    funBus.style.fontSize = '4em';
    funBus.style.color = 'black';
})

mainPic.addEventListener('wheel', (e) => {
    mainPic.src = "https://d12dkjq56sjcos.cloudfront.net/pub/media/catalog/product/cache/7b271a1353dabd64ae602995db97658a/n/e/new-york-deluxe-ticket-3-day-tour-big-bus-tours.jpg";
})

images.addEventListener('dblclick', (e) => {
    images.style.visibility = 'hidden';
    e.stopPropagation();
})

imageDiv.addEventListener('click', (e) => {
    images.style.visibility = 'visible';

})

document.body.addEventListener('dblclick', (e) => {
    funFun.style.visibility = 'hidden';
})

document.body.addEventListener('click', (e) => {
    funFun.style.visibility = 'visible';
})

window.addEventListener('keydown', (e) => {
    alert("Don't type!");
})

window.addEventListener('resize', (e) => {
    alert("MY PIXELS!");
})