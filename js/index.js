const mainHead = document.querySelector('.logo-heading');
mainHead.addEventListener('click', e => {
    e.target.style.color = "orange";
    e.target.style.backgroundColor = "lightGrey";
    e.target.style.textAlign = "center";
    e.target.style.fontSize = "50px"
    e.target.style.margin ="0px auto"
    e.target.style.marginLeft = "5px"
})

const navBox = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-link')

navBox.addEventListener('dblclick', e => {
    e.target.style.backgroundColor = "grey";
    e.target.style.display = 'flex';
    e.target.style.justifyContent = "space-around";
    e.target.style.marginLeft = "5px"
})

navItems.forEach(link => {
    link.addEventListener('mouseover', e => {
        e.target.style.color = "orange";
        e.target.style.fontSize = "20px";
        e.target.style.textDecoration = "none";
    });
})

function changeGoHead(event) {
    if (event.key === 'y') {
    document.querySelector('.content-section .text-content h2').style.color = 'blue'
    }
}

document.addEventListener('keypress', changeGoHead)


function changeGoP() {
    document.querySelector('.content-section .text-content p').style.color = 'red'
}

document.addEventListener('wheel', changeGoP)

function changeAdHead(){
   document.querySelector('#yo').style.color = "green"
}

navBox.addEventListener('mouseleave', changeAdHead)

function changeDestHead(){
    document.querySelector('#yo2').style.color = 'green'
}

window.addEventListener('load', changeDestHead)

function changeBack(){
    document.querySelector('.intro').style.backgroundColor = "red"
}

document.querySelector('.intro').addEventListener('click',
changeBack)

function changeInHead() {
    document.querySelector('#inner').style.backgroundColor = "blue"
    event.stopPropagation();
}

document.querySelector('#inner').addEventListener('click', changeInHead)

document.links.preventDefault();


