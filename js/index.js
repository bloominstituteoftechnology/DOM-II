//Seeing if window loads properly
window.addEventListener('load', (event) => {
    console.log('page completely loaded');
});

//all the constants
const doOver = document.querySelectorAll('.nav-link');
const haveFun = document.querySelector('h1');
const sndHeads = document.querySelectorAll('h2');
const anchor = document.querySelectorAll('a');
const removeBus = document.querySelector('img');
const hP = sndHeads[0].nextElementSibling;
const escaper = (event) => {
    document.querySelectorAll('.text-content p').forEach(el => {
        el.textContent = `Don't press a button next time :D`;
        el.classList.add('big');
    })
};
function anchorEventListener(event){
    event.preventDefault();
    console.log('prevented default');
}


haveFun.addEventListener('click', (event) =>{
    haveFun.textContent = 'Time for some fun!';
});

sndHeads[1].addEventListener('click', (event) => {
    sndHeads[1].textContent = 'GO WHERE?';
});

doOver[0].addEventListener('dblclick', (event) => {
    haveFun.textContent = 'Fun Bus';
    sndHeads[1].textContent = `Let's Go!`;
    removeBus.classList.remove('off');
    sndHeads[0].textContent = 'THE BUS IS BACK!';
    hP.textContent = `Please don't ever do that again, we beg of you`;
});

anchor.forEach(el => {
    el.addEventListener('click', anchorEventListener);
})

document.addEventListener('keydown', escaper);

removeBus.addEventListener('click', (event) => {
    removeBus.classList.add('off');
    sndHeads[0].textContent = 'WHERE DID THE BUS GO OMG';
    hP.textContent = 'BRING IT BACK YOU MONSTER WHAT YOU DONE, OMG SOMEONE PLEASE HELP US WE ARE NOW STUCK IN THE MIDDLE OF THIS RANDOM DESERT';
    if(event.currentTarget.nodeName === 'DIV'){
        event.stopPropagation();
    }
})


// thank you mdn for helping me figure this out 
const transition = document.querySelector('img');
const message = document.querySelector('.p');


transition.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart fired';
});

transition.addEventListener('transitionend', function() {
  message.textContent = 'transitionend fired';
});
q