// Your code goes here
// .addEventListener takes two arguments, first the event to listen for and, second, the callback to fire when that event is triggered. 

//example
// element.addEventListener('click', callback);

const funBus = document.querySelector('header div h1');

//bottom border on mouse enter and mouseleave 2 total unique
funBus.addEventListener('mouseenter', (event) => {    event.target.style.borderBottom = '1rem solid blue'; });
funBus.addEventListener('mouseleave', (event) => { event.target.style.borderBottom = 'none'; });

//scale transform on mouse enter
funBus.addEventListener('mouseenter', ( )=> {
    funBus.style.transform = 'scale(1.2)';
    funBus.style.transition = 'transform 1s';
  })
  funBus.addEventListener('mouseleave', () => {
    funBus.style.transform = 'scale(1)';
  })


//nav link borders
document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.border = '1px solid blue';
    })
});

document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.border = 'none';
    })
});
//scale image on mouseover event 3 total unique events so far
const busImg = document.querySelector('header img');

busImg.addEventListener('mouseover', () => {
    busImg.style.transform = 'scale(1.2)';
    busImg.style.transition = 'transform 1s';
})

//underline on click, 4 total unique events
const headerTitle = document.querySelector('header h2');

headerTitle.addEventListener('click', (event) => { event.target.style.borderBottom = '1rem solid blue'; });

//inverse colors on 1st paragraph on double click, 5 total unique events
const firstParagraph = document.querySelector('header p');

firstParagraph.addEventListener('dblclick', () => {
    firstParagraph.style.backgroundColor = 'black';
    firstParagraph.style.color = 'white';
})

//6 total unique events
window.addEventListener('resize', () => {
    busImg.src = 'https://images.unsplash.com/photo-1512213187376-2414d755f1f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=812&q=80';
    busImg.alt = 'school bus image';
  })

//7 unique
const letsGo = document.querySelector('section div h2');

letsGo.addEventListener('mousemove', () => {
    letsGo.style.backgroundColor = 'orange';
})
//8 unique
letsGo.addEventListener('mouseup', () => {
    letsGo.style.backgroundColor = 'none';
})

//9 unique

const letsGoP = document.querySelector('section div p');

letsGoP.addEventListener('mouseout', () => {
    letsGoP.style.backgroundColor = 'orange';
})

const aa = document.querySelector('.text-content');
//10 unique
aa.addEventListener('mousedown', () => {
    aa.style.backgroundColor = 'orange';
})
