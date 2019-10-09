// Your code goes here
//mouseover
let nav = document.querySelectorAll('.nav .nav-link');
console.log(nav)
nav.forEach( n => {
    n.addEventListener('mouseover', function(event){ event.target.style.color = 'red';
})});

//dblcclick
let imgFun = document.querySelectorAll('img');
console.log(imgFun)
imgFun.forEach( i => {
    console.log(i);
    i.addEventListener('dblclick', function (event) {
        console.log(event)
        event.target.classList.toggle('large');
    })
});

//select
function logSelection(event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(`You selected: ${selection}`);
}

const select = document.querySelectorAll('p');
select.forEach(paragraph => {
    addEventListener('select', logSelection);
})


//mouse leave/mouse enter
const mouseTarget = document.querySelectorAll('.nav .nav-link');

mouseTarget.forEach(navLink => {
    navLink.addEventListener('mouseenter', e => {
        e.target.style.border = '5px dotted orange';
    });

    navLink.addEventListener('mouseleave', e => {
        e.target.style.border = '1px solid dodgerblue';
    });

    navLink.addEventListener('click', e => {
        e.preventDefault();
    })
});

//alert/wheel

window.addEventListener('wheel', (event) => {
   alert('Ha Ha'); 
});

//beforeprint
window.addEventListener('beforeprint', (event) => {
    console.log('why');
});

//load
window.addEventListener('load', (event) => {
    console.log('page is loaded');
});

//afterprint
  window.addEventListener('afterprint', (event) => {
    console.log('still why');
});
