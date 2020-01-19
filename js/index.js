//* Your code goes here *//

//* EVENT LISTENER 1 *//

window.addEventListener('load', (event) => {
    alert('Welcome to my DOMII project, I will have 10 event Listeners to make the page interactive!');    
});

//* EVENT LISTENER 2 *//

const busImage = document.querySelector('.intro img');
busImage.addEventListener('mouseenter', () => {
    busImage.style.transform = "scale(1.1)";
    busImage.style.transition = "all 0.3s";
});

//* EVENT LISTER 3 *//

busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = "scale(1)"
});

//* EVENT LISTENER 4 *//

const changeImage = document.querySelector('.intro img');
changeImage.addEventListener('dblclick', () => {
    changeImage.src = "./img/bus-fun.jpg";
});

//* EVENT LISTENER 5 *//
window.addEventListener('load', (event) => {
    console.log('this page is fully loaded')
});
//* EVENT LISTENER 6 *//

const hide = document.querySelector('body');
hide.addEventListener('wheel', ()=>{
    hide.style.opacity = '0';
    hide.style.transition = 'all 0.5s';
});

//* EVENT LISTENER 7 *//
const show = document.querySelector('body');
show.addEventListener('mouseup', () => {
    show.style.opacity = '1';
    show.style.transition = 'all 0.5s';
});
//* EVENT LISTENER 8 *//

const hideImg = document.querySelectorAll('img');
hideImg.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'all 0.3s';
    })
})
hideImg.forEach(image => {
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
        image.style.transition = 'all 0.3s';
    })
})

//* EVENT LISTENER 9 *//
const title1 = document.querySelector('.logo-heading');
const title2 = document.querySelectorAll('.container h2');
const title3 = document.querySelectorAll('.container h4');

title1.addEventListener('click', () => {
  title1.style.color = '#FFF';
  title1.style.background = '#17A2B8';
});
title2.forEach(event =>{
  event.addEventListener('click', ()=> {
  event.style.color = '#FFF';
  event.style.background = '#17A2B8';
  });
});
title3.forEach(event =>{
  event.addEventListener('click', ()=> {
  event.style.color = '#FFF';
  event.style.background = '#17A2B8';
  });
});



//* EVENT LISTENER 10 *//

const ouch = document.querySelectorAll('.btn');
ouch.forEach(btns =>{
  btns.addEventListener('dblclick', () => {
    alert('Not so Hard, Ouch!');
  });
});
