// Your code goes here
// const smallBus = document.querySelector('.intro img');
// smallBus.addEventListener('mouseover', e => {
// })


//mouse over
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', event => event.target.style.color = 'red');


//key down
const backgroundChange = document.querySelector('body');
backgroundChange.addEventListener('keydown', e => {
    backgroundChange.style.color = 'red';
    e.stopPropagation();
})

backgroundChange.addEventListener('keyup', e => {
    backgroundChange.style.color = 'black';
    e.stopPropagation();
})



//Load
window.addEventListener('load', e => console.log('PAGE IS LOADED'));

//dbl click
const button = document.querySelectorAll('.content-pick .destination .btn');
Array.from(button).forEach(function(button){
    button.addEventListener("dblclick", function(e){
        e.target.style.backgroundColor = 'red'
    })
})


//click
let h2 = document.querySelector(".content-destination h2");
h2.addEventListener('click', function(e) {
    e.target.style.color = "blue";
});

//wheel //NO IDEA, quit this one
const photos = document.querySelector('.intro img');
console.log(photos);
photos.addEventListener('wheel', (e) => {
    e.preventDefault();
    let scale = 1;
    scale = e.deltaY * -.01;
    scale = Math.min(Math.max(.125, scale), 4);
    photos.style.transform = (`${scale}`);
    photos.onwheel = e;

})



//Context Menu(Right Click)
const midText = document.querySelectorAll('.content-section p');
midText.forEach(text => {
    text.addEventListener('contextmenu', event => {
        event.preventDefault();
    })
})

//mouseenter
let enterCount = 0;
const object = document.querySelector('.content-destination img');
object.addEventListener('mouseenter', e => {
    enterCount++;
    console.log(`The mouse has entered ${enterCount} times`);
})

//hover and blur
const hoverImage = document.querySelector('footer');
hoverImage.addEventListener('blur', e => {
    e.target.style.background = ' ';
}, true)



