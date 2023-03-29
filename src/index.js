import './less/index.less'

// Your code goes here!
const navBar = document.querySelectorAll('.nav-link');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const buttons = document.querySelectorAll('.btn');
const footerr = document.querySelector('.footer p');
const imgs = document.querySelectorAll('img');

const newLinks = Array.from(navLinks);

navBar.forEach(item => item.addEventListener('click', colorChange));

buttons.forEach(item => item.addEventListener('click', buttonsPressed))

imgs.forEach(item => item.addEventListener('mouseover', opacityChanger))

document.addEventListener('keypress', keyPressed);

function opacityChanger(item){
    item.style.opacity = '0';
}

function colorChange(item){
    if(item.target.innerText === 'About Us'){
        document.body.style.backgroundColor = 'blue';
    }else if(item.target.innerText === 'Blog'){
        document.body.style.backgroundColor = 'grey';
    }else if(item.target.innerText === 'Home'){
        document.body.style.backgroundColor = 'yellow';
    }else if(item.target.innerText === 'Contact'){
        document.body.style.backgroundColor = 'orange';
    }
}

function scrollBy (){
    if( window.scrollY > 45 ){
        header.style.backgroundColor = 'black';
        header.style.color = 'whitesmoke';
        for(let link of navLinks){
            link.style.color = 'whitesmoke';
        }
    }else{
        header.style.backgroundColor = 'white';
        header.style.color = 'black';
        header.style.transition = '.5s';
        for(let link of navLinks){
            link.style.color = 'black';
        }
    }
}

function alerted(){
    alert('Welcome to FUN BUS :D');
    
}

function annoyingAlert (){
    alert('dont mind just being annoying');

}

function buttonsPressed(){
    const colorsArr = ['green','blue','yellow','black','lightblue','pink','gold','white'];
    const randomColor = Math.floor(Math.random() * colorsArr.length);
    const fontSizer = Math.floor(Math.random() * 5);
    footerr.style.color = colorsArr[randomColor];
    footerr.style.fontSize = `${fontSizer}rem`;
}

function keyPressed (event){
    if(event.target.key = 'y'){
        navBar.scrollToView()
    }
}


window.addEventListener('animationend', annoyingAlert)
window.addEventListener('scroll', scrollBy);
window.addEventListener('load', alerted);

