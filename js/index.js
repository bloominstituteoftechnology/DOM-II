// Your code goes here
// type="text/javascript" src="https://www.cornify.com/js/cornify.js"

const funLogo = document.querySelector('.logo-heading');
const funImg = document.querySelector('.intro Img');
const selectP = document.querySelector('p');
const destinationP = document.querySelector('.destination');
const button = document.querySelector('.btn');
const pressed = [];
const lucasCode = 'lucas';


window.addEventListener('keyup', (e) =>{
    pressed.push(e.key);
    pressed.splice(-lucasCode.length -1, pressed.lengh - lucasCode.length);
    if (pressed.join('').includes(lucasCode)){
        console.log('BwaaaaHAHAHAH!')
    }
});

window.addEventListener('keydown',(e) =>{
    
})