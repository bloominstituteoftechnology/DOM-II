// Your code goes here
/*
const logoHeading = document.querySelector('logo-heading');
logoHeading.addEventListener('mouseover', function (e) {
    //code below says if you click button the button will bounce to a larger size in 2sec
TweenMax.to('#logo-heading', 2, { scale: 1.5, ease: Bounce.easeOut });
});
*/

//nav a
const nav = document.querySelectorAll('nav a');
//adds event listener to 0th index of nav with 'click' object
nav[0].addEventListener('click', function (e) {
    //'Home' turns cyan when clicked
    e.target.style.color = 'cyan';
    //clicking on 'Home' only affects 'Home'
    e.stopPropagation();
});

nav[1].addEventListener('click', function (e) {
    e.target.style.color = 'teal';
    e.stopPropagation();
});

nav[2].addEventListener('click', function (e) {
    e.target.style.color = 'cyan';
    e.stopPropagation();
});

nav[3].addEventListener('click', function (e) {
    e.target.style.color = 'teal';
    e.stopPropagation();
});

//container
// const container = document.querySelector('.container home');
// container.addEventListener('keydown', function (e) {
//     e.style.backgroundColor = 'red';
//     console.log('keydown', e);
// });
// container.addEventListener('keyup', function (e) {
//     e.currentTarget.style.color = 'pink';
// });

//fun bus
let scale = 1;
const logoHeading = document.querySelector('.logo-heading');
logoHeading.onwheel = zoom;

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.25, scale), 2.5);
    // Apply scale transform
    logoHeading.style.transform = `scale(${scale})`;
};

//content-section
// const contentHeader = document.getElementsByClassName('text-content h2');
// contentHeader[0].addEventListener('focus', function (e) {
//     e.style.backgroundColor = "red";
//     e.stopPropagation();
// });

// const contentHeader = document.getElementsByClassName('text-content h2');
// contentHeader[1].addEventListener('focus', function (e) {
//     e.style.backgroundColor = "red";
//     e.stopPropagation();
// });

//welcome
// const dragWelcome = document.addEventListener("drag", function (e) {

// }, false);

// const dragstartWelcome = document.addEventListener("dragstart", function (e) {
//     // store a ref. on the dragged elem
//     e.target;
//     // make it half transparent
//     e.target.style.opacity = .5;
// }, false);

// const dragendWelcome = document.addEventListener("dragend", function (e) {
//     // reset the transparency
//     e.target.style.opacity = "";
// }, false);

// /* events fired on the drop targets */
// const dragoverWelcome = document.addEventListener("dragover", function (e) {
//     // prevent default to allow drop
//     e.preventDefault();
// }, false);

// const dragenterWelcome = document.addEventListener("dragenter", function (e) {
//     // highlight potential drop target when the draggable element enters it
//     if (e.target.className == "intro") {
//         e.target.style.background = "pink";
//     }
// }, false);

// const dragleaveWelcome = document.addEventListener("dragleave", function (e) {
//     // reset background of potential drop target when the draggable element leaves it
//     if (e.target.className == "intro") {
//         e.target.style.background = "";
//     }
// }, false);

// const dropWelcome = document.addEventListener("drop", function (e) {
//     // prevent default action (open as link for some elements)
//     e.preventDefault();
//     // move dragged elem to the selected drop target
//     if (e.target.className == "intro h2") {
//         e.target.style.background = "";
//         dragged.parentNode.removeChild(dragged);
//         e.target.appendChild(dragged);
//     }
// }, false);

//buttons
const btns = document.querySelectorAll('.btn');
btns[0].addEventListener('dblclick', function (e) {
    e.target.style.backgroundColor = 'pink';
    e.stopPropagation();
});

btns[1].addEventListener('dblclick', function (e) {
    e.target.style.backgroundColor = 'pink';
    e.stopPropagation();
});

btns[2].addEventListener('dblclick', function (e) {
    e.target.style.backgroundColor = 'pink';
    e.stopPropagation();
});

// const signUpBtns = document.querySelectorAll('.btn');
// signUpBtns.forEach(function (element) {
//     element.addEventListener('dblclick', function (e) {
//         e.style.backgroundColor = 'pink';
//     });

// });
