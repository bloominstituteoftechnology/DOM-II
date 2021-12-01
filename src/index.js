import './less/index.less'

// Your code goes here!
const navBar = document.querySelectorAll('.nav-link');
const header = document.querySelector('header')

function colorChange(){
    document.body.style.backgroundColor = 'grey';
}

navBar.forEach(item => item.addEventListener('click', colorChange));

function scrollBy (){
    if( window.scrollY > 45 ){
        header.style.backgroundColor = 'black';
        header.style.color = 'whitesmoke';
    }else{
        header.style.backgroundColor = 'whitesmoke';
        header.style.transition = '.5s';
    }
}

function alerted(){
    alert('Welcome to FUN BUS :D')
    
}

window.addEventListener('scroll', scrollBy);
window.addEventListener('load', alerted)

