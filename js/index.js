// Your code goes here

const nav = document.querySelector('.nav');

//prevent nav from refreshing
nav.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
});

//nav-links text is all uppercase during mouseover
nav.addEventListener('mouseover', event => {
    if (event.target.tagName == 'A'){
        event.target.textContent = event.target.textContent.toUpperCase();
    }
})

//text is all lowercouse when mouse exits 
nav.addEventListener('mouseout', event => {
    if (event.target.tagName == 'A'){
        event.target.textContent = event.target.textContent.toLowerCase();
    }
})



//mouseover
const firstImg = document.getElementsByClassName('img-content')[0].querySelector('img');
firstImg.addEventListener('mouseover', (event) => {
    event.target.style.border = 'solid red 2px';
});

//pressing 1 turns background aqua
document.addEventListener('keydown', (event) => {
    if (event.key == '1'){
        document.body.style.backgroundColor = 'aqua';
    }
})

//button backgroun turns red but stops event propagation so background doesn't turn green
const buttons = document.getElementsByClassName('btn');
buttons[1].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    event.stopPropagation();
})

//button resizes when clicked and background turns green
buttons[0].addEventListener('click', (event) => {
    event.target.style.padding = "20%";
})


//background changes green when clicked
document.body.addEventListener('click', (event) =>{
    document.body.style.backgroundColor = 'green';
})

//footer changes red when mouseover
const foot = document.getElementsByTagName('footer')
foot[0].addEventListener('mouseover', (event) => {
    event.target.style.color= 'red';
})


//opacity changed when clicked
const topImg = document.querySelector('img');
topImg.addEventListener('click', (event) => {
    event.target.style.opacity = '50%';
})

//dashed pink border when dblclicked
topImg.addEventListener('dblclick', (event) => {
    event.target.style.border = 'dashed 5px pink';
})