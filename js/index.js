// Your code goes here
const signButton = document.querySelectorAll('.btn');
Array.from(signButton).forEach(elem => {
    elem.addEventListener('mouseover', event =>{
        event.target.style.color = 'purple';
        });
    elem.addEventListener('mouseout', event =>{
        event.target.style.color = 'white';
    });
 });

 const letsGo = document.querySelectorAll('.text-content h2');
 Array.from(letsGo).forEach(elem => {
    elem.addEventListener('click', event => {
        event.target.style.background = 'pink';
    });
});

    const funBus = document.querySelectorAll('.intro p');
    Array.from(funBus).forEach(elem => {
        elem.addEventListener('dblclick', event => {
            event.target.style.fontStyle = 'italic';
        });
    });

    const navBar = document.querySelectorAll('nav a');
    Array.from(navBar).forEach(elem => {
        elem.addEventListener('mouseenter', event =>{
            event.target.style.color = 'purple';
        });
        elem.addEventListener('mouseleave', event =>{
            event.target.style.color = "black";
        });
   });

    const imgOpacity = document.querySelectorAll('img');
    imgOpacity.forEach(item => {
        item.addEventListener('mousemove', () => {
           item.style.opacity = '0.4';
        });
     });

     window.addEventListener('load', (event) => {
        console.log('page fully loaded');
    });

    const heightOutput = document.querySelector();
const widthOutput = document.querySelector();

