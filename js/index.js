// Your code goes here

const divider = document.querySelectorAll('div');
const a = document.querySelectorAll('a');
const mainNav = document.querySelectorAll('.main-navigation')
const navLogo = document.querySelectorAll('.logo-heading')

//  `mouseover`
    divider[5].addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'red'
    });

//  `keydown`
    document.addEventListener('keydown', function(event) {
        if(event.key === 'g'){
        event.target.style.backgroundColor = 'green'
        }
    });

//  `wheel`
    navLogo.addEventListener('wheel', function(event){
        event.style.backgroundColor = 'orange'
    });

//  `load`
    window.addEventListener('load', function (event) {
        alert('Fun Bus Has Arrived!')
    });

//  `focus`
    mainNav.addEventListener('focus', (event)=>{
        event.style.backgroundColor = 'blue';
        event.preventDefault();
    });

//  `resize`
    a[2].addEventListener('resize', (event)=>{
        event.textContent = 'Resize Me!'
    });

//  `scroll`
    window.addEventListener('scroll', (event)=>{
        divider[6].style.backgroundColor = 'blue'
    });

//  `select`
    a[3].addEventListener('select', (event)=>{
        event.target.style.color = 'purple'
    });

//  `dblclick`
    divider[7].addEventListener('dblclick', (event)=>{
        event.target.style.backgroundColor = 'brown';
    });

//  `drag / drop`
    a[1].addEventListener('drag', (event)=>{
        event.target.style.color = 'lightgrey'
        event.stopPropagation()
    });
