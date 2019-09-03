// Your code goes here
/*
* [ ] `mouseover`
* [ ] `keydown`
* [ ] `wheel`
* [ ] `drag / drop`
* [ ] `load`
* [ ] `focus`
* [ ] `resize`
* [ ] `scroll`
* [ ] `select`
* [ ] `dblclick`
*/


//Nav links scale on hover
const linkScaleUp = document.querySelectorAll(".nav-link");
linkScaleUp.forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.color = "#17A2B8";
        item.style.transform = 'scale(1.2)';
        item.style.transition = 'transform 0.3s';
    })

    item.addEventListener('mouseleave', event => {
        item.style.color = "#212529";
        item.style.transform = 'scale(1.0)';
        item.style.transition = 'transform 0.3s';
    })
});

//DARK MODE
const darkMode = document.querySelector('body');
darkMode.addEventListener("keydown", e => {
    darkMode.style.backgroundColor = "#121212";
    darkMode.style.color = "white";
});

//Prevents images from being saved by blocking the context menu from pulling up
const noImgSave = document.querySelectorAll('img');
noImgSave.forEach(item => {
    item.addEventListener('contextmenu', e => {
    e.preventDefault();
    })
});


//zoom element on scroll
const busImg = document.querySelector('.bus'); 
busImg.addEventListener('wheel', e => {
    e.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    busImg.style.transform = `scale(${scale})`;
})
let scale = 1;
el.onwheel = e

//DoubleClick
const doubleClick = document.querySelector('.logo-heading');
doubleClick.addEventListener('dblclick', e => {
        doubleClick.style.fontSize = '6rem';
        doubleClick.style.color = 'dodgerblue';
});

//Replaces header section with a click counter
const headerClick = document.querySelector('.intro');
headerClick.addEventListener('click', e => {
    headerClick.innerHTML = `Click count: ${event.detail}`;
});

//changes color on resize
window.addEventListener('resize', event => {
  const changeTitle = document.querySelector('h2');
  changeTitle.style.color = "tomato";
  });





