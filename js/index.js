// Your code goes here
// .addEventListener takes two arguments, first the event to listen for and, second, the callback to fire when that event is triggered. 

//example
// element.addEventListener('click', callback);

const funBus = document.querySelector('header div h1');

//bottom border on mouse enter
funBus.addEventListener('mouseenter', (event) => { event.target.style.borderBottom = '1rem solid blue'; });
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
//what next?
