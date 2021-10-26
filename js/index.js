// Your code goes here

    // change "Fun Bus" h1. 
    // "addEventListener"  load
const funBusTitle = document.querySelector('.logo-heading');
    window.addEventListener('load', (event) => {
        funBusTitle.style.color = '#FEBE50';
        funBusTitle.style.fontSize = '6.66rem';
        funBusTitle.style.textShadow = '2px 1px 2px #000';
        funBusTitle.style.transition = '3s 300ms ease-in-out';
    });


    // change nav links 
    // "addEventListener" keydown/keyup

const links = document.querySelectorAll('.nav-link');
    function colorSmash(){
        links.forEach(item => {
            item.style.color = '#FEBE50';
            item.style.backgroundColor = 'dodgerBlue';
            item.style.padding = '5%';
            item.style.borderRadius = '5px';
            item.style.transition = '1s linear';
        });
    };
    window.addEventListener('keydown', colorSmash);

    // "addEventListener" keyup

    function colorRemove(){
        links.forEach(item => {
            item.style.color = '';
            item.style.backgroundColor = '';
            item.style.padding = '';
            item.style.borderRadius = '50px';
            item.style.transition = '1s linear';
        });
    };
    window.addEventListener('keyup', colorRemove);


    // change bus on beach image
    // "addEventListener" mouseover/mouseleave

const busImg = document.querySelector('.intro img');
console.log(busImg)