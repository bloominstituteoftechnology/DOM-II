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
        item.addEventListener('mouseout', () =>{
            item.style.opacity = '1.0'
        });
     });

     window.addEventListener('load', (event) => {
        console.log('page fully loaded');
    });

    window.addEventListener('resize', event =>{
        console.log('window size');
    })

