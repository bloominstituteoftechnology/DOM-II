// Your code goes here

document.querySelector('.container.home .intro img').addEventListener('click', (event) =>{
    event.preventDefault();
    let introH2 = document.querySelector('.container.home .intro h2');
    let introP = document.querySelector('.container.home .intro p');
    if (introH2.className.includes('hidden') && introP.className.includes('hidden')){
        introH2.className = '';
        introP.className = '';
    } else {
        introH2.className += 'hidden';
        introP.className += 'hidden';
    }
    console.log(introH2);
    console.log(introP);
});

window.addEventListener('load', (event) =>{
    event.preventDefault();
    console.log("All resources finished loading!");
});

document.addEventListener('copy', (e) => {
    e.clipboardData.setData('text/plain', 'Hello, World!');
    e.clipboardData.setData('text/html', '<b>Hello, World!</b>');
    console.log(e.clipboardData);
    e.preventDefault();
});

let allSec = document.querySelectorAll('.container.home header,.container.home section');
let counter = 0;
allSec.forEach((element) => {
    if (counter != 4){
        element.addEventListener('mouseenter', (event) => {
            element.classList.add('bg-grey');
            event.preventDefault();
        });
        element.addEventListener('mouseleave', (event) => {
            element.classList.remove('bg-grey');
            event.preventDefault();
        });
        counter++;
    }
});
console.log(allSec);

let container = document.body;
console.log(document.body);

document.addEventListener('keydown', (e) => {
    const keyName = e.key;

    if (keyName === 'Control'){
        return;
    }
    console.log(keyName);
    if (event.ctrlKey) {
        if (keyName == 'Delete') {
            if(container.classList.contains('hidden')){
                container.classList.remove('hidden');
            } else {
                container.classList.add('hidden');
            }
        }
    }
});

let last_known_scroll_position = 0;
let ticking = false;
let scrollCounter = 0;
let maxScrollCounter = 20;

document.addEventListener('scroll', (e) => {
    last_known_scroll_position = window.scrollY;

    if (scrollCounter == maxScrollCounter){
        if (!ticking) {
            window.requestAnimationFrame(() => {
                console.log(`New Scroll Position: ${last_known_scroll_position}`);
                ticking = false;
            });
    
            ticking = true;
        }
        scrollCounter = 0;
    } else {
        scrollCounter++
    }
});