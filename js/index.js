// Your code goes here
// type="text/javascript" src="https://www.cornify.com/js/cornify.js"

const funLogo = document.querySelector('.logo-heading');
const funImg = document.querySelector('.intro Img');
const destination = document.querySelector("content-destination");
const destinationP = document.querySelectorAll('.destination p');
const button = document.querySelectorAll('.btn');
const footer = document.querySelector('.footer p');
const head = document.querySelector('head');
const navLinks = document.querySelectorAll('.nav');
const body = document.querySelector('body') ;
const form = document.querySelector('#form')
const Images = document.querySelectorAll(".img-content")

const pressed = [];
const lucasCode = 'lucas';

let scale = 1;
let x = 0;
let hue = 0;

function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);



    function allowDrop(e) {
        e.preventDefault();
      }
      
      function drag(e) {
        e.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data).cloneNode());
      }


destinationP.forEach(text => {
    text.addEventListener('select', (e) => {
        console.log('Text select')
        const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
        console.log(`You selected ${selection}`)
    })
})


button.forEach((butt) => {
    butt.addEventListener('click', () => {
        butt.innerHTML = `<form id="form">
        <input type="text" placeholder="text input">
      </form>`

      const form = document.querySelector('#form input')

      form.addEventListener('focus', () => {
          form.style.background = 'pink'
      })
    })
})

window.addEventListener('scroll', () => {
    console.log('Hello')
    hue++
    body.style.background = `hsl(${hue}, 100%, 50%)`
    if(hue > 360){
        hue = 0;
    }
})

Array.from(navLinks).forEach(link =>{
    link.addEventListener('click', (e) => {
        e.preventDefault()
    })
})

footer.addEventListener('dblclick', () => {
    console.log('present')
    footer.innerHTML = 'try typing "lucas"!'
})

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
        cornify_add()
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




