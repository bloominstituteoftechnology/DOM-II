const nav = document.querySelector('.nav');
console.log(nav);
nav.addEventListener('click',()=>{nav.style.backgroundColor ='yellow';});

const header = document.querySelector('.intro');
header.addEventListener('scroll',()=>{header.style.backgroundColor ='red';});

let button = document.querySelector('.btn');
button.addEventListener('dblclick',()=>{alert('You Clicked the First Sign Me Up Button!')})

let intro = document.querySelector('.intro');
intro.addEventListener('select',()=>{intro.style.WebkitAnimation = "shake .5s";})

let button2 = document.querySelector('.btn');
button2.addEventListener('click',()=>{alert('You Clicked the Second Sign Me Up Botton!')})

const body = document.querySelector("body");
body.addEventListener("dblclick", () => {body.style.backgroundColor='blue';})

// const introPic = document.querySelector(".intro")
// window.addEventListener("resize", ()=>{
//     introPic.src="img/hippietoybus.jpg"})

// const funBus = document.querySelector('img/fun-bus.jpg');
// console.log(funBus);

// funBus.addEventListener('mouseenter',()=>{
//     funBus.style.transform = "scale(1.2)";
//     funBus.style.transistion = "0.3s"
// })

// funBus.addEventListener('mouseleave',()=>{
//     funBus.style.transform = 'scale(1.0)';
//     funBus.style.transistion = "all 0..3s"
// })

// const eventHandler=(event)=>{event.stopPropagation()};

// $('nav a').click(function(event){event.preventDefault();});

// change colors, animate objects, remove objects, etc.
// * [x ] `mouseenter`
// * [x ] `mouseleave`
// * [x ] `click`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [x ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`


