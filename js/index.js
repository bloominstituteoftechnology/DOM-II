import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);


Draggable.create(".logo-heading", {type:"x,y", edgeResistance:0.65, bounds:".container", inertia:true});
Draggable.create(".nav-link", {type: "rotation", inertia: true});


// Your code goes here
const btn = document.querySelector('.btn')
btn.addEventListener('click',() => {
    btn.textContent = 'Suprise!'
})

//Mouseover
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';

    setTimeout(() => {
        event.target.style.color = '';
    },500);
})

//Keydown
//wheel
const funBus = document.querySelector('.intro')
funBus.addEventListener('wheel', function zoom(event) {
    event.preventDefault;
    console.log('Number of times you scrolled on this Heading');
})

//Dblclick
const letsGo = document.querySelector('.content-section .text-content')
letsGo.addEventListener('dblclick', (event) => {
    console.log('working');
    event.target.style.color = 'red';

    // setTimeout(() => {
    //     event.target.style.color = '';
    // },500);
})

//resize
const adventureAwaits = document.querySelector('body')
adventureAwaits.addEventListener('resize', () => {
    console.log('Keeping track of the number of times the page has been resized')
})

//Tracking if the mouse cursor is going over the intro image
var child = document.querySelector('.intro'),
    mouseOver,
    mouseEnter,
    mouseLeave;

mouseOver = function mouseOver(){
    console.log( 'Mouse over' );
}

mouseEnter = function mouseEnter(){
    console.log( 'Mouse enter' );
    child.style.cursor = 'pointer';
}

mouseLeave = function mouseLeave(){
    console.log('Mouse left');
    child.style.cursor = 'pointer';
}

child.addEventListener('mouseover', mouseOver);
child.addEventListener('mouseenter', mouseEnter);
child.addEventListener('mouseleave', mouseLeave);

//Deletes the top content when the h2 header is clicked
var delHeader = document.querySelectorAll('.intro h2');
Array.from(delHeader).forEach(function(delHeader){
    delHeader.addEventListener('click', function(e){

        const h2 = e.target.parentElement;

        h2.parentNode.removeChild(h2)
    });
});

//Changes text color when clicked
var text_color = document.querySelectorAll('.content-section p');
Array.from(text_color).forEach(function(text_color){
    text_color.addEventListener('click', function(r){

        const p = r.target.parentElement;
        p.parentNode.style.color = 'red';
    })
})
//document.getElementsByClassName('content-section').style.color = 'red';

//Send a message to the user when clicked
var mess_con = document.querySelectorAll('.nav .nav-link');
Array.from(mess_con).forEach(function(mess_con){
    mess_con.addEventListener('click', function(e){
        
        alert('Hey! where are you going!?!');
    })
})

//On Click the color of the button will change
var button_change = document.querySelectorAll('.destination .btn');
Array.from(button_change).forEach(function(button_change){
    button_change.addEventListener('click', function(t){

        const bttn = t.target.parentElement;
        bttn.parentNode.style.color = 'darkblue';
    })
})