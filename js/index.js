// Your code goes here
// type="text/javascript" src="https://www.cornify.com/js/cornify.js"

const funLogo = document.querySelector('.logo-heading');
const funImg = document.querySelector('.intro Img');
const destination = document.querySelector("content-destination");
const destinationP = document.querySelector('.destination');
const button = document.querySelector('.btn');
const footer = document.querySelector('.footer p');
const head = document.querySelector('head');

const pressed = [];
const lucasCode = 'lucas';

let scale = 1;
let x = 0;

footer

destination.addEventListener('scroll', (){

});

window.addEventListener('resize', ()=>{
    let txt = x +=1;

    funImg.innerHTML = txt;
    console.log(txt);
});

funImg.addEventListener('mousewheel', (e) => {
    e.preventDefault

    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    funImg.style.transform = `scale(${scale})`;
})

funLogo.addEventListener('mouseover', (e) => {
    e.target.style.color = 'blue';
    setTimeout(function() {
        e.target.style.color = "";
      }, 500);
},false)

window.addEventListener('keyup', (e) =>{
    pressed.push(e.key);
    pressed.splice(-lucasCode.length -1, pressed.lengh - lucasCode.length);
    if (pressed.join('').includes(lucasCode)){
        console.log('BwaaaaHAHAHAH!')
    }
});

document.addEventListener('keydown',(e) =>{
    if(e.key === 'Escape'){
        alert("Don't you just want to escape? ");
    }
});

window.addEventListener('load', ()=>{
    console.log('hey')
    setTimeout(() => {alert('Welcome To Your Life!');},3000);
})




