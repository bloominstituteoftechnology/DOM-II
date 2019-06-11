//First listener(nav size increase)
const nav = document.querySelectorAll('.nav-link');
nav.forEach((ele) => ele.addEventListener('mouseover', (event) => event.target.style.fontSize = '1.9rem'));

//Second event listener (nav size decrease)
nav.forEach((ele) => ele.addEventListener('mouseout', (event) => event.target.style.fontSize = '1.6rem'));

//Second listener(add border)
const img = document.querySelectorAll('img');
img.forEach((ele) => ele.addEventListener('click', (event) => event.target.classList.toggle('border')))

//Third event listener(page has been resized)
window.addEventListener('resize', (event) => alert('You have resized the page!'));

//Fourth Event listener (dbl click h1)
const funBusText = document.querySelector('h1');
funBusText.addEventListener('dblclick', function(ev) {
    let colorchoice = "rgb(" + Math.round(Math.random() * 256) + "," + Math.round(Math.random() * 256) + "," + Math.round(Math.random() * 256) + ")";
    ev.target.style.color = colorchoice;
})

//Fifth event listener (scroll for color change)
const paragraphs = document.querySelectorAll('p');
document.addEventListener('scroll', function() {
    let colorchoice = "rgb(" + Math.round(Math.random() * 256) + "," + Math.round(Math.random() * 256) + "," + Math.round(Math.random() * 256) + ")";
    paragraphs.forEach((para) => para.style.color = colorchoice)
})

//Sixth Event listener
document.addEventListener('copy', (ev) => alert('Please do not copy our work!'))

//Seventh event listener
document.addEventListener('keydown', (ev) => console.log(ev.key))

//Eigth event listener
document.addEventListener('dragstart', () => alert('LEAVE THAT WHERE YOU FOUND IT!'))

//ninth event listener 
const header = document.querySelectorAll('header');
console.log(header)
header[1].addEventListener('click', (ev) => ev.target.style.backgroundColor = 'dodgerblue')

//tenth event listener AND PROPAGATION STOP
const h2 = document.querySelectorAll('h2');
h2[0].addEventListener('click', (ev) => ev.target.style.color = 'crimson');
h2[0].addEventListener('click', (ev) => ev.stopPropagation());

//Prevent nav default
nav.forEach((ele) => ele.addEventListener('click', (ev) => {ev.preventDefault()}));




