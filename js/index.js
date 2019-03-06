// Your code goes here

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
            event.stopPropagation();
        });
        element.addEventListener('mouseleave', (event) => {
            element.classList.remove('bg-grey');
            event.stopPropagation();
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

let navList = document.querySelectorAll('.main-navigation .container.nav-container .nav .nav-link');

navList.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

function pause(e) {
    document.body.classList.add('paused');
    e.stopPropagation();
  }
  
  function play(e) {
    document.body.classList.remove('paused');
    e.stopPropagation();
  }
  window.addEventListener('blur', pause);
  window.addEventListener('focus', play);

  let btnList = document.querySelectorAll('.container.home .content-pick .destination .btn');
  btnList.forEach((element) => {
      element.addEventListener('dblclick', (e) =>{
        e.target.innerText = "Double Clicked";
    });
  });