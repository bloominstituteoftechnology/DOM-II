// Your code goes here

let theBackground = document.querySelector('body');
theBackground.style.backgroundColor = '#fafad2';

let topBackground = document.querySelector('header');
topBackground.style.backgroundImage = 'linear-gradient(dodgerblue, lightblue)';
topBackground.style.borderBottomLeftRadius = '10px';
topBackground.style.borderBottomRightRadius = '10px';


// 1. Mouse Over
const theHeader = document.querySelector('header');
theHeader.addEventListener('mouseenter',(event)=>{
    theHeader.style.backgroundImage = 'linear-gradient(lightblue, dodgerblue)';
    theHeader.style.transitionDuration = '2s';
});

theHeader.addEventListener('mouseleave',(event)=>{
    theHeader.style.transitionDelay = '1s';
    theHeader.style.transitionDuration = '2s';
    topBackground.style.backgroundImage = 'linear-gradient(dodgerblue, lightblue)';
});


// 2. On Click
let funClick = document.querySelector('header div h1');
let step = true;
funClick.addEventListener('click', (event) => {
    step = !step;
    if (step === false){theBackground.style.backgroundColor = 'lightsalmon';}
    else {theBackground.style.backgroundColor = '#fafad2';}
});


// 3.  Blur / Focus
let blurFocus = document.querySelector('div header img');
blurFocus.style.filter = 'blur(6px)';
blurFocus.addEventListener('mouseover', (event) => {
    blurFocus.style.filter = 'initial';
});
blurFocus.addEventListener('mouseout', (event) => {
    blurFocus.style.filter = 'blur(6px)';
});

// 4. A tag stuff
let nav = document.querySelector('nav');
let navA = document.querySelectorAll('a');
navA.forEach(function(item, index, event) {
    // event.preventDefault();
    // item.innerText = siteContent['nav'][`nav-item-${index+1}`];
    item.style.color = 'darkslategrey';
});




// 5. Button to Top
let topAnchor = document.createElement('a');
topAnchor.textContent = 'Back to Top';
topAnchor.style.fontSize = '1rem';
topAnchor.style.position = 'relative';
topAnchor.style.left = '80px';
topAnchor.href = '#top';
nav.appendChild(topAnchor);
topAnchor.style.visibility = 'hidden';
//  Above creates the button to spec

window.addEventListener('scroll', (event) => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topAnchor.style.visibility = 'visible';
    } else {
        topAnchor.style.visibility = 'hidden';
    }
    });


// 6. Double Click
let baseText = document.querySelector('p');
baseText.addEventListener("dblclick", (event) => {
    if (confirm("WARNING: YOU WILL REGRET CONTINUING!")) {
        baseText.style.fontSize = '4rem';
    } else {
        baseText.style.fontSize = '0.5rem';
    }
});

// 7.  On Load
// window.addEventListener('load', (event) => {
//     let person = prompt("Please enter your name:", "");
//     if (person == null || person === "" || person === "Harry Potter") {
//         alert("You're the worst.....")
//     }
//     else {
//           alert(`Thank you, ${person}. I hope you find all of the easter eggs!`);
// }});

// 8.

let midText = document.querySelectorAll("img")[1, 2];
midText.addEventListener('mousewheel', (event) => {
    midText.style.display = 'none';
});


// 9.
let dragLink = document.querySelector('.nav a');

// dragLink.addEventListener("dragstart", function(event) {
//     event.dataTransfer.setData("Text", event.target.id);
//     alert('test');
// });
//
// /* Events fired on the drop target */
// dragLink.addEventListener("dragover", function(event) {
//     event.preventDefault();
// });
//
// dragLink.addEventListener("drop", function(this, event) {
//     event.preventDefault();
//     let data = event.dataTransfer.getData("Text");
//     event.target.appendChild(document.getElementById(data));
//     document.getElementById("demo").innerHTML = "The p element was dropped";
// });

// let dragSpot = document.createElement('test');
// dragSpot.id = 'dragTarget';
// dragSpot.style.padding = '20px 40px';
// dragSpot.style.height = '30px';
// dragSpot.style.width = '30px';
// dragSpot.style.display = 'flex';
// // dragSpot.style.boxSizing = 'border-box';
// dragSpot.style.border = '1px solid black';
// dragSpot.style.position = 'relative';
// nav.appendChild(dragSpot);
// 10.



